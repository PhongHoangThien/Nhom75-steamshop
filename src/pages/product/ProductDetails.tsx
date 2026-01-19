import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import RelatedGames from "../../components/section/RelatedGames";
import { useProductDetails } from "../../hook/useProductDetails"; // Import hook vừa tạo

export default function ProductDetails() {
    const {
        game,
        isLiked,
        discountedPrice,
        handleAddToCart,
        handleBuyNow,
        handleToggleWishlist
    } = useProductDetails();

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

                <div className="theme-game-detail grid grid-cols-1 md:grid-cols-2 gap-12 bg-bg p-8 rounded-2xl">
                    {/* Cột trái: Ảnh và Trailer */}
                    <div className="flex flex-col space-y-8">
                        <div className="relative">
                            <img
                                src={`${import.meta.env.BASE_URL}images/games/${game.image}`}
                                alt={game.name}
                                className="w-full rounded-xl object-cover"
                            />
                            <span className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 text-sm rounded-lg backdrop-blur-md">
                                {game.category}
                            </span>
                        </div>
                        {game.trailer && (
                            <div className="theme-game-detail-child p-6 rounded-2xl">
                                <h2 className="font-bold mb-4 text-title">Trailer</h2>
                                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden">
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

                    {/* Cột phải: Thông tin và Nút bấm */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-text_light dark:text-text font-extrabold leading-tight text-title">
                            {game.name}
                        </h1>

                        <div className="mt-2">
                            {game.discount && game.discount > 0 ? (
                                <div className="space-y-2">
                                    <div className="line-through text-xl text-danger_light">
                                        {game.price.toLocaleString()}đ
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl font-bold text-green-500">
                                            {discountedPrice?.toLocaleString()}đ
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
                                onClick={handleAddToCart}
                                className="px-8 py-3 border btn-theme-nav transition-all rounded-xl font-bold text-lg"
                            >
                                Thêm vào giỏ
                            </button>
                            <button
                                onClick={handleBuyNow}
                                className="px-8 py-3 btn-theme-nav transition-all rounded-xl font-bold text-lg"
                            >
                                Mua ngay
                            </button>

                            <button
                                onClick={handleToggleWishlist}
                                className={`box-shadow p-3 rounded-xl transition-all shadow-sm flex items-center justify-center ${
                                    isLiked
                                        ? "btn-theme-nav border-danger text-danger"
                                        : "btn-theme-nav border-border text-textMuted hover:border-danger hover:text-danger"
                                }`}
                                title={isLiked ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
                            >
                                {isLiked ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
                            </button>
                        </div>

                        {/* Thông tin phụ */}
                        <div className="text-text_light font-bold dark:text-textMuted space-y-4 text-sm w-full mt-6 border-t border-border pt-6">
                            <InfoRow label="Lượt tải" value={game.sold} />
                            <InfoRow label="Ngày phát hành" value={game.releaseDate} />
                            <InfoRow label="Nhà phát triển" value="Steam Shop" />
                        </div>
                    </div>

                    {/* Yêu cầu hệ thống */}
                    {game.systemRequirements && (
                        <>
                            <SystemReqBox title="Yêu cầu tối thiểu" reqs={game.systemRequirements.minimum} />
                            <SystemReqBox title="Yêu cầu khuyến nghị" reqs={game.systemRequirements.recommended} />
                        </>
                    )}
                </div>

                <div className="theme-game-detail p-8 rounded-2xl">
                    <h2 className="font-bold mb-4 text-title">Mô tả game</h2>
                    <p className="leading-relaxed">
                        {"Hiện chưa có mô tả chi tiết cho game này."}
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

// --- Các Component con nhỏ lẻ để làm gọn code chính ---

function InfoBox({title, value}: { title: string; value: string }) {
    return (
        <div className="theme-game-detail border border-border rounded-xl p-5 text-center shadow-sm">
            <p className="text-sm">{title}</p>
            <p className="font-bold mt-1 text-lg">{value}</p>
        </div>
    );
}

function InfoRow({ label, value }: { label: string, value: string | number | undefined }) {
    return (
        <p className="flex justify-between">
            <span>{label}:</span>
            <span className="text-text_light dark:text-textMuted font-medium">{value || "Đang cập nhật"}</span>
        </p>
    );
}

function SystemReqBox({ title, reqs }: { title: string, reqs: any }) {
    return (
        <div className="theme-game-detail-child p-6 rounded-2xl border border-border">
            <h2 className="font-bold mb-4 text-title">{title}</h2>
            <ul className="text-sm text-text_light font-bold dark:text-textMuted space-y-3">
                <li><span className="font-semibold">OS:</span> {reqs.os}</li>
                <li><span className="font-semibold">CPU:</span> {reqs.cpu}</li>
                <li><span className="font-semibold">RAM:</span> {reqs.ram}</li>
                <li><span className="font-semibold">GPU:</span> {reqs.gpu}</li>
                <li><span className="font-semibold">Storage:</span> {reqs.storage}</li>
            </ul>
        </div>
    );
}