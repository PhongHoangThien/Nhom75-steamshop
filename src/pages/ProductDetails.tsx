import { useParams } from "react-router-dom";
import { MockData } from "../data/MockData";
import ProductCard from "../components/ProductCard";

export default function GameDetailPage() {
    const { id } = useParams();
    const game = MockData.find((g) => g.id === Number(id));

    if (!game) return <h2>Game không tồn tại</h2>;

    return (
        <div className="detail-container">
            <img src={`../images/games/${game.image}`} alt={game.name} className="detail-image" />
            <h2>{game.name}</h2>
            <p>Giá: {game.price.toLocaleString()}đ</p>
        </div>
    );
}
