import {useParams} from "react-router-dom";
import {MockData} from "../data/MockData";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/cartSlice";
import {useNavigate} from "react-router-dom";

export default function ProductDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const game = MockData.find((g) => g.id === Number(id));

    if (!game) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-red-400 text-xl">
                Game không tồn tại
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* ===== Thông tin chính ===== */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-700">

                    {/* ===== BÊN TRÁI: Ảnh + Trailer ===== */}
                    <div className="flex flex-col space-y-8">

                        {/* Ảnh game */}
                        <div className="relative">
                            <img
                                src={`${import.meta.env.BASE_URL}images/games/${game.image}`}
                                alt={game.name}
                                className="w-full rounded-xl object-cover"
                            />
                            <span className="absolute top-3 left-3 bg-black/70 px-3 py-1 text-sm rounded-lg">
                {game.category}
            </span>
                        </div>

                        {/* Trailer */}
                        {game.trailer && (
                            <div className="bg-[#0f172a] p-6 rounded-2xl border border-gray-700">
                                <h2 className="text-xl font-bold mb-4">Trailer</h2>

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

                    {/* ===== BÊN PHẢI: NỘI DUNG ===== */}
                    <div className="flex flex-col gap-6">

                        <h1 className="text-3xl font-bold leading-tight">
                            {game.name}
                        </h1>

                        <div className="text-gray-400 space-y-1 text-sm">
                            <p>
                                Nhà phát triển:{" "}
                                <span className="text-white">
                    {game.developer || "Đang cập nhật"}
                </span>
                            </p>
                            <p>
                                Ngày phát hành:{" "}
                                <span className="text-white">
                    {game.releaseDate || "Đang cập nhật"}
                </span>
                            </p>
                        </div>

                        <div className="text-3xl font-semibold text-green-400 mt-2">
                            {game.price.toLocaleString()}đ
                        </div>

                        {/* Button */}
                        <div className="flex flex-wrap gap-4 mt-6">
                            <button
                                onClick={() => dispatch(addToCart(game))}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold"
                            >
                                Thêm vào giỏ hàng
                            </button>

                            <button
                                onClick={() => {
                                    dispatch(addToCart(game));
                                    navigate("/cart");
                                }}
                                className="px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded-xl font-semibold"
                            >
                                Mua ngay
                            </button>
                        </div>
                    </div>
                </div>

                {/* ===== Mô tả ===== */}
                <div className="bg-[#111827] p-6 rounded-2xl border border-gray-700">
                    <h2 className="text-2xl font-bold mb-4">Mô tả game</h2>
                    <p className="text-gray-300 leading-relaxed">
                        {game.description ||
                            "Hiện chưa có mô tả chi tiết cho game này."}
                    </p>
                </div>


                {/* ===== Thông tin thêm ===== */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoBox title="Nền tảng" value="PC / Windows"/>
                    <InfoBox title="Đánh giá" value="★★★★☆ (4.5)"/>
                    <InfoBox title="Trạng thái" value="Đang bán"/>
                </div>
            </div>
        </div>
    );
}

function InfoBox({title, value}: { title: string; value: string }) {
    return (
        <div className="bg-[#111827] border border-gray-700 rounded-xl p-5 text-center">
            <p className="text-gray-400 text-sm">{title}</p>
            <p className="text-lg font-semibold mt-1">{value}</p>
        </div>
    );
}
