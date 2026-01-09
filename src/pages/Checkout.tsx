import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {addToCart, clearCart} from "../redux/cartSlice";

const Checkout = ({setOrder}: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
    const cart = useSelector((state: RootState) => state.cart);

    const subtotal = cart.products.reduce(
        (total: number, item: any) => total + item.price * item.quantity,
        0
    );

    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (!isAuthenticated) navigate("/login");
        if (cart.products.length === 0) navigate("/cart");
    }, [isAuthenticated, navigate, cart.products.length]);

    if (!user) return null;

    const handlePlaceOrder = () => {
        const newOrder = {
            products: cart.products,
            orderNumber: "0245",
            customer: user.username,
            email: user.email,
            phoneNumber: phone,
            totalPrice: cart.totalPrice,
        }
        setOrder(newOrder);
        navigate("/order-confirmation");

        // dispatch(clearCart());
    };

    return (
        <div className="bg-panelLight py-8 px-4 md:px-16 lg:px-24 text-text">
            <div className="container mx-auto">
                <h3 className="text-2xl font-semibold mb-6">
                    Thanh toán
                </h3>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3 bg-panel shadow p-6 rounded-xl">
                        <h4 className="text-lg font-semibold mb-4 text-textMuted">
                            Sản phẩm trong đơn hàng
                        </h4>

                        <div className="space-y-4">
                            {cart.products.map((product: any) => (
                                <div
                                    key={product.id}
                                    className="flex gap-4 border-b pb-4"
                                >
                                    <img
                                        src={`./images/games/${product.image}`}
                                        alt={product.name}
                                        className="w-32 h-20 object-cover rounded"
                                    />

                                    <div className="flex-1">
                                        <h5 className="font-semibold">
                                            {product.name}
                                        </h5>
                                        <p className="text-sm text-textMuted">
                                            {product.category}
                                        </p>
                                        <p className="text-sm text-textMuted">
                                            {product.price.toLocaleString()} đ × {product.quantity}
                                        </p>
                                    </div>

                                    <div className="font-semibold">
                                        {(product.price * product.quantity).toLocaleString()} đ
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/3 bg-panel shadow p-6 rounded-xl sticky top-24">
                        <h4 className="text-lg font-semibold mb-4">
                            Thông tin thanh toán
                        </h4>

                        <div className="space-y-3 text-sm mb-6">
                            <div>
                                <span className="font-medium">Họ tên:</span>{" "}
                                {user.username}
                            </div>
                            <div>
                                <span className="font-medium">Email:</span>{" "}
                                {user.email}
                            </div>

                            <div className="flex items-center justify-between space-x-4">
                                <label className="text-textMuted">
                                    SĐT:
                                </label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full bg-panelLight py-2 px-3 rounded-md"
                                    placeholder="Nhập số điện thoại"
                                />
                            </div>
                        </div>

                        <h4 className="text-lg font-semibold mb-3">
                            Phương thức thanh toán
                        </h4>

                        <div className="space-y-3 mb-6 text-sm">
                            <label className="flex gap-3 items-start cursor-pointer">
                                <input
                                    type="radio"
                                    value="cod"
                                    checked={paymentMethod === "cod"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <p className="font-semibold">Thanh toán bằng thẻ visa</p>
                            </label>

                            <label className="flex gap-3 items-start cursor-pointer">
                                <input
                                    type="radio"
                                    value="bank"
                                    checked={paymentMethod === "bank"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <p className="font-semibold">Chuyển khoản ngân hàng</p>
                            </label>

                            <label className="flex gap-3 items-start cursor-pointer">
                                <input
                                    type="radio"
                                    value="momo"
                                    checked={paymentMethod === "momo"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <p className="font-semibold">Ví MoMo</p>
                            </label>
                        </div>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Tạm tính</span>
                                <span>{subtotal.toLocaleString()} đ</span>
                            </div>

                            <div className="border-t pt-3 flex justify-between font-semibold text-base">
                                <span>Tổng cộng</span>
                                <span>{subtotal.toLocaleString()} đ</span>
                            </div>
                        </div>

                        <button
                            onClick={handlePlaceOrder}
                            className="w-full mt-6 btn-theme py-3 rounded-lg font-semibold"
                        >
                            Đặt hàng
                        </button>

                        <div className="mt-4 text-xs text-textMuted">
                            Thanh toán an toàn · Giao hàng nhanh
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
