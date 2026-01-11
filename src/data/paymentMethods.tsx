import React from "react";
import { FaUniversity, FaQrcode, FaCreditCard, FaMobileAlt } from "react-icons/fa";

export const PAYMENT_METHODS = [
    {
        id: "bank",
        name: "Chuyển khoản ngân hàng (QR)",
        icon: <FaUniversity className="text-xl" />,
        desc: "Tự động duyệt 24/7",
        fee: "Miễn phí"
    },
    {
        id: "momo",
        name: "Ví MoMo",
        icon: <FaQrcode className="text-xl text-pink-500" />,
        desc: "Quét mã QR MoMo",
        fee: "Miễn phí"
    },
    {
        id: "visa",
        name: "Thẻ Visa / Mastercard",
        icon: <FaCreditCard className="text-xl text-blue-500" />,
        desc: "Thanh toán quốc tế",
        fee: "2% + 2000đ"
    },
    {
        id: "card",
        name: "Thẻ cào điện thoại",
        icon: <FaMobileAlt className="text-xl text-orange-500" />,
        desc: "Viettel, Mobi, Vina",
        fee: "Phí 20%"
    },
];