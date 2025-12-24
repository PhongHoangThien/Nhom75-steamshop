import {Link} from "react-router-dom";
import {FaMoon, FaSearch, FaShoppingCart, FaSun, FaUser} from "react-icons/fa";
import {useTheme} from "../hook/useTheme";

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();

    return (

        <nav className='bg-bg shadow-md text-text'>
            <div className='container mx-auto px-4 py-3 md:px-16 lg:px-24 space-x-16 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to="/" className="flex items-center justify-center hover:scale-110 duration-100">
                        <img src="/images/logo.png" alt="" className="w-24 h-auto"/>
                    </Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form>
                        <input type="text" placeholder="Tìm kiếm sản phẩm" className='w-full bg-panelLight py-2 rounded-md placeholder:pl-2' />
                        <button
                            type="submit"
                            className="absolute right-0 top-0 h-full px-3 bg-bg flex items-center justify-center border border-border rounded-r-md hover:bg-primaryHover"
                        >
                            <FaSearch className="w-5 h-5 text-textMuted" />
                        </button>
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <button className='p-3 border border-border rounded-lg hover:bg-primaryHover'>
                        <FaUser className='w-5 h-5 text-textMuted' />
                    </button>
                    <div>
                        <Link to="/login" className='hover:text-primary transition-colors'>Đăng nhập</Link>
                        <span className="mx-1">/</span>
                        <Link to="/register" className='hover:text-primary transition-colors'>Đăng kí</Link>
                    </div>
                </div>
                <Link to="/cart" className='flex flex-row border border-border px-2 py-2 rounded-md space-x-2 hover:bg-primaryHover'>
                    <FaShoppingCart className='w-6 h-6 text-textMuted'/>
                    &nbsp; Giỏ hàng
                    <p className='bg-panelLight text-center rounded-md w-5'>0</p>
                </Link>
                <div>
                    <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-text dark:bg-panelLight text-bg dark:text-text"
                    >
                        {theme === "dark" ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>


            <div className='flex items-center justify-center space-x-20 pb-5 text-base text-text font-bold'>
                <Link to="/" className="hover:underline">
                    Trang chủ
                </Link>
                <Link to="/games" className="hover:underline">
                    Sản phẩm
                </Link>
                <Link to="/best-seller" className="hover:underline">
                    Sản phẩm mua nhiều
                </Link>
                <Link to="/game-on-sale" className="hover:underline">
                    Sản phẩm khuyến mại
                </Link>
                <Link to="/payment-method" className="hover:underline">
                    Hình thức thanh toán
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;