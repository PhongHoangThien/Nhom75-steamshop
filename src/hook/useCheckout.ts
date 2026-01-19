import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { clearCart } from "../redux/cartSlice";

export const useCheckout = (setOrder: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 1. Lấy dữ liệu từ Redux
    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
    const cart = useSelector((state: RootState) => state.cart);

    // 2. State cho Form
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [phone, setPhone] = useState("");

    // 3. Tính tổng tiền (Memoized)
    const subtotal = useMemo(() => {
        return cart.products.reduce(
            (total: number, item: any) => total + item.price * item.quantity,
            0
        );
    }, [cart.products]);

    // 4. Kiểm tra điều kiện (Redirect nếu chưa login hoặc giỏ hàng rỗng)
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        } else if (cart.products.length === 0) {
            navigate("/cart");
        }
    }, [isAuthenticated, cart.products.length, navigate]);

    // 5. Hàm xử lý đặt hàng
    const handlePlaceOrder = () => {
        if (!user) return;

        const newOrder = {
            products: cart.products,
            orderNumber: `ORD-${Date.now()}`, // Tạo mã đơn hàng ngẫu nhiên
            customer: user.username,
            email: user.email,
            phoneNumber: phone,
            totalPrice: subtotal, // Dùng subtotal đã tính
            paymentMethod: paymentMethod
        };

        setOrder(newOrder); // Lưu đơn hàng vào state cha (như code cũ của bạn)

        // Có thể dispatch clearCart ở đây nếu muốn xóa giỏ hàng sau khi mua
        // dispatch(clearCart());

        navigate("/order-confirmation");
    };

    return {
        user,
        cartItems: cart.products,
        subtotal,
        phone,
        setPhone,
        paymentMethod,
        setPaymentMethod,
        handlePlaceOrder
    };
};