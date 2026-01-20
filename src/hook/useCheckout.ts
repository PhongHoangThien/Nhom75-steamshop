import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { clearCart } from "../redux/cartSlice";
import {updateBalance} from "../redux/authSlice";
import {addPurchasedItems} from "../redux/purchaseSlice";

export const useCheckout = (setOrder: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 1. Lấy dữ liệu từ Redux
    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
    const cart = useSelector((state: RootState) => state.cart);

    // 2. State cho Form
    const [paymentMethod, setPaymentMethod] = useState("account");
    const [phone, setPhone] = useState("");

    const getFinalPrice = (product: any) =>
        Math.round(product.price * (1 - (product.discount ?? 0) / 100));

    // 3. Tính tổng tiền (Memoized)
    const subtotal = useMemo(() => {
        return cart.products.reduce((total: number, item: any) => {
            const finalPrice = getFinalPrice(item);
            return total + finalPrice * item.quantity;
        }, 0);
    }, [cart.products]);

    // 4. Kiểm tra điều kiện (Redirect nếu chưa login hoặc giỏ hàng rỗng)
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
            return;
        }
    }, [isAuthenticated, cart.products.length, navigate]);

    // 5. Hàm xử lý đặt hàng
    const handlePlaceOrder = () => {
        if (!user) return;

        if (user.balance === undefined || user.balance < subtotal) {
            navigate("/payment-method");
            return;
        }

        const newOrder = {
            products: cart.products,
            orderNumber: `ORD-${Date.now()}`, // Tạo mã đơn hàng ngẫu nhiên
            customer: user.username,
            email: user.email,
            phoneNumber: phone,
            totalPrice: subtotal, // Dùng subtotal đã tính
            paymentMethod: paymentMethod
        };

        if (paymentMethod === "account") {
            dispatch(updateBalance(-subtotal));
        }

        setOrder(newOrder); // Lưu đơn hàng vào state cha (như code cũ của bạn)

        dispatch(addPurchasedItems(cart.products));

        // Có thể dispatch clearCart ở đây nếu muốn xóa giỏ hàng sau khi mua
        dispatch(clearCart());
        navigate("/order-confirmation");
    };

    return {
        user,
        cartItems: cart.products,
        subtotal,
        getFinalPrice,
        phone,
        setPhone,
        paymentMethod,
        setPaymentMethod,
        handlePlaceOrder
    };
};