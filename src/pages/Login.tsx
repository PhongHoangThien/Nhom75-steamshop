import React from 'react';
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useAuthForm } from "../hook/useAuthForm";
import InputField from "../components/auth/InputField";
import PasswordInput from "../components/auth/PasswordInput";
import SocialButtons from "../components/auth/SocialButtons";

const Login = () => {
    const { loginData, isLoading, error, handleLoginChange, submitLogin } = useAuthForm();

    return (
        <>
            <div className="w-full min-h-[85vh] theme"></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                <div className="panel-theme w-full max-w-5xl rounded-xl shadow-card overflow-hidden flex relative animate-fade-in border-theme">
                    <Link to="/" className="absolute top-4 right-4 text-textMuted_light dark:text-textMuted hover:text-text_light dark:hover:text-white z-10 transition">
                        <FaTimes size={24}/>
                    </Link>
                    <div className="w-full md:w-[70%] p-8 md:p-12">
                        <div className="flex gap-6 mb-8 border-b border-border_light dark:border-border pb-2">
                            <h2 className="text-2xl font-bold text-primary_light dark:text-primary border-b-2 border-primary_light dark:border-primary pb-2 cursor-pointer">
                                Đăng nhập
                            </h2>
                            <Link to="/register" className="text-2xl font-bold text-textMuted_light dark:text-textMuted hover:text-text_light dark:hover:text-text cursor-pointer pb-2 transition">
                                Đăng ký
                            </Link>
                        </div>
                        <p className="text-textMuted_light dark:text-textMuted text-sm mb-6">
                            Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn.
                        </p>

                        {error && (
                            <p className="text-danger_light dark:text-danger text-center text-sm mb-4 bg-red-500/10 p-2 rounded border border-danger_light dark:border-danger">
                                {error}
                            </p>
                        )}

                        <form onSubmit={submitLogin} className="space-y-5">
                            <InputField
                                name="email"
                                placeholder="Email hoặc tên đăng nhập"
                                value={loginData.email}
                                onChange={handleLoginChange}
                            />

                            <PasswordInput
                                name="password"
                                placeholder="Mật khẩu"
                                value={loginData.password}
                                onChange={handleLoginChange}
                            />

                            <div className="flex justify-between items-center text-sm">
                                <Link to="/forgot-password" className="text-primary_light dark:text-primary hover:underline font-medium">
                                    Bạn quên mật khẩu?
                                </Link>
                            </div>

                            <button
                                disabled={isLoading}
                                className="w-full bg-primary_light dark:bg-primary hover:bg-primaryHover_light dark:hover:bg-blue-600 text-white font-bold py-3 rounded-md transition duration-200 shadow-lg transform active:scale-95"
                            >
                                {isLoading ? "Đang xử lý..." : "Đăng nhập"}
                            </button>
                        </form>

                        <SocialButtons />
                    </div>
                    <div className="hidden md:flex md:w-[30%] bg-bg_light dark:bg-bg items-center justify-center p-8 border-l border-theme">
                        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Login" className="max-w-full h-auto object-contain mx-auto opacity-90"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;