import React from 'react';
import { User } from "../../redux/authSlice";
import { useProfileForm } from "../../hook/useProfileForm";
import InputField from "../auth/InputField";

const ProfileTab: React.FC<{ user: User }> = ({ user }) => {
    const { formData, handleChange, handleSave } = useProfileForm(user);

    return (
        <div className="panel-theme p-6 rounded-lg border border-border animate-fade-in">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border">Thông tin cá nhân</h2>

            <form className="space-y-6" onSubmit={handleSave}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-textMuted text-sm mb-2">Tên hiển thị</label>
                        <InputField
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-textMuted text-sm mb-2">Số điện thoại</label>
                        <InputField
                            name="phone"
                            placeholder="Chưa cập nhật"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-textMuted text-sm mb-2">Email (Không thể thay đổi)</label>
                    <InputField
                        type="email"
                        value={user.email}
                        disabled
                        className="cursor-not-allowed opacity-70"
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition shadow-lg transform active:scale-95"
                    >
                        Lưu thay đổi
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileTab;