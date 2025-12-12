import { games } from "../data/Games";
import GameCard from "../components/GameCard";
import {GameCategory} from "../data/GameCategory";

export default function HomePage() {
    return (
        <div className="bg-gray-100 py-2 px-4 md:px-16 lg:px-24">
            <div className="container mx-auto py-4 flex felx-col md:flex-row">
                <div className="w-full md:w-3/12">
                    <div className="bg-blue-500 text-white text-sm font-bold px-2 py-2">Danh mục game</div>
                    <ul className="bg-white border">
                        {GameCategory.map((category, index) => (
                            <li key={index} className="flex items-center py-2 px-4 text-sm font-medium hover:bg-gray-100">{category}</li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-9/12 h-96 relative">
                    <img src="/images/cyberpunk.png" alt="" className="w-full h-full" />
                </div>
            </div>

            <div className="home-container">
                <h2 className="title">Danh sách game</h2>

                <div className="game-list">
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </div>
        </div>


    );
}
