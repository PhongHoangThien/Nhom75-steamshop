import { useState } from 'react';

export const useChangePassword = () => {
    const [passwords, setPasswords] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswords({
            ...passwords,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!passwords.currentPassword || !passwords.newPassword || !passwords.confirmPassword) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        if (passwords.newPassword !== passwords.confirmPassword) {
            alert("Mật khẩu mới không khớp!");
            return;
        }
        if (passwords.newPassword.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }
        alert("Đổi mật khẩu thành công!");
        setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
    };

    return { passwords, handleChange, handleSubmit };
};