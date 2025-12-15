import { Game } from "../data/Games";
import { Link } from "react-router-dom";

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    return (
        <div className="game-card">
            <Link to={`/game/${game.id}`}>
                <img src={game.image} alt={game.name} className="game-thumbnail" />
                <h3 className="game-title">{game.name}</h3>
                <p className="game-price">{game.price.toLocaleString()}đ</p>
            </Link>
        </div>
    );
}
