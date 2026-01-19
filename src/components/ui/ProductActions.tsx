// src/components/product/ProductActions.tsx
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductActions = ({ addCart, buyNow, toggleLike, isLiked }: any) => {
    return (
        <div className="flex gap-4 mt-6">
            <button onClick={addCart} className="btn-theme px-6 py-3 rounded-lg">
                Thêm vào giỏ
            </button>

            <button onClick={buyNow} className="btn-theme px-6 py-3 rounded-lg">
                Mua ngay
            </button>

            <button
                onClick={toggleLike}
                className="btn-theme p-3 rounded-lg"
                title={isLiked ? "Bỏ yêu thích" : "Yêu thích"}
            >
                {isLiked ? <FaHeart /> : <FaRegHeart />}
            </button>
        </div>
    );
};

export default ProductActions;
