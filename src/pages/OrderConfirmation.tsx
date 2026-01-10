import {Link, useNavigate} from "react-router-dom";

const OrderConfirmation = ({ order }: any) => {
    const navigate = useNavigate();

    return (
        <div className="bg-panelLight min-h-screen py-10 px-4 md:px-16 lg:px-24 text-text">
            <div className="container mx-auto max-w-3xl bg-panel shadow rounded-xl p-8">

                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-price">
                        Cảm ơn quý khách đã mua hàng!
                    </h2>
                    <p className="text-textMuted text-sm md:text-base">
                        Đơn hàng của bạn đang được xử lý. Chúng tôi sẽ gửi thông báo
                        qua email hoặc số điện thoại của bạn.
                    </p>
                </div>

                <div className="space-y-3 text-sm mb-6">
                    <h3 className="text-lg font-semibold mb-2">
                        Thông tin đơn hàng
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <p>
                            <span className="font-medium">Tên người mua:</span>{" "}
                            {order.customer}
                        </p>
                        <p>
                            <span className="font-medium">Email:</span>{" "}
                            {order.email}
                        </p>
                        <p>
                            <span className="font-medium">SĐT:</span>{" "}
                            {order.phone}
                        </p>
                        <p>
                            <span className="font-medium">Mã đơn hàng:</span>{" "}
                            #123
                        </p>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">
                        Sản phẩm đã mua
                    </h3>

                    <div className="space-y-4">
                        {order.products.map((product: any) => (
                            <div
                                key={product.id}
                                className="flex items-center gap-4 border-b border-border pb-4"
                            >
                                <img
                                    src={`./images/games/${product.image}`}
                                    alt={product.name}
                                    className="w-28 h-20 object-cover rounded"
                                />

                                <div className="flex-1">
                                    <h4 className="font-semibold">
                                        {product.name}
                                    </h4>
                                    <p className="text-sm text-textMuted">
                                        Số lượng: {product.quantity}
                                    </p>
                                </div>

                                <div className="font-semibold text-sm">
                                    {(product.price * product.quantity).toLocaleString()} đ
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-border pt-4 flex justify-between items-center text-lg font-semibold mb-6">
                    <span>Tổng cộng</span>
                    <span className="text-primary">
                        {order.totalPrice.toLocaleString()} đ
                    </span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 font-semibold">
                    <Link to={"/order-history"} className="w-full">
                        <button className="btn-theme w-full rounded-lg py-3">
                            Xem trạng thái đơn hàng
                        </button>
                    </Link>

                    <Link to={"/"} className="w-full">
                        <button className="btn-theme w-full rounded-lg py-3">
                            Tiếp tục mua hàng
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
