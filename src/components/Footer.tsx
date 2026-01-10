import {Link} from "react-router-dom";
import {FaDiscord, FaFacebook, FaReddit, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="theme">
            <div className="w-4/5 mx-auto px-4 md:px-12 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Multiple Shop" className="w-24 h-auto" />
                    </div>

                    <p>
                        Multiple Shop – Cửa hàng game bản quyền giá rẻ, uy tín và nhanh chóng.
                    </p>

                    <p>
                        Địa chỉ: Linh Trung, Thủ Đức, Hồ Chí Minh
                    </p>

                    <p className="text-xs">
                        © {new Date().getFullYear()} MultipleShop. Powered by{" "}
                        <Link to="/" className="text-primary hover:underline">
                            MultipleShop
                        </Link>
                    </p>
                </div>

                <div>
                    <h3 className="text-title mb-4">Điều hướng</h3>
                    <ul className="space-y-2 hover:underline text-sm">
                        <li><Link to="/">Trang chủ</Link></li>
                        <li><Link to="/products">Games</Link></li>
                        <li><Link to="/about">Giới thiệu</Link></li>
                        <li><Link to="/contact">Liên hệ</Link></li>
                        <li><Link to="/shop-guide">Hướng dẫn mua hàng</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-title mb-4">Sản phẩm nổi bật</h3>
                        <ul className="space-y-2 text-sm list-disc list-outside pl-4">
                            <li>Game Steam</li>
                            <li>Game Online</li>
                            <li>Game Offline</li>
                            <li>Tài khoản Steam</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <h3 className="text-title mb-3">Thanh toán</h3>
                        <img
                            src={`${import.meta.env.BASE_URL}images/payment.png`}
                            alt="Payment methods"
                            className="h-18 object-contain"
                        />
                    </div>

                    <h3 className="text-title mb-4">Follow Us</h3>
                    <div className="flex items-center gap-4 transition">
                        <Link to="/">
                            <FaFacebook size={20} />
                        </Link>
                        <Link to="/">
                            <FaDiscord size={20} />
                        </Link>
                        <Link to="/">
                            <FaTwitter size={20} />
                        </Link>
                        <Link to="/">
                            <FaReddit size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;