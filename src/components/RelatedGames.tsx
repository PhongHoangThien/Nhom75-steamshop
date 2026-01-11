import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MockData } from "../data/MockData";
import ProductCard from "./ProductCard";

interface RelatedGamesProps {
    currentCategory: string;
    currentId: number;
}

const RelatedGames: React.FC<RelatedGamesProps> = ({ currentCategory, currentId }) => {
    const relatedGames = MockData.filter(
        (game) => game.category === currentCategory && game.id !== currentId
    );

    const sliderRef = useRef<HTMLDivElement>(null);

    if (relatedGames.length === 0) return null;

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
    };

    return (
        <div className="mt-12 relative group">
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4 uppercase">
                    Có thể bạn sẽ thích
                </h2>
                <div className="h-[1px] bg-gray-700 flex-1"></div> {/* Đường kẻ trang trí */}
            </div>

            <div className="relative">
                {/* Nút Trái */}
                <button
                    onClick={scrollLeft}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-gray-800/90 hover:bg-primary text-white rounded-full shadow-xl border border-gray-600 hover:scale-110 transition-all duration-200 hidden md:flex"
                >
                    <FaChevronLeft size={20} />
                </button>
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {relatedGames.map((game) => (
                        <div key={game.id} className="min-w-[280px] max-w-[280px] transform hover:-translate-y-1 transition-transform duration-300">
                            {/* Wrapper hiển thị Badge giảm giá */}
                            <div className="relative group h-full">
                                {game.discount > 0 && (
                                    <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        -{game.discount}%
                                    </div>
                                )}
                                <ProductCard product={game} />
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-gray-800/90 hover:bg-primary text-white rounded-full shadow-xl border border-gray-600 hover:scale-110 transition-all duration-200 hidden md:flex"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};
export default RelatedGames;