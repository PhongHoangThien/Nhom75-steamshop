import {useSelector} from "react-redux";
import {FaCartFlatbed, FaRegTrashCan} from "react-icons/fa6";

const Cart = () => {
    const cart = useSelector((state: any) => state.cart)
    return (
        <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
            {cart.products.length > 0 ?
                <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
                    <div className="flex items-center mb-4 space-x-2">
                        <h3 className="text-xl font-semibold">Giỏ hàng</h3>
                        <p className="text-sm">({cart.products.length} sản phẩm)</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                        <div className="md:w-2/3">
                            <div className="flex justify-between border-b items-center mb-4 text-sm font-bold">
                                <p>Danh sách sản phẩm</p>
                                <div className="flex space-x-16">
                                    <p>Giá</p>
                                    <p>Số lượng</p>
                                    <p>Tổng cộng</p>
                                    <p>Gỡ bỏ</p>
                                </div>
                            </div>
                            <div>
                                {cart.products.map((product: any) => (
                                    <div key={product.id} className="flex items-center justify-between border-b p-3">
                                        <div className="md:flex items-center mb-4 space-x-4">
                                            <img src={`./images/games/${product.image}`} alt={product.name}
                                            className="w-16 h-16 object-contain rounded" />
                                            <div className="flex-1 ml-4 text-lg font-semibold">
                                                <h3>{product.name}</h3>
                                            </div>
                                        </div>
                                        <div className="flex space-x-12 items-center">
                                            <p>{product.price} vnđ</p>
                                            <div className="flex items-center justify-center border text-xl">
                                                <button className="font-bold px-1.5 border-r">-</button>
                                                <p className="px-2">{product.quantity}</p>
                                                <button className="px-1 border-1">+</button>
                                            </div>
                                            <p>{(product.quantity * product.price).toFixed(2)}</p>
                                            <button className="text-bg hover:text-panelLight"><FaRegTrashCan /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                : <div>
                    <h3>Giỏ hàng của bạn đang trống.</h3>
                    <p>Thêm sản phẩm vào giỏ và quay lại trang này để thanh toán nha bạn</p>
                    <img src="./images/cart_empty.png"  alt=""/>
                </div>}
        </div>
    )
}

export default Cart