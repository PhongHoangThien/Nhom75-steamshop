import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";
import { removeFromWishlist } from "../../redux/wishlistSlice";
import { RootState } from "../../redux/store";
import ProductCard from "../ProductCard";

const WishlistTab = () => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    return (
        <div className="panel-theme p-6 rounded-lg border border-border animate-fade-in">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border flex items-center gap-2">
                <FaHeart className="text-danger" /> Sản phẩm yêu thích
            </h2>
            {wishlistItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="relative group">
                            <div className="transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="relative group">
                                    {item.discount > 0 && (
                                        <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            -{item.discount}%
                                        </div>
                                    )}
                                    <ProductCard product={item} />
                                </div>
                            </div>
                            <button
                                onClick={() => dispatch(removeFromWishlist(item.id))}
                                className="absolute top-2 right-2 z-20 bg-black/60 hover:bg-danger text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                                title="Xóa khỏi danh sách"
                            >
                                <FaTrash size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="inline-block p-4 bg-panelLight rounded-full mb-4">
                        <FaHeart size={40} className="text-textMuted opacity-50" />
                    </div>
                    <p className="text-textMuted">Danh sách yêu thích của bạn đang trống.</p>
                    <Link to="/" className="text-primary hover:underline mt-2 inline-block font-medium">
                        Khám phá sản phẩm ngay
                    </Link>
                </div>
            )}
        </div>
    );
};

export default WishlistTab;