import {
    FaFire,
    FaStar,
    FaClock,
    FaHeart,
    FaGamepad
} from "react-icons/fa";

export const CATEGORY_MENU = {
    categories: [
        "Rougelike",
        "Survival",
        "Indie",
        "Adventure",
        "Online",
        "Offline"
    ],
    quickLinks: [
        {
            label: "Game đang giảm giá",
            icon: FaFire,
            path: "/product-on-sale"
        },
        {
            label: "Mới phát hành",
            icon: FaClock,
            path: "/products?sort=new"
        },
        {
            label: "Top bán chạy",
            icon: FaStar,
            path: "/products?sort=top"
        },
        {
            label: "Yêu thích",
            icon: FaHeart,
            path: "/wishlist"
        }
    ],
    highlight: {
        title: "Khám phá game hot",
        description: "Ưu đãi mỗi tuần – Đừng bỏ lỡ!",
        path: "/product-on-sale"
    }
};
