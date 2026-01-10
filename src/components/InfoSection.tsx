import {FaGamepad, FaHeadset, FaShieldAlt, FaShippingFast, FaTags, FaUserCheck} from "react-icons/fa";

const InfoSection =  () => {
    const infoItems = [
        {
            icon: <FaShippingFast className="text-5xl text-primary" />,
            title: "Giao hàng nhanh chóng",
            description: "Nhận ngay tài khoản hoặc key game sau khi thanh toán"
        },
        {
            icon: <FaShieldAlt className="text-5xl text-primary" />,
            title: "Bản quyền chính hãng",
            description: "Game 100% bản quyền, an toàn, không rủi ro"
        },
        {
            icon: <FaTags className="text-5xl text-primary" />,
            title: "Giá tốt mỗi ngày",
            description: "Ưu đãi hấp dẫn, giảm giá thường xuyên"
        },
        {
            icon: <FaHeadset className="text-5xl text-primary" />,
            title: "Hỗ trợ 24/7",
            description: "Đội ngũ hỗ trợ nhanh chóng qua Facebook, Discord"
        },
        {
            icon: <FaGamepad className="text-5xl text-primary" />,
            title: "Kho game đa dạng",
            description: "Hàng nghìn tựa game hot trên Steam, Epic, Origin"
        }
    ];

    return (
        <div className="panel-theme pb-8 pt-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {infoItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 border-theme rounded-lg shadow-md card-hover">
                        {item.icon}
                        <h3 className="mt-4 text-title font-semibold">{item.title}</h3>
                        <p className="mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfoSection;