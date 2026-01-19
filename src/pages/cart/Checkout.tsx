import React from "react";
import { useCheckout } from "../../hook/useCheckout"; // Import hook

const Checkout = ({ setOrder }: any) => {
    // Gọi hook
    const {
        user,
        cartItems,
        subtotal,
        phone,
        setPhone,
        paymentMethod,
        setPaymentMethod,
        handlePlaceOrder
    } = useCheckout(setOrder);

    // Nếu chưa có user (đang redirect hoặc loading), không render gì cả để tránh lỗi
    if (!user) return null;

    return (
        <div className="panel-theme py-8 px-4 md:px-16 lg:px-24">
            <div className="container mx-auto">
                <h3 className="text-2xl font-semibold mb-6">Thanh toán</h3>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cột trái: Danh sách sản phẩm */}
                    <div className="card-panel-theme lg:w-2/3 shadow p-6 rounded-xl h-fit">
                        <h4 className="text-lg font-semibold mb-4">Sản phẩm trong đơn hàng</h4>

                        <div className="space-y-4">
                            {cartItems.map((product: any) => (
                                <div key={product.id} className="flex gap-4 border-b border-border pb-4 last:border-0">
                                    <img
                                        src={`./images/games/${product.image}`}
                                        alt={product.name}
                                        className="w-24 h-16 md:w-32 md:h-20 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h5 className="font-semibold line-clamp-1">{product.name}</h5>
                                        <p className="text-sm text-textMuted">{product.category}</p>
                                        <p className="text-sm mt-1">
                                            {product.price.toLocaleString()} đ × <span className="font-bold">{product.quantity}</span>
                                        </p>
                                    </div>
                                    <div className="font-bold text-primary">
                                        {(product.price * product.quantity).toLocaleString()} đ
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cột phải: Form thông tin & Thanh toán */}
                    <div className="card-panel-theme lg:w-1/3 shadow p-6 rounded-xl sticky top-24 border border-border">
                        <h4 className="text-lg font-semibold mb-4">Thông tin nhận hàng</h4>

                        <div className="space-y-3 text-sm mb-6 pb-6 border-b border-border">
                            <div className="flex justify-between">
                                <span className="font-medium text-textMuted">Người nhận:</span>
                                <span className="font-bold">{user.username}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium text-textMuted">Email:</span>
                                <span>{user.email}</span>
                            </div>

                            <div className="pt-2">
                                <label className="block font-medium mb-1">Số điện thoại <span className="text-danger">*</span></label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full py-2 px-3 rounded-md border border-border bg-bg focus:border-primary outline-none transition-all"
                                    placeholder="Nhập số điện thoại liên hệ"
                                />
                            </div>
                        </div>

                        <h4 className="text-lg font-semibold mb-3">Phương thức thanh toán</h4>

                        <div className="space-y-3 mb-6 text-sm">
                            <RadioOption
                                value="cod"
                                label="Thanh toán khi nhận hàng (COD)"
                                current={paymentMethod}
                                onChange={setPaymentMethod}
                            />
                            <RadioOption
                                value="bank"
                                label="Chuyển khoản ngân hàng"
                                current={paymentMethod}
                                onChange={setPaymentMethod}
                            />
                            <RadioOption
                                value="momo"
                                label="Ví MoMo"
                                current={paymentMethod}
                                onChange={setPaymentMethod}
                            />
                        </div>

                        <div className="space-y-2 text-sm pt-4 border-t border-border">
                            <div className="flex justify-between">
                                <span className="text-textMuted">Tạm tính</span>
                                <span>{subtotal.toLocaleString()} đ</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg text-primary pt-2">
                                <span>Tổng cộng</span>
                                <span>{subtotal.toLocaleString()} đ</span>
                            </div>
                        </div>

                        <button
                            onClick={handlePlaceOrder}
                            disabled={!phone} // Validate đơn giản: bắt buộc nhập SĐT mới cho bấm
                            className="w-full mt-6 btn-theme py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Đặt hàng ngay
                        </button>

                        <div className="mt-4 text-xs text-center text-textMuted flex items-center justify-center gap-1">
                            <span className="text-green-500">🛡️</span> Thanh toán an toàn · Giao hàng nhanh
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Component con để render nút Radio cho gọn
const RadioOption = ({ value, label, current, onChange }: any) => (
    <label className={`flex gap-3 items-center cursor-pointer p-3 rounded-lg border transition-all ${current === value ? 'border-primary bg-primary/5' : 'border-border hover:border-textMuted'}`}>
        <input
            type="radio"
            value={value}
            checked={current === value}
            onChange={(e) => onChange(e.target.value)}
            className="accent-primary"
        />
        <p className="font-semibold">{label}</p>
    </label>
);

export default Checkout;