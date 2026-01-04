import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setGame } from "../redux/productSlice";
import { MockData } from "../data/MockData";
import GameCard from "../components/GameCard";
import { FaFire, FaFilter } from "react-icons/fa";

const GameOnSale = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const games = useSelector((state) => state.games.games);
    const [filteredGames, setFilteredGames] = useState<any[]>([]);
    const [sortType, setSortType] = useState("default"); // default, asc, desc
    useEffect(() => {
        dispatch(setGame(MockData));
    }, [dispatch]);
    useEffect(() => {
        if (!games) return;

        let tempGames = [...games];
        if (sortType === "asc") {
            tempGames.sort((a, b) => a.price - b.price);
        } else if (sortType === "desc") {
            tempGames.sort((a, b) => b.price - a.price);
        }

        setFilteredGames(tempGames);
    }, [games, sortType]);
    return (
        <div className="bg-panel min-h-screen py-8 px-4 md:px-16 lg:px-24 text-text">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-border pb-4">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <div className="p-3 bg-danger rounded-full text-white animate-pulse">
                            <FaFire size={24} />
                        </div>
                        <div>
                            <h2 className="text-title font-bold text-danger">Khuyến Mại Hot</h2>
                            <p className="text-textMuted text-sm">Săn game bản quyền giá rẻ nhất</p>
                        </div>
                    </div>

                    {/* Filter / Sort Bar */}
                    <div className="flex items-center space-x-4">
                        <span className="text-textMuted hidden md:block"><FaFilter className="inline mr-2"/>Sắp xếp:</span>
                        <select
                            className="bg-panelLight border border-border text-text text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary cursor-pointer hover:bg-bg transition"
                            onChange={(e) => setSortType(e.target.value)}
                            value={sortType}
                        >
                            <option value="default">Nổi bật nhất</option>
                            <option value="asc">Giá: Thấp đến Cao</option>
                            <option value="desc">Giá: Cao đến Thấp</option>
                        </select>
                    </div>
                </div>

                {/* Grid Products */}
                {filteredGames.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {filteredGames.map((game: any) => (
                            <div key={game.id} className="relative group">
                                <div className="absolute top-2 left-2 z-10 bg-danger text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                                    -{Math.floor(Math.random() * (70 - 10 + 1) + 10)}%
                                </div>
                                <GameCard product={game} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-textMuted text-lg">Không tìm thấy sản phẩm khuyến mãi nào.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameOnSale;