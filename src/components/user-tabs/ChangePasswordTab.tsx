import React from 'react';
import { FaKey } from "react-icons/fa";

const ChangePasswordTab = () => {
    return (
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
                <div className="pt-4">
                    <button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition">
                        Cập nhật mật khẩu
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePasswordTab;