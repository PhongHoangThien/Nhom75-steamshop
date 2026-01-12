import { useParams } from "react-router-dom";
import { MockData } from "../data/MockData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import RelatedGames from "../components/RelatedGames";
import { RootState } from "../redux/store";
import { toggleWishlist } from "../redux/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    const game = MockData.find((g) => g.id === Number(id));

    const isLiked = game ? wishlistItems.some(item => item.id === game.id) : false;

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
        <div className="panel-theme min-h-screen bg-panel px-6 py-10 font-sans">
            <div className="max-w-6xl mx-auto space-y-10">

                <div className="theme-game-detail grid grid-cols-1 md:grid-cols-2 gap-12 bg-bg p-8 rounded-2xl shadow-lg">

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
                            <div className="theme-game-detail-child p-6 rounded-2xl">
                                <h2 className=" font-bold mb-4 text-title">Trailer</h2>
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
                        <h1 className="text-text_light dark:text-text font-extrabold leading-tight text-title">{game.name}</h1>
                        <div className="mt-2">
                            {game.discount && game.discount > 0 ? (
                                <div className="space-y-2">
                                    <div className=" line-through text-xl text-danger_light">
                                        {game.price.toLocaleString()}đ
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl font-bold text-green-500">
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
                                className=" px-8 py-3 border btn-theme-nav transition-all rounded-xl font-bold text-lg box-shadow "
                            >
                                Thêm vào giỏ
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(addToCart(game));
                                    navigate("/cart");
                                }}
                                className="px-8 py-3 btn-theme-nav transition-all rounded-xl font-bold text-lg box-shadow"
                            >
                                Mua ngay
                            </button>

                            <button
                                onClick={() => dispatch(toggleWishlist(game))}
                                className={`box-shadow p-3 rounded-xl transition-all shadow-sm flex items-center justify-center ${
                                    isLiked
                                        ? "btn-theme-nav border-danger text-danger"
                                        : "btn-theme-nav border-border text-textMuted hover:border-danger hover:text-danger"
                                }`}
                                title={isLiked ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
                            >
                                {isLiked ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
                            </button>

                            <div className="text-text_light font-bold dark:text-textMuted space-y-4 text-sm w-full mt-6 border-t border-border pt-6">
                                <p className="flex justify-between"><span>Lượt tải:</span> <span className="text-text_light  dark:text-textMuted font-medium">{game.sold || "Đang cập nhật"}</span></p>
                                <p className="flex justify-between"><span>Ngày phát hành:</span> <span className="text-text_light  dark:text-textMuted font-medium">{game.releaseDate || "Đang cập nhật"}</span></p>
                                <p className="flex justify-between"><span>Nhà phát triển:</span> <span className="text-text_light bold dark:text-textMuted font-medium">{game.developer || "Divine Shop"}</span></p>
                            </div>
                        </div>
                    </div>

                    {game.systemRequirements && (
                        <div className="theme-game-detail-child p-6 rounded-2xl border border-border">
                            <h2 className=" font-bold mb-4 text-title">Yêu cầu tối thiểu</h2>
                            <ul className="text-sm text-text_light font-bold dark:text-textMuted space-y-3">
                                <li><span className="font-semibold ">OS:</span> {game.systemRequirements.minimum.os}</li>
                                <li><span className="font-semibold ">CPU:</span> {game.systemRequirements.minimum.cpu}</li>
                                <li><span className="font-semibold ">RAM:</span> {game.systemRequirements.minimum.ram}</li>
                                <li><span className="font-semibold text">GPU:</span> {game.systemRequirements.minimum.gpu}</li>
                                <li><span className="font-semibold ">Storage:</span> {game.systemRequirements.minimum.storage}</li>
                            </ul>
                        </div>
                    )}
                    {game.systemRequirements && (
                        <div className="theme-game-detail-child p-6 rounded-2xl border border-border">
                            <h2 className=" font-bold mb-4 text-title">Yêu cầu khuyến nghị</h2>
                            <ul className="text-sm  space-y-3">
                                <li><span className="font-semibold ">OS:</span> {game.systemRequirements.recommended.os}</li>
                                <li><span className="font-semibold ">CPU:</span> {game.systemRequirements.recommended.cpu}</li>
                                <li><span className="font-semibold ">RAM:</span> {game.systemRequirements.recommended.ram}</li>
                                <li><span className="font-semibold ">GPU:</span> {game.systemRequirements.recommended.gpu}</li>
                                <li><span className="font-semibold ">Storage:</span> {game.systemRequirements.recommended.storage}</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="theme-game-detail p-8 rounded-2xl ">
                    <h2 className=" font-bold mb-4 text-title">Mô tả game</h2>
                    <p className=" leading-relaxed">
                        {game.description || "Hiện chưa có mô tả chi tiết cho game này."}
                    </p>
                </div>

                <div className="font-bold grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div className="theme-game-detail  border border-border rounded-xl p-5 text-center shadow-sm">
            <p className=" text-sm">{title}</p>
            <p className=" font-bold mt-1 text-lg">{value}</p>
        </div>
    );
}