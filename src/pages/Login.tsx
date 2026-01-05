import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLock, FaUser } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login with:", email, password);
    };

    return (
        <div className="min-h-screen bg-bg flex items-center justify-center px-4">
            <div className="bg-panel p-8 rounded-lg shadow-card w-full max-w-md border border-border">
                <h2 className="text-2xl font-bold text-text text-center mb-6">Đăng Nhập</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-textMuted text-sm mb-1">Email hoặc Tên đăng nhập</label>
                        <div className="relative flex items-center">
                            <FaUser className="absolute left-3 text-textMuted" />
                            <input
                                type="text"
                                className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary transition"
                                placeholder="Nhập email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-textMuted text-sm mb-1">Mật khẩu</label>
                        <div className="relative flex items-center">
                            <FaLock className="absolute left-3 text-textMuted" />
                            <input
                                type="password"
                                className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary transition"
                                placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-textMuted cursor-pointer hover:text-text">
                            <input type="checkbox" className="mr-2 accent-primary" />
                            Ghi nhớ đăng nhập
                        </label>
                        <Link to="/forgot-password" className="text-primary hover:underline">
                            Quên mật khẩu?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-2 rounded-button transition duration-200">
                        Đăng Nhập
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center justify-center space-x-2">
                    <span className="h-px w-full bg-border"></span>
                    <span className="text-textMuted text-sm whitespace-nowrap">Hoặc đăng nhập với</span>
                    <span className="h-px w-full bg-border"></span>
                </div>

                {/* Social Login */}
                <div className="flex space-x-4">
                    <button className="flex-1 flex items-center justify-center bg-[#3b5998] text-white py-2 rounded hover:opacity-90 transition">
                        <FaFacebook className="mr-2" /> Facebook
                    </button>
                    <button className="flex-1 flex items-center justify-center bg-[#db4437] text-white py-2 rounded hover:opacity-90 transition">
                        <FaGoogle className="mr-2" /> Google
                    </button>
                </div>

                <div className="mt-6 text-center text-sm text-textMuted">
                    Bạn chưa có tài khoản?{" "}
                    <Link to="/register" className="text-primary font-bold hover:underline">
                        Đăng ký ngay
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
