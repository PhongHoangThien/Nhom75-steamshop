import { Link } from "react-router-dom";
import { Product } from "../redux/productSlice";

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    return (
        <div className="relative bg-panelLight rounded-xl overflow-hidden shadow hover:shadow-lg transition">

            {/* Badge giảm giá */}
            {product.discount > 0 && (
                <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-red-600 to-pink-600
                        text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{product.discount}%
                </div>
            )}

            <Link to={`/product/${product.id}`}>
                <img
                    src={`${import.meta.env.BASE_URL}images/games/${product.image}`}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />

                <div className="p-3 space-y-2">
                    <h3 className="font-semibold text-sm line-clamp-2">
                        {product.name}
                    </h3>

                    {/* Giá */}
                    {product.discount > 0 ? (
                        <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through text-sm">
                {product.price.toLocaleString()}đ
              </span>
                            <span className="text-green-400 font-bold">
                {(product.price * (100 - product.discount) / 100).toLocaleString()}đ
              </span>
                        </div>
                    ) : (
                        <span className="text-green-400 font-bold">
              {product.price.toLocaleString()}đ
            </span>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
