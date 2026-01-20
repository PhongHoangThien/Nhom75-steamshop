import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {FaHeart, FaProductHunt, FaTrash} from "react-icons/fa";
import { removeFromWishlist } from "../../redux/wishlistSlice";
import { RootState } from "../../redux/store";
import ProductCard from "../ui/ProductCard";
import PurchaseList from "../ui/PurchaseList";

const WishlistTab = () => {
    const dispatch = useDispatch();
    const purchaseItems = useSelector((state: RootState) => state.purchase.items);

    return (
        <div className="panel-theme p-6 rounded-lg border border-border animate-fade-in">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border flex items-center gap-2">
                <FaProductHunt className="text-price_light" /> Sản phẩm đã mua
            </h2>
            {purchaseItems.length > 0 ? (
                <div className="flex items-center gap-6">
                    <PurchaseList />
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="inline-block p-4 rounded-full mb-4">
                        <FaProductHunt size={40} className="text-price_light opacity-50" />
                    </div>
                    <p className="dark:text-textMuted text-text_light">Danh sách sản phẩm của bạn đang trống.</p>
                    <Link to="/" className="text-primary hover:underline mt-2 inline-block font-medium">
                        Khám phá sản phẩm ngay
                    </Link>
                </div>
            )}
        </div>
    );
};

export default WishlistTab;