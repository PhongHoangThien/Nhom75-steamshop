import {Link, NavLink, useNavigate} from "react-router-dom";
import {FaMoon, FaSearch, FaShoppingCart, FaSun, FaUser, FaSignOutAlt, FaHistory, FaHeart, FaCog, FaList} from "react-icons/fa";
import {useTheme} from "../../hook/useTheme";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {logout} from "../../redux/authSlice";
import {useEffect, useRef, useState} from "react";
import { ProductCategory } from "../../data/ProductCategory";
import Logo from "../common/Logo";
import UserSection from "../auth/UserSection";
import NavbarSearch from "../ui/NavbarSearch";
import NavbarCategory from "../ui/NavbarCategory";

const NavBar = () => {
    const {theme, toggleTheme} = useTheme();
    const products = useSelector((state: RootState) => state.products.products);
    const cartProducts = useSelector((state: RootState) => state.cart.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isAuthenticated, user} = useSelector((state: RootState) => state.auth);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                open &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);


    return (
        <nav className='theme shadow-md text-text top-0 z-50 relative pt-3 sticky'>
            <div className='container mx-auto px-4 py-3 md:px-16 lg:px-24 space-x-16 flex space-between items-center'>
                <div className="relative h-0 flex justify-center -top-10 -right-10">
                    <Logo />
                </div>

                <NavbarSearch />

                <div className='flex items-center space-x-4'>
                    {!isAuthenticated ? (

                        <>
                            <button className='btn-theme-nav p-3 border rounded-lg '>
                                <FaUser className='w-5 h-5'/>
                            </button>
                            <div>
                                <Link to="/login" className='text-text hover:underline transition-colors'>Đăng nhập</Link>
                                <span className="text-text mx-1">/</span>
                                <Link to="/register" className='text-text hover:underline transition-colors'>Đăng kí</Link>
                            </div>
                        </>
                    ) : (
                        <UserSection user={user} />
                    )}
                </div>
                <Link to="/cart"
                      className='btn-theme-nav flex flex-row px-2 py-2 rounded-md space-x-2'>
                    <FaShoppingCart className='w-6 h-6'/>
                    &nbsp; <span className="hidden lg:block">Giỏ hàng</span>
                    <p className='panel-theme text-center rounded-md w-5'>{cartProducts.length}</p>
                </Link>

                {/*toggle theme*/}
                <div
                    onClick={toggleTheme}
                    className="border-theme-nav relative w-14 h-8 cursor-pointer rounded-full panel-theme flex items-center"
                >
                    <div
                        className={`toggle-theme absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center 
                        ${theme === "dark" ? "translate-x-6" : ""}`}
                    >
                        {theme === "dark" ? (
                            <FaMoon />
                        ) : (
                            <FaSun />
                        )}
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center space-x-20 py-2 text-lg font-bold mt-3'>
                <NavbarCategory />

                <div className="flex space-x-20 ">
                    {[
                        { path: "/", label: "Trang chủ" },
                        { path: "/products", label: "Tìm game" },
                        { path: "/product-on-sale", label: "Game đang giảm giá" },
                        { path: "/blogs", label: "Blogs" },
                        { path: "/payment-method", label: "Thanh toán" },

                    ].map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) => `hover:scale-110 relative pb-1 font-bold 
                            ${isActive ? "text-text dark:text-primary " : "text-text hover:text-text dark:hover:text-primary"} group`}
                        >
                            {({ isActive }) => (
                                <>
                                    {label}
                                    <span
                                        className={`absolute bottom-0 left-0 h-1 bg-text dark:bg-primary ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                                    />
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

            </div>
        </nav>
    )
}

export default NavBar;