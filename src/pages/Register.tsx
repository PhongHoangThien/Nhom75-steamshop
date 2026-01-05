import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }
        console.log("Register data:", formData);
    };

    return (
        <div className="min-h-screen bg-bg flex items-center justify-center px-4 py-10">
            <div className="bg-panel p-8 rounded-lg shadow-card w-full max-w-md border border-border">
                <h2 className="text-2xl font-bold text-text text-center mb-6">Đăng Ký Tài Khoản</h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-textMuted text-sm mb-1">Tên hiển thị</label>
                        <div className="relative flex items-center">
                            <FaUser className="absolute left-3 text-textMuted" />
                            <input
                                type="text"
                                name="username"
                                className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary transition"
                                placeholder="Nhập tên hiển thị"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-textMuted text-sm mb-1">Email</label>
                        <div className="relative flex items-center">
                            <FaEnvelope className="absolute left-3 text-textMuted" />
                            <input
                                type="email"
                                name="email"
                                className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary transition"
                                placeholder="Nhập địa chỉ email"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-textMuted text-sm mb-1">Mật khẩu</label>
                        <div className="relative flex items-center">
                            <FaLock className="absolute left-3 text-textMuted" />
                            <input
                                type="password"
                                name="password"
                                className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary transition"
                                placeholder="Nhập mật khẩu"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-textMuted text-sm mb-1">Nhập lại mật khẩu</label>
                        <div className="relative flex items-center">
                            <FaLock className="absolute left-3 text-textMuted" />
                            <input
                                type="password"
                                name="confirmPassword"
                                className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary transition"
                                placeholder="Xác nhận mật khẩu"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex items-start text-sm">
                        <input type="checkbox" className="mt-1 mr-2 accent-primary" required />
                        <span className="text-textMuted">
                            Tôi đồng ý với <Link to="/" className="text-primary hover:underline">Điều khoản dịch vụ</Link> và <Link to="/" className="text-primary hover:underline">Chính sách bảo mật</Link>
                        </span>
                    </div>
                    <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-2 rounded-button transition duration-200">
                        Đăng Ký
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-textMuted">
                    Bạn đã có tài khoản?{" "}
                    <Link to="/login" className="text-primary font-bold hover:underline">
                        Đăng nhập ngay
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;