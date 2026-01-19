import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";

export const useCart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 1. Lấy dữ liệu từ Redux
    const cart = useSelector((state: any) => state.cart);
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    // 2. Tính tổng tiền (Dùng useMemo để chỉ tính lại khi giỏ hàng thay đổi)
    const subtotal = useMemo(() => {
        return cart.products.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
    }, [cart.products]);

    // 3. Các hàm xử lý hành động (Action Handlers)
    const handleIncrease = (id: number) => dispatch(increaseQuantity(id));

    const handleDecrease = (id: number) => dispatch(decreaseQuantity(id));

    const handleRemove = (id: number) => dispatch(removeFromCart(id));

    const handleCheckout = () => {
        if (isAuthenticated) {
            navigate("/checkout");
        } else {
            navigate("/login");
        }
    };

    const handleContinueShopping = () => navigate("/products");

    // Trả về tất cả dữ liệu và hàm mà giao diện cần
    return {
        cartItems: cart.products,
        totalItems: cart.products.length,
        subtotal,
        isAuthenticated,
        handleIncrease,
        handleDecrease,
        handleRemove,
        handleCheckout,
        handleContinueShopping
    };
};