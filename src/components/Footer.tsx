import {Link} from "react-router-dom";
import {FaFacebook} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
            <div className=''>
                <div>
                    <img src="/images/logo.png" alt="" className="w-24 h-auto"/>
                    <h3>Multiple shop</h3>
                </div>
                <p>
                    Multiple shop| cửa hàng game bản quyền giá rẻ
                </p>
                <p>
                    Địa chỉ: abc Linh Trung, Thủ Đức, Hồ Chí Minh
                </p>
                <p>
                    Copyright © MultipleShop. All Rights Reserved. Powered by
                    <Link to="/">MultipleShop</Link>
                </p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Link to="/">Home</Link>
                <Link to="/">Games</Link>
                <Link to="/">Giới Thiệu</Link>
                <Link to="/">Liên hệ</Link>
                <Link to="/">Hướng dẫn mua hàng</Link>
            </div>
            <div>
                <h2>Sản phẩm bán chạy</h2>
                <ul>
                    <li>Game steam</li>
                    <li>Game online</li>
                    <li>Game offline</li>
                    <li>Tài khoản steam</li>
                </ul>

                <div>
                    <h3>Phương thức thanh toán</h3>
                    <img src="/images/payment.png" alt=""/>
                </div>
            </div>
            <div>
                <h3>FOLLOW US</h3>
                <Link to="/"><FaFacebook></FaFacebook></Link>
                <Link to="/"></Link>
                <Link to="/"></Link>
            </div>
        </footer>
    )
}

export default Footer;