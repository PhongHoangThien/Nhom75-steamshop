import React from 'react';
import { User } from "../../redux/authSlice";

const ProfileTab: React.FC<{ user: User }> = ({ user }) => {
    return (
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
    );
};

export default ProfileTab;