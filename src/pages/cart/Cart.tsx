import React from "react";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import { useCart } from "../../hook/useCart"; // Import hook

const Cart = () => {
    // Gọi hook để lấy mọi thứ cần thiết
    const {
        cartItems,
        totalItems,
        subtotal,
        getFinalPrice,
        isAuthenticated,
        handleIncrease,
        handleDecrease,
        handleRemove,
        handleCheckout,
        handleContinueShopping
    } = useCart();



    // Giao diện khi giỏ hàng trống
    if (totalItems === 0) {
        return (
            <div className="panel-theme py-20 px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <img src="./images/cart-empty.png" alt="Empty Cart" className="w-48 mb-6 opacity-80" />
                <h3 className="text-xl font-semibold mb-2">Giỏ hàng của bạn đang trống</h3>
                <p className="mb-6">Thêm sản phẩm vào giỏ và quay lại để thanh toán nhé!</p>
                <button onClick={handleContinueShopping} className="btn-theme px-6 py-2 rounded-lg">
                    Quay lại cửa hàng
                </button>
            </div>
        );
    }

    // Giao diện chính
    return (
        <div className="panel-theme py-8 px-4 md:px-16 lg:px-24">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex items-center mb-6 space-x-2">
                    <h3 className="text-2xl font-semibold">Giỏ hàng</h3>
                    <p className="text-sm">({totalItems} sản phẩm)</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="card-panel-theme lg:w-2/3 shadow p-6 rounded-xl h-fit">
                        {/* Table Header */}
                        <div className="hidden md:grid grid-cols-12 gap-4 border-b pb-3 mb-4 text-sm font-semibold">
                            <div className="col-span-5">Sản phẩm</div>
                            <div className="col-span-2 text-center">Đơn giá</div>
                            <div className="col-span-2 text-center">Số lượng</div>
                            <div className="col-span-2 text-center">Thành tiền</div>
                            <div className="col-span-1 text-center">Xoá</div>
                        </div>

                        {cartItems.map((product: any) => (
                            <div key={product.id} className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 border-b py-4 text-sm relative">
                                <Link className="col-span-5 flex gap-4 items-center" to={`/product/${product.id}`}>
                                    <img
                                        src={`./images/games/${product.image}`}
                                        alt={product.name}
                                        className="w-24 h-16 md:w-32 md:h-20 object-cover rounded-md"
                                    />
                                    <div className="text-xs space-y-1">
                                        <h3 className="text-base font-bold line-clamp-1">{product.name}</h3>
                                        <p className="text-textMuted">{product.category}</p>
                                        {product.discount > 0 && <span className="text-danger">-{product.discount}%</span>}
                                    </div>
                                </Link>

                                {/* Price */}
                                <div className="col-span-2 text-center md:block flex gap-2">
                                    <span className="md:hidden font-bold">Giá: </span>
                                    <div>
                                        <p className="line-through text-xs text-textMuted">
                                            {product.price.toLocaleString()} đ
                                        </p>
                                        <p className="font-medium">{getFinalPrice(product).toLocaleString()} ₫</p>
                                    </div>
                                </div>

                                {/* Quantity Control */}
                                <div className="col-span-2 flex justify-center py-2 md:py-0">
                                    <div className="flex items-center border border-border rounded-lg overflow-hidden">
                                        <button className="px-3 py-1 hover:bg-bg" onClick={() => handleDecrease(product.id)}>-</button>
                                        <span className="px-3 font-medium">{product.quantity}</span>
                                        <button className="px-3 py-1 hover:bg-bg" onClick={() => handleIncrease(product.id)}>+</button>
                                    </div>
                                </div>

                                {/* Total per item */}
                                <div className="col-span-2 text-center font-bold text-primary">
                                    {(getFinalPrice(product) * product.quantity).toLocaleString()} đ
                                </div>

                                {/* Delete Button */}
                                <div className="col-span-1 flex justify-center absolute top-4 right-0 md:static">
                                    <button
                                        className="text-textMuted hover:text-danger transition-colors p-2"
                                        onClick={() => handleRemove(product.id)}
                                    >
                                        <FaRegTrashCan size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card-panel-theme lg:w-1/3">
                        <div className="rounded-xl shadow p-6 sticky top-24 border border-border">
                            <h3 className="text-lg font-semibold mb-4">Thông tin thanh toán</h3>

                            <div className="space-y-3 text-sm pb-4 border-b border-border">
                                <div className="flex justify-between">
                                    <span className="text-textMuted">Tạm tính</span>
                                    <span className="font-medium">{subtotal.toLocaleString()} đ</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-textMuted">Giảm giá</span>
                                    <span className="font-medium text-green-500">0 đ</span>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-between font-bold text-lg mb-6">
                                <span>Tổng cộng</span>
                                <span className="text-primary">{subtotal.toLocaleString()} vnđ</span>
                            </div>

                            {/* Coupon Input */}
                            <div className="flex gap-2 mb-4">
                                <input
                                    type="text"
                                    placeholder="Mã giảm giá"
                                    className="flex-1 panelLight-theme border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
                                />
                                <button className="btn-theme px-4 py-2 rounded-lg text-sm font-semibold">
                                    Áp dụng
                                </button>
                            </div>

                            {/* Checkout Button */}
                            <button
                                className="w-full btn-theme py-3 rounded-xl font-bold text-lg shadow-md hover:shadow-lg"
                                onClick={handleCheckout}
                            >
                                {isAuthenticated ? "Thanh toán ngay" : "Đăng nhập để mua hàng"}
                            </button>

                            <button
                                onClick={handleContinueShopping}
                                className="w-full mt-3 btn-theme py-3 rounded-xl font-bold text-lg shadow-md hover:shadow-lg"
                            >
                                Tiếp tục mua sắm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;