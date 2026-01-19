import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MockData } from "../data/MockData";
import { addToCart } from "../redux/cartSlice";
import { toggleWishlist } from "../redux/wishlistSlice";
import { RootState } from "../redux/store";

export const useProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Lấy danh sách wishlist từ Redux
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    // Tìm game dựa trên ID
    // Sử dụng useMemo để tránh tính toán lại không cần thiết nếu ID không đổi
    const game = useMemo(() => {
        return MockData.find((g) => g.id === Number(id));
    }, [id]);

    // Kiểm tra game đã có trong wishlist chưa
    const isLiked = useMemo(() => {
        return game ? wishlistItems.some((item) => item.id === game.id) : false;
    }, [game, wishlistItems]);

    // Tính giá sau giảm (Helper logic)
    const discountedPrice = game && game.discount
        ? (game.price * (100 - game.discount)) / 100
        : game?.price;

    // Effect: Scroll lên đầu trang khi ID thay đổi
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Handlers (Xử lý sự kiện)
    const handleAddToCart = () => {
        if (game) {
            dispatch(addToCart(game));
        }
    };

    const handleBuyNow = () => {
        if (game) {
            dispatch(addToCart(game));
            navigate("/cart");
        }
    };

    const handleToggleWishlist = () => {
        if (game) {
            dispatch(toggleWishlist(game));
        }
    };

    return {
        game,
        isLiked,
        discountedPrice,
        handleAddToCart,
        handleBuyNow,
        handleToggleWishlist,
    };
};