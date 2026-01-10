import React from "react";
import {
    FaWallet, FaCreditCard, FaUniversity,
    FaShieldAlt, FaExclamationTriangle, FaHeadset
} from "react-icons/fa";

const PaymentMethod = () => {
    return (
        <div className="panel-theme min-h-screen bg-[#0f172a] text-white px-6 py-12">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Tiêu đề với Gradient Line */}
                <div className="text-center relative">
                    <h1 className="text-4xl font-extrabold mb-3 tracking-tight">HÌNH THỨC THANH TOÁN</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Chúng tôi hỗ trợ nhiều phương thức thanh toán an toàn, nhanh chóng và tiện lợi, giúp bạn trải nghiệm dịch vụ tốt nhất.
                    </p>
                    <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                </div>

                {/* Các phương thức thanh toán chính */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Ví điện tử */}
                    <div className="group bg-[#1e293b]/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaWallet size={80} />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <FaWallet size={24} />
                            </div>
                            <h2 className="text-xl font-bold">Ví điện tử</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['MoMo', 'ZaloPay', 'VNPay', 'ShopeePay'].map(item => (
                                <span key={item} className="px-3 py-1 bg-gray-800 rounded-md text-xs font-medium text-gray-300 border border-gray-700">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Thanh toán nhanh chóng qua QR Code. Xác nhận đơn hàng tự động chỉ trong vài giây.
                        </p>
                    </div>

                    {/* Thẻ ngân hàng */}
                    <div className="group bg-[#1e293b]/50 p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaCreditCard size={80} />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                                <FaCreditCard size={24} />
                            </div>
                            <h2 className="text-xl font-bold">Thẻ quốc tế</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Visa', 'MasterCard', 'JCB', 'ATM'].map(item => (
                                <span key={item} className="px-3 py-1 bg-gray-800 rounded-md text-xs font-medium text-gray-300 border border-gray-700">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Hỗ trợ tất cả ngân hàng nội địa và thẻ quốc tế. Bảo mật 3D Secure an toàn tuyệt đối.
                        </p>
                    </div>

                    {/* Chuyển khoản */}
                    <div className="group bg-[#1e293b]/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaUniversity size={80} />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                <FaUniversity size={24} />
                            </div>
                            <h2 className="text-xl font-bold">Chuyển khoản</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Sử dụng Internet Banking để chuyển khoản trực tiếp. Nội dung chuyển khoản theo mã đơn hàng.
                        </p>
                        <div className="text-[10px] uppercase tracking-wider text-purple-400 font-bold">Xử lý 24/7</div>
                    </div>
                </div>

                {/* Phần dưới: Bảo mật và Lưu ý */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 flex gap-5">
                        <div className="text-yellow-500 shrink-0">
                            <FaShieldAlt size={32} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold mb-3">Chính sách bảo mật</h2>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li className="flex items-start gap-2"><span>•</span> Thông tin được mã hóa SSL chuẩn ngân hàng.</li>
                                <li className="flex items-start gap-2"><span>•</span> Tuyệt đối không lưu trữ thông tin thẻ của khách.</li>
                                <li className="flex items-start gap-2"><span>•</span> Cam kết bảo mật dữ liệu cá nhân 100%.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 flex gap-5">
                        <div className="text-red-400 shrink-0">
                            <FaExclamationTriangle size={32} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold mb-3">Lưu ý quan trọng</h2>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li className="flex items-start gap-2"><span>•</span> Không tắt trình duyệt khi đang trong quá trình thanh toán.</li>
                                <li className="flex items-start gap-2"><span>•</span> Chụp lại màn hình giao dịch để đối soát nếu cần.</li>
                                <li className="flex items-start gap-2"><span>•</span> Liên hệ CSKH nếu quá 15p chưa nhận được sản phẩm.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Hỗ trợ */}
                <div className="flex flex-col items-center justify-center pt-6 border-t border-gray-800">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <FaHeadset className="text-blue-400" />
                        <span>Bạn gặp khó khăn khi thanh toán?</span>
                    </div>
                    <p className="text-sm">
                        Gửi email cho chúng tôi tại:
                        <a href="mailto:support@shopgame.com" className="text-blue-400 font-bold hover:underline ml-1">
                            support@shopgame.com
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PaymentMethod;