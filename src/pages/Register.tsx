import React from 'react';
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useAuthForm } from "../hook/useAuthForm";
import InputField from "../components/auth/InputField";
import PasswordInput from "../components/auth/PasswordInput";

const Register = () => {
    const { registerData, handleRegisterChange, submitRegister } = useAuthForm();

    return (
        <>
            <div className="w-full min-h-[85vh] theme"></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                <div className="panel-theme w-full max-w-5xl rounded-xl shadow-card overflow-hidden flex relative my-8 border border-theme">
                    <Link to="/" className="absolute top-4 right-4 text-textMuted_light dark:text-textMuted hover:text-text_light dark:hover:text-white z-10 transition">
                        <FaTimes size={24}/>
                    </Link>
                    <div className="w-full md:w-[70%] p-8 md:p-12">
                        <div className="flex gap-6 mb-6 border-b border-border_light dark:border-border pb-2">
                            <Link to="/login" className="text-2xl font-bold text-textMuted_light dark:text-textMuted hover:text-text_light dark:hover:text-text cursor-pointer pb-2 transition">
                                Đăng nhập
                            </Link>
                            <h2 className="text-2xl font-bold text-primary_light dark:text-primary border-b-2 border-primary_light dark:border-primary pb-2 cursor-pointer">
                                Đăng ký
                            </h2>
                        </div>

                        <p className="text-textMuted_light dark:text-textMuted text-sm mb-6">
                            Đăng ký để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn.
                        </p>

                        <form onSubmit={submitRegister} className="space-y-4">
                            <InputField name="fullname" placeholder="Họ và tên" onChange={handleRegisterChange} required />
                            <InputField name="email" type="email" placeholder="Email" onChange={handleRegisterChange} required />
                            <InputField name="username" placeholder="Tên đăng nhập" onChange={handleRegisterChange} required />

                            <PasswordInput name="password" placeholder="Mật khẩu" onChange={handleRegisterChange} required />
                            <PasswordInput name="confirmPassword" placeholder="Nhập lại mật khẩu" onChange={handleRegisterChange} required />

                            <InputField name="phone" placeholder="Số điện thoại (không bắt buộc)" onChange={handleRegisterChange} />

                            <div className="flex items-start gap-2 text-sm text-textMuted_light dark:text-textMuted mt-2">
                                <input type="checkbox" className="mt-1 accent-primary_light dark:accent-primary" required/>
                                <span>Tôi đồng ý với các điều khoản và nhận thông tin marketing từ Divine Shop.</span>
                            </div>

                            <button className="w-full bg-primary_light dark:bg-primary hover:bg-primaryHover_light dark:hover:bg-blue-600 text-white font-bold py-3 rounded-md transition duration-200 shadow-lg mt-2 transform active:scale-95">
                                Đăng Ký
                            </button>
                        </form>
                    </div>
                    <div className="hidden md:flex md:w-[30%] bg-bg_light dark:bg-bg items-center justify-center p-8 border-l border-theme">
                        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Register" className="max-w-full h-auto object-contain mx-auto opacity-90"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;