import {Link, NavLink, useNavigate} from "react-router-dom";
import {FaMoon, FaSearch, FaShoppingCart, FaSun, FaUser, FaSignOutAlt, FaHistory, FaHeart, FaCog, FaList} from "react-icons/fa";
import {useTheme} from "../../hook/useTheme";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {logout} from "../../redux/authSlice";
import {useEffect, useRef, useState} from "react";
import { ProductCategory } from "../../data/ProductCategory";
import Logo from "../common/Logo";

const NavBar = () => {
    const {theme, toggleTheme} = useTheme();
    const products = useSelector((state: RootState) => state.cart.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isAuthenticated, user} = useSelector((state: RootState) => state.auth);
    const [search, setSearch] = useState("")
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (!search.trim()) {
            navigate("/products");
            return;
        }

        navigate(`/products?search=${encodeURIComponent(search)}`);
    }

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
        <nav className='theme shadow-md text-text top-0 z-50 relative pt-3'>
            <div className='container mx-auto px-4 py-3 md:px-16 lg:px-24 space-x-16 flex space-between items-center'>
                <div className="relative h-0 flex justify-center -top-10 -right-10">
                    <Logo theme={theme} />
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Tìm kiếm sản phẩm"
                               className='dark:bg-panelLight/30 bg-text border-theme-nav w-full py-2 px-3 rounded-md'
                               onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn-theme-nav border-theme-nav absolute right-0 top-0 h-full px-3 flex items-center justify-center rounded-r-md "
                        >
                            <FaSearch className="w-5 h-5"/>
                        </button>
                    </form>
                </div>

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
                        <div className=" relative group z-50">
                            <div className="flex items-center gap-2 cursor-pointer py-1">
                                <img src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="Avatar"
                                     className="w-10 h-10 rounded-full border border-border object-cover"/>
                                <span className=" text-text font-bold text-sm max-w-[120px] truncate hidden xl:block">
                                    {user?.username}
                                </span>
                            </div>
                            <div
                                className="absolute right-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                <div
                                    className="theme  border rounded-md shadow-xl overflow-hidden text-sm">
                                    <div className="p-3 border-b border-border bg-panelLight/30">
                                        <p className="text-textMuted mb-1">Số dư tài khoản</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-text">
                                                {user?.balance?.toLocaleString() || 0}đ
                                            </span>
                                            <button
                                                onClick={() => navigate('/payment-method')}
                                                className="text-primary hover:text-blue-400 text-lg font-bold cursor-pointer"
                                                title="Nạp tiền">+
                                            </button>
                                        </div>
                                    </div>
                                    <ul className="py-1 text-white font-bold">
                                        <li>
                                            <Link to="/user-profile"
                                                  className="flex items-center px-4 py-2 theme-user-options">
                                                <FaCog className=""/> Quản lý tài khoản
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/order-history"
                                                  className="flex items-center px-4 py-2 theme-user-options">
                                            <FaHistory className=""/> Lịch sử đơn hàng
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/wishlist"
                                                  className="flex items-center px-4 py-2 theme-user-options">
                                                <FaHeart className=""/> Sản phẩm yêu thích
                                            </Link>
                                        </li>
                                        <li className="border-t border-border mt-1">
                                            <button
                                                onClick={handleLogout}
                                                className="flex w-full items-center px-4 py-3 dark:hover:bg-panelLight transition gap-2 text-red-500 hover:bg-text"
                                            >
                                                <FaSignOutAlt/> Đăng xuất
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/cart"
                      className='btn-theme-nav flex flex-row px-2 py-2 rounded-md space-x-2'>
                    <FaShoppingCart className='w-6 h-6'/>
                    &nbsp; <span className="hidden lg:block">Giỏ hàng</span>
                    <p className='panel-theme text-center rounded-md w-5'>{products.length}</p>
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
                <div className="relative" ref={dropdownRef}>
                    <div
                        className="flex hover:scale-110 items-center gap-2 cursor-pointer select-none rounded-md text-white hover:text-text dark:hover:text-primary"
                        onClick={() => setOpen(!open)}
                    >
                        <span>Thể loại game</span>
                        <FaList />
                    </div>

                    {open && (
                        <ul className="absolute left-0 top-full mt-2 panel-theme z-50 min-w-48 rounded-md shadow-xl">
                            {ProductCategory.map((category, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        navigate(`/products?category=${encodeURIComponent(category)}`);
                                        setOpen(false);
                                    }}
                                    className="panel-theme hover:bg-transparent/20 px-4 py-2 text-sm font-medium cursor-pointer whitespace-nowrap"
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="flex space-x-20 ">
                    {[
                        { path: "/", label: "Trang chủ" },
                        { path: "/products", label: "Tìm game" },
                        { path: "/product-on-sale", label: "Game đang giảm giá" },
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