import { games } from "../data/Games";
import GameCard from "../components/GameCard";
import {GameCategory} from "../data/GameCategory";
import InfoSection from "../components/InfoSection";
import BannerSlider from "../components/BannerSlider";

export default function HomePage() {
    return (
        <div className="bg-panel py-2 px-4 md:px-16 lg:px-24 text-text">
            <div className="container items-center justify-center mx-auto py-4 flex felx-col md:flex-row space-x-10">
                <div className="w-full md:w-3/12 border border-border">
                    <div className="bg-bg text-title font-bold px-2 py-2">Danh mục game</div>
                    <ul className="bg-panelLight">
                        {GameCategory.map((category, index) => (
                            <li key={index} className="flex items-center py-2 px-4 text-sm font-medium hover:bg-panel">{category}</li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-8/12 h-96 relative">
                    <BannerSlider />
                </div>
            </div>

            <InfoSection />

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
