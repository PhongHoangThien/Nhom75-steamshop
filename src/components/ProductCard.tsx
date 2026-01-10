import { Link } from "react-router-dom";
import {FaCartPlus} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/cartSlice";

export default function ProductCard({product: product}:any) {
    const dispatch = useDispatch();
    const handleAddToCart = (e: any, product: any) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(product));
    }
    return (
        <div className="bg-bg p-4 rounded relative card-hover h-full flex flex-col">
            <Link to={`/product/${product.id}`} className="flex-1">
                <img
                    src={`${import.meta.env.BASE_URL}images/games/${product.image}`}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
                <p className="text-textMuted">{product.price.toLocaleString()}đ</p>
            </Link>
            <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-panel
                group text-textMuted rounded-full hover:w-32 hover:bg-panelLight transition-all duration-300 overflow-hidden"
                 onClick={(e) => handleAddToCart(e, product)}>
                <FaCartPlus className="min-w-[1.25rem] text-lg"></FaCartPlus>
                <span className="hidden group-hover:block text-sm ml-2 whitespace-nowrap">Thêm giỏ hàng</span>
            </div>
        </div>
    );
}