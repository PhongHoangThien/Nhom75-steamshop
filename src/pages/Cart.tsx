import {useDispatch, useSelector} from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import {Link} from "react-router-dom";
import {decreaseQuantity, increaseQuantity, removeFromCart} from "../redux/cartSlice";
import {RootState} from "../redux/store";

const Cart = () => {
    const cart = useSelector((state: any) => state.cart);
    const subtotal = cart.products.reduce((total: number, item: any) => total + item.price * item.quantity,0);
    const dispatch = useDispatch();
    const {isAuthenticated, user} = useSelector((state: RootState) => state.auth);

    return (
        <div className="bg-panelLight py-8 px-4 md:px-16 lg:px-24">
            <div className="container mx-auto">
                <div className="flex items-center text-textMuted mb-6 space-x-2">
                    <h3 className="text-2xl font-semibold">Giỏ hàng</h3>
                    <p className="text-sm">
                        ({cart.products.length} sản phẩm)
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3 bg-panel shadow p-6">
                        {cart.products.length > 0 ? (
                            <div>
                                {/* Cart header */}
                                <div className="grid grid-cols-12 gap-4 border-b pb-3 mb-4 text-sm font-semibold text-textMuted">
                                    <div className="col-span-5">Sản phẩm</div>
                                    <div className="col-span-2 text-center">Đơn giá</div>
                                    <div className="col-span-2 text-center">Số lượng</div>
                                    <div className="col-span-2 text-center">Thành tiền</div>
                                    <div className="col-span-1 text-center">Xoá</div>
                                </div>

                                {cart.products.map((product: any) => (
                                    <div key={product.id} className="grid grid-cols-12 items-center gap-4 border-b py-4 text-sm text-text">
                                        <Link className="col-span-5 flex gap-4" to={`/game/${product.id}`}>
                                            <img
                                                src={`./images/games/${product.image}`}
                                                alt={product.name}
                                                className="w-48 h-32 object-cover card-hover"
                                            />
                                            <div className="text-textMuted text-xs mt-1 space-y-2">
                                                <h3 className="text-base text-text font-bold">
                                                    {product.name}
                                                </h3>
                                                <p>{product.category}thể loại</p>
                                                <p>{product.publisher}nph</p>
                                                <p>{product.discount} % giảm giá</p>
                                            </div>
                                        </Link>

                                        <div className="col-span-2 text-center">
                                            <p className="text-textMuted line-through text-xs">
                                                {(product.price * 1.1).toLocaleString()} đ
                                            </p>
                                            <p className="font-medium">
                                                {product.price.toLocaleString()} đ
                                            </p>
                                        </div>

                                        <div className="col-span-2 flex justify-center">
                                            <div className="flex items-center border rounded">
                                                <button
                                                    className="px-2 hover:bg-panelLight"
                                                    onClick={() => dispatch(decreaseQuantity(product.id))}
                                                >-</button>
                                                <span className="px-3 min-w-[32px] text-center">{product.quantity}</span>
                                                <button
                                                    className="px-2 hover:bg-panelLight"
                                                    onClick={() => dispatch(increaseQuantity(product.id))}
                                                >+</button>
                                            </div>
                                        </div>

                                        <div className="col-span-2 text-center font-semibold">
                                            {(product.price * product.quantity).toLocaleString()} đ
                                        </div>

                                        <div className="col-span-1 flex justify-center">
                                            <button
                                                className="text-textMuted hover:text-red-500"
                                                onClick={() => dispatch(removeFromCart(product.id))}
                                            >
                                                <FaRegTrashCan />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <img
                                    src="./images/cart-empty.png"
                                    alt=""
                                    className="w-48 mb-6 opacity-80"
                                />
                                <h3 className="text-xl text-text font-semibold mb-2">
                                    Giỏ hàng của bạn đang trống
                                </h3>
                                <p className="text-textMuted">
                                    Thêm sản phẩm vào giỏ và quay lại để thanh toán nhé!
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="lg:w-1/3 bg-panel">
                        <div className="rounded-xl text-text shadow p-6 sticky top-24">
                            <h3 className="text-lg font-semibold mb-4">
                                Thông tin thanh toán
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span>Tạm tính</span>
                                    <span>{subtotal.toLocaleString()} đ</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Tiết kiệm được</span>
                                    <span>0 đ</span>
                                </div>

                                <div className="border-t pt-3 flex justify-between font-semibold text-base">
                                    <span>Tổng cộng</span>
                                    <span>{subtotal.toLocaleString()} vnđ</span>
                                </div>
                            </div>

                            <div className="mt-5 mb-2 relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Nhập mã giảm giá"
                                    className="w-full text-bg border rounded-md px-3 py-2"
                                    disabled={cart.products.length === 0}
                                />
                                <button
                                    disabled={cart.products.length === 0}
                                    className="absolute right-0 p-3 top-0 h-full btn-theme border border-border rounded-r-md disabled:opacity-50"
                                >
                                    Áp dụng
                                </button>
                            </div>

                            {isAuthenticated ? (
                                <Link to="/checkout">
                                    <button
                                        disabled={cart.products.length === 0}
                                        className="w-full mt-5 btn-theme py-3 rounded-lg font-semibold disabled:opacity-50"
                                    >
                                        Thanh toán
                                    </button>
                                </Link>
                            ): (
                                <Link to="/login">
                                    <button className="w-full mt-5 btn-theme py-3 rounded-lg font-semibold disabled:opacity-50">
                                        Đăng nhập để mua hàng
                                    </button>
                                </Link>
                            )}

                            <Link to="/products">
                                <button className="w-full mt-3 btn-theme py-3 rounded-lg font-semibold">
                                    Tiếp tục mua hàng
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
