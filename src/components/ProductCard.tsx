import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }: any) {
    const dispatch = useDispatch();

    const handleAddToCart = (e: any, product: any) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(product));
    };

    // Giá sau khi giảm
    const finalPrice =
        product.discount > 0
            ? Math.round(product.price * (100 - product.discount) / 100)
            : product.price;

    return (
        <div className="theme p-4 rounded relative card-hover h-full flex flex-col">

            {product.discount > 0 && (
                <div className="absolute top-2 left-2 z-10
                    bg-gradient-to-r from-red-600 to-pink-600
                    text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    -{product.discount}%
                </div>
            )}

            <Link to={`/product/${product.id}`} className="flex-1">
                <img
                    src={`${import.meta.env.BASE_URL}images/games/${product.image}`}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                />

                <h3 className="text-lg font-semibold line-clamp-1">
                    {product.name}
                </h3>

                <div className="mt-1">
                    {product.discount > 0 ? (
                        <div className="flex items-center gap-2">
                            <span className="text-red-500 font-bold">
                                {finalPrice.toLocaleString()}đ
                            </span>
                            <span className="line-through text-textMuted text-sm">
                                {product.price.toLocaleString()}đ
                            </span>
                        </div>
                    ) : (
                        <p className="text-textMuted">
                            {product.price.toLocaleString()}đ
                        </p>
                    )}
                </div>
            </Link>

            <div
                className="panel-theme absolute bottom-4 right-2 flex items-center justify-center w-8 h-8
                group rounded-full hover:w-24 overflow-hidden"
                onClick={(e) => handleAddToCart(e, product)}
            >
                <FaCartPlus className="w-5 h-5 group-hover:hidden" />
                <span className="hidden group-hover:block text-xs">
                    Thêm giỏ hàng
                </span>
            </div>
        </div>
    );
}
