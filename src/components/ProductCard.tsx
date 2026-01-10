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
        <div className="theme p-4 rounded relative card-hover">
            <Link to={`/product/${product.id}`}>
                <img src={`./images/games/${product.image}`} alt={product.name}
                     className="w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="">{product.price.toLocaleString()}đ</p>
            </Link>
            <div className="btn-theme absolute bottom-4 right-2 flex items-center justify-center w-8 h-8
                group rounded-full hover:w-32 transition-transform"
                onClick={(e) => handleAddToCart(e, product)}>
                <FaCartPlus className="group-hover:hidden text-lg"></FaCartPlus>
                <span className="hidden group-hover:block text-sm">Thêm vào giỏ hàng</span>
            </div>
        </div>
    );
}
