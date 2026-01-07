import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/authSlice";
import { RootState } from "../redux/store";
import { fakeLoginAPI } from "../services/authService";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error } = useSelector((state: RootState) => state.auth);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const user = await fakeLoginAPI(email, password);
            dispatch(loginSuccess(user));
            navigate("/");
        } catch (err) {
            dispatch(loginFailure(err as string));
        }
    };

    const inputClass = "w-full bg-panelLight border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary text-text placeholder-textMuted transition";

    return (
        <>
            <div className="w-full min-h-[85vh] bg-bg"></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                <div className="bg-panel w-full max-w-5xl rounded-xl shadow-card overflow-hidden flex relative animate-fade-in border border-border">
                    <Link to="/" className="absolute top-4 right-4 text-textMuted hover:text-white z-10 transition"><FaTimes size={24} /></Link>
                    <div className="w-full md:w-[70%] p-8 md:p-12">
                        <div className="flex gap-6 mb-8 border-b border-border pb-2">
                            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 cursor-pointer">Đăng nhập</h2>
                            <Link to="/register" className="text-2xl font-bold text-textMuted hover:text-text cursor-pointer pb-2 transition">Đăng ký</Link>
                        </div>
                        <p className="text-textMuted text-sm mb-6">Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn.</p>
                        {error && <p className="text-danger text-center text-sm mb-4 bg-red-500/10 p-2 rounded border border-danger">{error}</p>}
                        <form onSubmit={handleLogin} className="space-y-5">
                            <input type="text" className={inputClass} placeholder="Email hoặc tên đăng nhập" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" className={inputClass} placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className="flex justify-between items-center text-sm">
                                <Link to="/forgot-password" className="text-primary hover:underline font-medium">Bạn quên mật khẩu?</Link>
                            </div>
                            <button disabled={isLoading} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-md transition duration-200 shadow-lg transform active:scale-95">
                                {isLoading ? "Đang xử lý..." : "Đăng nhập"}
                            </button>
                        </form>
                        <div className="my-6 flex items-center justify-center space-x-2">
                            <span className="h-px w-full bg-border"></span><span className="text-textMuted text-sm whitespace-nowrap">Hoặc đăng nhập bằng</span><span className="h-px w-full bg-border"></span>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button
                                className="p-2 rounded-full border border-border bg-panelLight hover:bg-border transition text-red-500 flex items-center justify-center">
                                <FaGoogle size={24}/>
                            </button>
                            <button
                                className="p-2 rounded-full border border-border bg-panelLight hover:bg-border transition text-blue-500 flex items-center justify-center">
                                <FaFacebook size={24}/></button>
                        </div>
                    </div>
                    <div
                        className="hidden md:flex md:w-[30%] bg-bg items-center justify-center p-8 border-l border-border">
                        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Login" className="max-w-full h-auto object-contain mx-auto opacity-90" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;