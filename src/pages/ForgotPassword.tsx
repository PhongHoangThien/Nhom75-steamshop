import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý logic gửi API reset password tại đây
        console.log("Request reset for:", email);

        // Giả lập đã gửi thành công
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-panel p-8 rounded-lg shadow-card border border-border">
                {!isSubmitted ? (
                    /* Form nhập Email */
                    <>
                        <div>
                            <h2 className="mt-2 text-center text-title font-bold text-text">
                                Quên mật khẩu?
                            </h2>
                            <p className="mt-2 text-center text-sm text-textMuted">
                                Đừng lo lắng! Hãy nhập email của bạn và chúng tôi sẽ gửi hướng dẫn khôi phục mật khẩu.
                            </p>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email-address" className="block text-sm font-medium text-textMuted mb-1">
                                    Email đăng ký
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-border placeholder-gray-500 text-text bg-panelLight rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors"
                                    placeholder="Nhập email của bạn"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                                >
                                    Gửi yêu cầu
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    /* Thông báo thành công */
                    <div className="text-center py-4">
                        <div className="flex justify-center mb-4">
                            <FaCheckCircle className="text-5xl text-success" />
                        </div>
                        <h2 className="text-xl font-bold text-text mb-2">Kiểm tra email của bạn</h2>
                        <p className="text-textMuted text-sm mb-6">
                            Chúng tôi đã gửi hướng dẫn khôi phục mật khẩu đến <strong>{email}</strong>.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-primary hover:underline text-sm"
                        >
                            Thử lại với email khác
                        </button>
                    </div>
                )}

                {/* Nút quay lại */}
                <div className="text-center mt-4">
                    <Link to="/login" className="flex items-center justify-center text-sm font-medium text-textMuted hover:text-text transition-colors">
                        <FaArrowLeft className="mr-2" /> Quay lại đăng nhập
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;