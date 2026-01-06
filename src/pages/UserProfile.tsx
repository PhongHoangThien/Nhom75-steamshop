import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { FaCamera, FaHistory, FaKey, FaSignOutAlt, FaUser, FaWallet } from "react-icons/fa";

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

    // Tab hiện tại: 'profile' | 'orders' | 'password'
    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    if (!user) return null;

    return (
        <div className="bg-bg min-h-screen py-8 px-4 md:px-16 lg:px-24 text-text">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="md:col-span-1 space-y-4">
                        <div className="bg-panel p-6 rounded-lg border border-border flex flex-col items-center text-center">
                            <div className="relative group cursor-pointer">
                                <img
                                    src={user.avatar || "/images/avatar.png"}
                                    alt="Avatar"
                                    className="w-24 h-24 rounded-full object-cover border-4 border-panelLight"
                                />
                                <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                    <FaCamera className="text-white text-xl" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-bold text-lg">{user.username}</h3>
                            <p className="text-textMuted text-sm">{user.email}</p>

                            <div className="mt-4 bg-panelLight w-full py-2 rounded-md flex items-center justify-center gap-2 text-primary font-bold">
                                <FaWallet /> <span>0đ</span>
                            </div>
                        </div>
                        <div className="bg-panel rounded-lg border border-border overflow-hidden">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`w-full flex items-center gap-3 px-6 py-4 hover:bg-panelLight transition ${activeTab === 'profile' ? 'bg-panelLight text-primary border-l-4 border-primary' : 'text-textMuted'}`}
                            >
                                <FaUser /> Thông tin tài khoản
                            </button>
                            <button
                                onClick={() => setActiveTab('orders')}
                                className={`w-full flex items-center gap-3 px-6 py-4 hover:bg-panelLight transition ${activeTab === 'orders' ? 'bg-panelLight text-primary border-l-4 border-primary' : 'text-textMuted'}`}
                            >
                                <FaHistory /> Lịch sử đơn hàng
                            </button>
                            <button
                                onClick={() => setActiveTab('password')}
                                className={`w-full flex items-center gap-3 px-6 py-4 hover:bg-panelLight transition ${activeTab === 'password' ? 'bg-panelLight text-primary border-l-4 border-primary' : 'text-textMuted'}`}
                            >
                                <FaKey /> Đổi mật khẩu
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-6 py-4 text-danger hover:bg-panelLight transition border-t border-border"
                            >
                                <FaSignOutAlt /> Đăng xuất
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        {activeTab === 'profile' && (
                            <div className="bg-panel p-6 rounded-lg border border-border animate-fade-in">
                                <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border">Thông tin cá nhân</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-textMuted text-sm mb-2">Tên hiển thị</label>
                                            <input
                                                type="text"
                                                defaultValue={user.username}
                                                className="w-full bg-panelLight border border-border rounded px-4 py-2 focus:outline-none focus:border-primary text-text"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-textMuted text-sm mb-2">Số điện thoại</label>
                                            <input
                                                type="text"
                                                placeholder="Chưa cập nhật"
                                                className="w-full bg-panelLight border border-border rounded px-4 py-2 focus:outline-none focus:border-primary text-text"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-textMuted text-sm mb-2">Email (Không thể thay đổi)</label>
                                        <input
                                            type="email"
                                            value={user.email}
                                            disabled
                                            className="w-full bg-bg border border-border rounded px-4 py-2 text-textMuted cursor-not-allowed"
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition">
                                            Lưu thay đổi
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                        {activeTab === 'orders' && (
                            <div className="bg-panel p-6 rounded-lg border border-border animate-fade-in">
                                <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border">Lịch sử giao dịch</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                        <tr className="text-textMuted text-sm border-b border-border">
                                            <th className="py-3 px-2">Mã đơn</th>
                                            <th className="py-3 px-2">Sản phẩm</th>
                                            <th className="py-3 px-2">Thời gian</th>
                                            <th className="py-3 px-2">Tổng tiền</th>
                                            <th className="py-3 px-2">Trạng thái</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                        <tr className="border-b border-border hover:bg-panelLight transition">
                                            <td className="py-4 px-2 text-primary font-medium">#10234</td>
                                            <td className="py-4 px-2">Elden Ring (Steam Key)</td>
                                            <td className="py-4 px-2">06/01/2026</td>
                                            <td className="py-4 px-2 font-bold">800.000đ</td>
                                            <td className="py-4 px-2"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Hoàn thành</span></td>
                                        </tr>
                                        <tr className="border-b border-border hover:bg-panelLight transition">
                                            <td className="py-4 px-2 text-primary font-medium">#10233</td>
                                            <td className="py-4 px-2">GTA V Premium</td>
                                            <td className="py-4 px-2">01/01/2026</td>
                                            <td className="py-4 px-2 font-bold">450.000đ</td>
                                            <td className="py-4 px-2"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Hoàn thành</span></td>
                                        </tr>
                                        <tr className="border-b border-border hover:bg-panelLight transition">
                                            <td className="py-4 px-2 text-primary font-medium">#10201</td>
                                            <td className="py-4 px-2">Nạp tiền vào tài khoản</td>
                                            <td className="py-4 px-2">25/12/2025</td>
                                            <td className="py-4 px-2 font-bold text-primary">+200.000đ</td>
                                            <td className="py-4 px-2"><span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Thành công</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/* Empty State (Nếu không có đơn hàng) */}
                                    {/* <div className="text-center py-10">
                                        <p className="text-textMuted">Bạn chưa có đơn hàng nào.</p>
                                        <Link to="/" className="text-primary hover:underline mt-2 inline-block">Mua sắm ngay</Link>
                                    </div>
                                    */}
                                </div>
                            </div>
                        )}
                        {activeTab === 'password' && (
                            <div className="bg-panel p-6 rounded-lg border border-border animate-fade-in">
                                <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border">Đổi mật khẩu</h2>
                                <form className="space-y-4 max-w-lg">
                                    <div>
                                        <label className="block text-textMuted text-sm mb-2">Mật khẩu hiện tại</label>
                                        <div className="relative">
                                            <input type="password" className="w-full bg-panelLight border border-border rounded px-4 py-2 focus:outline-none focus:border-primary text-text" />
                                            <FaKey className="absolute right-3 top-3 text-textMuted" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-textMuted text-sm mb-2">Mật khẩu mới</label>
                                        <div className="relative">
                                            <input type="password" className="w-full bg-panelLight border border-border rounded px-4 py-2 focus:outline-none focus:border-primary text-text" />
                                            <FaKey className="absolute right-3 top-3 text-textMuted" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-textMuted text-sm mb-2">Nhập lại mật khẩu mới</label>
                                        <div className="relative">
                                            <input type="password" className="w-full bg-panelLight border border-border rounded px-4 py-2 focus:outline-none focus:border-primary text-text" />
                                            <FaKey className="absolute right-3 top-3 text-textMuted" />
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition">
                                            Cập nhật mật khẩu
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;