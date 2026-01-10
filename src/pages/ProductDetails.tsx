import { useParams } from "react-router-dom";
import { MockData } from "../data/MockData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import RelatedGames from "../components/RelatedGames";

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const game = MockData.find((g) => g.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!game) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-panel text-danger text-xl">
                Game không tồn tại
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-panel text-text px-6 py-10 font-sans">
            <div className="max-w-6xl mx-auto space-y-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-bg p-8 rounded-2xl shadow-lg border border-border">

                    <div className="flex flex-col space-y-8">
                        <div className="relative">
                            <img
                                src={`${import.meta.env.BASE_URL}images/games/${game.image}`}
                                alt={game.name}
                                className="w-full rounded-xl object-cover shadow-md"
                            />
                            <span className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 text-sm rounded-lg backdrop-blur-md">
                                {game.category}
                            </span>
                        </div>
                        {game.trailer && (
                            <div className="bg-panel p-6 rounded-2xl border border-border">
                                <h2 className="text-xl font-bold mb-4 text-title">Trailer</h2>
                                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-inner">
                                    <iframe
                                        src={game.trailer}
                                        title="Game Trailer"
                                        className="absolute top-0 left-0 w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl font-extrabold leading-tight text-title">{game.name}</h1>
                        <div className="mt-2">
                            {game.discount && game.discount > 0 ? (
                                <div className="space-y-2">
                                    <div className="text-textMuted line-through text-xl">
                                        {game.price.toLocaleString()}đ
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl font-bold text-primary">
                                            {((game.price * (100 - game.discount)) / 100).toLocaleString()}đ
                                        </div>
                                        <span className="bg-danger/10 text-danger text-sm font-bold px-3 py-1 rounded-full border border-danger/20">
                                            -{game.discount}%
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-4xl font-bold text-primary">
                                    {game.price.toLocaleString()}đ
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6">
                            <button
                                onClick={() => dispatch(addToCart(game))}
                                className="px-8 py-3 bg-panelLight border border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-xl font-bold text-lg shadow-sm"
                            >
                                Thêm vào giỏ
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(addToCart(game));
                                    navigate("/cart");
                                }}
                                className="px-8 py-3 bg-primary hover:bg-blue-600 text-white transition-all rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30"
                            >
                                Mua ngay
                            </button>

                            <div className="text-textMuted space-y-4 text-sm w-full mt-6 border-t border-border pt-6">
                                <p className="flex justify-between"><span>Lượt tải:</span> <span className="text-text font-medium">{game.sold || "Đang cập nhật"}</span></p>
                                <p className="flex justify-between"><span>Ngày phát hành:</span> <span className="text-text font-medium">{game.releaseDate || "Đang cập nhật"}</span></p>
                                <p className="flex justify-between"><span>Nhà phát triển:</span> <span className="text-text font-medium">{game.developer || "Divine Shop"}</span></p>
                            </div>
                        </div>
                    </div>

                    {game.systemRequirements && (
                        <div className="bg-panel p-6 rounded-2xl border border-border">
                            <h2 className="text-xl font-bold mb-4 text-title">Yêu cầu tối thiểu</h2>
                            <ul className="text-sm text-textMuted space-y-3">
                                <li><span className="font-semibold text-text">OS:</span> {game.systemRequirements.minimum.os}</li>
                                <li><span className="font-semibold text-text">CPU:</span> {game.systemRequirements.minimum.cpu}</li>
                                <li><span className="font-semibold text-text">RAM:</span> {game.systemRequirements.minimum.ram}</li>
                                <li><span className="font-semibold text-text">GPU:</span> {game.systemRequirements.minimum.gpu}</li>
                                <li><span className="font-semibold text-text">Storage:</span> {game.systemRequirements.minimum.storage}</li>
                            </ul>
                        </div>
                    )}
                    {game.systemRequirements && (
                        <div className="bg-panel p-6 rounded-2xl border border-border">
                            <h2 className="text-xl font-bold mb-4 text-title">Yêu cầu khuyến nghị</h2>
                            <ul className="text-sm text-textMuted space-y-3">
                                <li><span className="font-semibold text-text">OS:</span> {game.systemRequirements.recommended.os}</li>
                                <li><span className="font-semibold text-text">CPU:</span> {game.systemRequirements.recommended.cpu}</li>
                                <li><span className="font-semibold text-text">RAM:</span> {game.systemRequirements.recommended.ram}</li>
                                <li><span className="font-semibold text-text">GPU:</span> {game.systemRequirements.recommended.gpu}</li>
                                <li><span className="font-semibold text-text">Storage:</span> {game.systemRequirements.recommended.storage}</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="bg-bg p-8 rounded-2xl border border-border shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-title">Mô tả game</h2>
                    <p className="text-textMuted leading-relaxed">
                        {game.description || "Hiện chưa có mô tả chi tiết cho game này."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoBox title="Nền tảng" value="PC / Windows"/>
                    <InfoBox title="Đánh giá" value="★★★★☆ (4.5)"/>
                    <InfoBox title="Trạng thái" value="Đang bán"/>
                </div>

                <RelatedGames currentCategory={game.category} currentId={game.id} />

            </div>
        </div>
    );
}

function InfoBox({title, value}: { title: string; value: string }) {
    return (
        <div className="bg-bg border border-border rounded-xl p-5 text-center shadow-sm">
            <p className="text-textMuted text-sm">{title}</p>
            <p className="text-text font-bold mt-1 text-lg">{value}</p>
        </div>
    );
}