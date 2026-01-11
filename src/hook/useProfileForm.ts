import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { User, loginSuccess } from "../redux/authSlice";

export const useProfileForm = (user: User) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: user.username || "",
        phone: user.phone || "",
    });

    // Đồng bộ dữ liệu khi user thay đổi
    useEffect(() => {
        setFormData({
            username: user.username || "",
            phone: user.phone || "",
        });
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();

        // Giữ nguyên các trường cũ, chỉ cập nhật trường mới
        const updatedUser = {
            ...user,
            username: formData.username,
            phone: formData.phone
        };

        dispatch(loginSuccess(updatedUser));
        alert("Cập nhật thông tin thành công!");
    };

    return {
        formData,
        handleChange,
        handleSave
    };
};