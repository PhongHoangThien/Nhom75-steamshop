import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {FaTimes, FaEye, FaEyeSlash} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {registerStart, registerSuccess} from "../redux/authSlice";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        phone: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) return alert("Mật khẩu không khớp!");
        dispatch(registerStart());
        setTimeout(() => {
            dispatch(registerSuccess());
            alert("Đăng ký thành công!");
            navigate("/login");
        }, 1000);
    };
    const inputClass = "w-full bg-panelLight border border-border rounded-md px-4 py-2.5 focus:outline-none focus:border-primary text-text placeholder-textMuted transition [&::-ms-reveal]:hidden";
    return (
        <>
            <div className="w-full min-h-[85vh] bg-bg"></div>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                <div
                    className="bg-panel w-full max-w-5xl rounded-xl shadow-card overflow-hidden flex relative my-8 border border-border">
                    <Link to="/"
                          className="absolute top-4 right-4 text-textMuted hover:text-white z-10 transition"><FaTimes
                        size={24}/></Link>
                    <div className="w-full md:w-[70%] p-8 md:p-12">
                        <div className="flex gap-6 mb-6 border-b border-border pb-2">
                            <Link to="/login"
                                  className="text-2xl font-bold text-textMuted hover:text-text cursor-pointer pb-2 transition">Đăng
                                nhập</Link>
                            <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 cursor-pointer">Đăng
                                ký</h2>
                        </div>
                        <p className="text-textMuted text-sm mb-6">Đăng ký để theo dõi đơn hàng, lưu danh sách sản phẩm
                            yêu thích và nhận nhiều ưu đãi hấp dẫn.</p>
                        <form onSubmit={handleRegister} className="space-y-4">
                            <input type="text" name="fullname" className={inputClass} placeholder="Họ và tên"
                                   onChange={handleChange} required/>
                            <input type="email" name="email" className={inputClass} placeholder="Email"
                                   onChange={handleChange} required/>
                            <input type="text" name="username" className={inputClass} placeholder="Tên đăng nhập"
                                   onChange={handleChange} required/>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className={inputClass}
                                    placeholder="Mật khẩu"
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-textMuted hover:text-text focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash size={18}/> : <FaEye size={18}/>}
                                </button>
                            </div>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    className={inputClass}
                                    placeholder="Nhập lại mật khẩu"
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-textMuted hover:text-text focus:outline-none"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <FaEyeSlash size={18}/> : <FaEye size={18}/>}
                                </button>
                            </div>

                            <input type="text" name="phone" className={inputClass}
                                   placeholder="Số điện thoại (không bắt buộc)" onChange={handleChange}/>
                            <div className="flex items-start gap-2 text-sm text-textMuted mt-2">
                                <input type="checkbox" className="mt-1 accent-primary" required/>
                                <span>Tôi đồng ý với các điều khoản và nhận thông tin marketing từ Divine Shop.</span>
                            </div>
                            <button
                                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-md transition duration-200 shadow-lg mt-2 transform active:scale-95">Đăng
                                Ký
                            </button>
                        </form>
                    </div>
                    <div
                        className="hidden md:flex md:w-[30%] bg-bg items-center justify-center p-8 border-l border-border">
                        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Login"
                             className="max-w-full h-auto object-contain mx-auto opacity-90"/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Register;