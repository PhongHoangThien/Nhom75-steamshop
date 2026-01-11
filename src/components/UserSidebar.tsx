import React from 'react';
import { FaCamera, FaHistory, FaKey, FaSignOutAlt, FaUser, FaWallet, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { User } from "../redux/authSlice";

interface UserSidebarProps {
    user: User;
    activeTab: string;
}

const UserSidebar: React.FC<UserSidebarProps> = ({ user, activeTab }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    const getTabClass = (tabName: string) => {
        const baseClass = "w-full flex items-center gap-3 px-6 py-4 transition text-left";
        return activeTab === tabName
            ? `${baseClass} bg-panelLight text-primary border-l-4 border-primary`
            : `${baseClass} text-textMuted hover:bg-panelLight`;
    };

    return (
        <div className="space-y-4">
            <div className="panel-theme p-6 rounded-lg border border-border flex flex-col items-center text-center">
                <div className="relative group cursor-pointer">
                    <img
                        src={`${import.meta.env.BASE_URL}/images/avatar.png`}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full object-cover border-4 border-panelLight"
                    />
                    <div
                        className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <FaCamera className="text-white text-xl"/>
                    </div>
                </div>
                <h3 className="mt-4 font-bold text-lg">{user.username}</h3>
                <p className="text-textMuted text-sm">{user.email}</p>

                <div className="mt-4 bg-panelLight w-full py-2 rounded-md flex items-center justify-center gap-2 text-primary font-bold">
                    <FaWallet/> <span>{user.balance?.toLocaleString() || 0}đ</span>
                </div>
            </div>
            <div className="panel-theme rounded-lg border border-border overflow-hidden">
                <button onClick={() => navigate('/user-profile')} className={getTabClass('profile')}>
                    <FaUser/> Thông tin tài khoản
                </button>
                <button onClick={() => navigate('/order-history')} className={getTabClass('orders')}>
                    <FaHistory /> Lịch sử đơn hàng
                </button>
                <button onClick={() => navigate('/wishlist')} className={getTabClass('wishlist')}>
                    <FaHeart /> Sản phẩm yêu thích
                </button>
                <button onClick={() => navigate('/change-password')} className={getTabClass('password')}>
                    <FaKey /> Đổi mật khẩu
                </button>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-6 py-4 text-danger hover:bg-panelLight transition border-t border-border text-left"
                >
                    <FaSignOutAlt /> Đăng xuất
                </button>
            </div>
        </div>
    );
};

export default UserSidebar;