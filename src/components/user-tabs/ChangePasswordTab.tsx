import React from 'react';
import PasswordInput from "../auth/PasswordInput";
import { useChangePassword } from "../../hook/useChangePassword";
const ChangePasswordTab = () => {
    const { passwords, handleChange, handleSubmit } = useChangePassword();
    return (
        <div className="panel-theme p-6 rounded-lg border border-border animate-fade-in">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border">Đổi mật khẩu</h2>

            <form className="space-y-6 max-w-lg" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-textMuted text-sm mb-2">Mật khẩu hiện tại</label>
                    <PasswordInput
                        name="currentPassword"
                        value={passwords.currentPassword}
                        onChange={handleChange}
                        placeholder="Nhập mật khẩu hiện tại"
                        required
                    />
                </div>
                <div>
                    <label className="block text-textMuted text-sm mb-2">Mật khẩu mới</label>
                    <PasswordInput
                        name="newPassword"
                        value={passwords.newPassword}
                        onChange={handleChange}
                        placeholder="Nhập mật khẩu mới"
                        required
                    />
                </div>
                <div>
                    <label className="block text-textMuted text-sm mb-2">Nhập lại mật khẩu mới</label>
                    <PasswordInput
                        name="confirmPassword"
                        value={passwords.confirmPassword}
                        onChange={handleChange}
                        placeholder="Xác nhận mật khẩu mới"
                        required
                    />
                </div>

                <div className="pt-4">
                    <button
                        className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition shadow-lg transform active:scale-95"
                    >
                        Cập nhật mật khẩu
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePasswordTab;