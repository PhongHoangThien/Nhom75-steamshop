import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaTimes, FaEnvelope, FaArrowLeft } from "react-icons/fa";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitted(true); };

    return (
        <>
            <div className="w-full min-h-[85vh] bg-bg"></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                <div className="bg-panel w-full max-w-lg rounded-xl shadow-card overflow-hidden relative p-8 border border-border animate-fade-in">
                    <Link to="/" className="absolute top-4 right-4 text-textMuted hover:text-white transition"><FaTimes size={24} /></Link>
                    <h2 className="text-2xl font-bold text-center text-text mb-2">Quên mật khẩu?</h2>
                    {!isSubmitted ? (
                        <>
                            <p className="text-center text-textMuted text-sm mb-6">Vui lòng nhập địa chỉ email bạn đã đăng ký. Chúng tôi sẽ gửi hướng dẫn lấy lại mật khẩu.</p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <input type="email" required className="w-full bg-panelLight border border-border rounded-md px-4 py-3 pl-10 focus:outline-none focus:border-primary text-text placeholder-textMuted transition" placeholder="Nhập email của bạn" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <FaEnvelope className="absolute left-3 top-3.5 text-textMuted" />
                                </div>
                                <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-md transition shadow-lg transform active:scale-95">Gửi yêu cầu</button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center animate-fade-in">
                            <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4"><FaEnvelope className="text-success text-3xl" /></div>
                            <h3 className="text-xl font-bold text-text mb-2">Đã gửi email!</h3>
                            <p className="text-textMuted text-sm mb-6">Vui lòng kiểm tra hộp thư đến (và cả mục Spam) của <b>{email}</b>.</p>
                            <button onClick={() => setIsSubmitted(false)} className="text-primary hover:underline text-sm font-medium">Thử lại với email khác</button>
                        </div>
                    )}
                    <div className="mt-6 text-center">
                        <Link to="/login" className="inline-flex items-center text-textMuted hover:text-primary text-sm font-medium transition"><FaArrowLeft className="mr-2" /> Quay lại đăng nhập</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ForgotPassword;