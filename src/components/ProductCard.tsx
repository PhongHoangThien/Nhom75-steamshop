import { Link } from "react-router-dom";
import {FaCartPlus} from "react-icons/fa";

export default function ProductCard({product: game}:any) {
    return (
        <div className="bg-bg p-4 rounded relative border border-border card-hover">
            <Link to={`/game/${game.id}`}>
                <img src={`./images/games/${game.image}`} alt={game.name}
                     className="w-full h-48 object-cover mb-4" />
                <h3 className="text-lg font-semibold">{game.name}</h3>
                <p className="text-textMuted">{game.price.toLocaleString()}đ</p>
            </Link>
            <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-panel
                group text-textMuted rounded-full hover:w-32 hover:bg-panelLight transition-transform">
                <FaCartPlus className="group-hover:hidden text-lg"></FaCartPlus>
                <span className="hidden group-hover:block text-sm">Thêm vào giỏ hàng</span>
            </div>
        </div>
    );
}
