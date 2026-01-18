import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../redux/authSlice";
import {FaCog, FaHeart, FaHistory, FaSignOutAlt,FaFileInvoiceDollar} from "react-icons/fa";

const UserSection = (user: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
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
                            <Link to="/transaction-history"
                                  className="flex items-center px-4 py-2 theme-user-options gap-2">
                                <FaFileInvoiceDollar/> Lịch sử nạp tiền
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
    )
}

export default UserSection