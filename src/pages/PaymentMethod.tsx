import React from "react";
import {
    FaWallet, FaCreditCard, FaUniversity,
    FaShieldAlt, FaExclamationTriangle, FaHeadset,
    FaCheckCircle, FaRocket, FaLock, FaChevronRight
} from "react-icons/fa";

const PaymentMethod = () => {
    return (
        <div className=" min-h-screen bg-[#0f172a] text-white px-6 py-16 relative overflow-hidden">

            {/* Hiệu ứng đốm sáng nền (Glow Effect) */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                        Secure Checkout
                    </div>
                    <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        HÌNH THỨC THANH TOÁN
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Giao dịch an toàn, bảo mật và hoàn toàn tự động. Chọn phương thức phù hợp nhất với bạn.
                    </p>
                </div>

                {/* Bước thanh toán (Workflow) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                    {[
                        { icon: <FaRocket />, title: "1. Chọn sản phẩm", desc: "Thêm game bạn yêu thích vào giỏ hàng" },
                        { icon: <FaCreditCard />, title: "2. Thanh toán", desc: "Chọn ví hoặc ngân hàng để giao dịch" },
                        { icon: <FaCheckCircle />, title: "3. Nhận hàng", desc: "Sản phẩm được gửi ngay sau vài giây" },
                    ].map((step, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="text-blue-400 text-xl">{step.icon}</div>
                            <div>
                                <h4 className="font-bold text-sm">{step.title}</h4>
                                <p className="text-xs text-gray-500">{step.desc}</p>
                            </div>
                            {index < 2 && <FaChevronRight className="ml-auto text-gray-700 hidden md:block" />}
                        </div>
                    ))}
                </div>

                {/* Grid phương thức chính */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Ví điện tử */}
                    <div className="group bg-gradient-to-b from-gray-800/50 to-transparent p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-all duration-500 relative">
                        <div className="p-4 bg-blue-500 rounded-2xl w-fit shadow-lg shadow-blue-500/20 mb-6 group-hover:scale-110 transition-transform">
                            <FaWallet size={28} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Ví Điện Tử</h2>
                        <p className="text-gray-400 text-sm mb-6">Xử lý tức thì, không mất phí giao dịch. Phù hợp cho nạp số tiền nhỏ.</p>
                        <div className="grid grid-cols-2 gap-3 opacity-80">
                            <div className="bg-black/40 p-3 rounded-lg flex items-center justify-center border border-white/5 hover:border-pink-500 transition-colors cursor-help">MoMo</div>
                            <div className="bg-black/40 p-3 rounded-lg flex items-center justify-center border border-white/5 hover:border-blue-400 transition-colors cursor-help">ZaloPay</div>
                        </div>
                    </div>

                    {/* Ngân hàng */}
                    <div className="group bg-gradient-to-b from-gray-800/50 to-transparent p-8 rounded-3xl border border-gray-700 hover:border-green-500 transition-all duration-500">
                        <div className="p-4 bg-green-500 rounded-2xl w-fit shadow-lg shadow-green-500/20 mb-6 group-hover:scale-110 transition-transform">
                            <FaUniversity size={28} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Ngân Hàng</h2>
                        <p className="text-gray-400 text-sm mb-6">Hỗ trợ QR-Code của hơn 40 ngân hàng nội địa (Vietcombank, MB, Techcombank...)</p>
                        <div className="flex -space-x-3 overflow-hidden mb-4 italic text-xs text-gray-500">
                            VNPAY • NAPAS • VIETQR
                        </div>
                    </div>

                    {/* Thẻ Quốc tế */}
                    <div className="group bg-gradient-to-b from-gray-800/50 to-transparent p-8 rounded-3xl border border-gray-700 hover:border-orange-500 transition-all duration-500">
                        <div className="p-4 bg-orange-500 rounded-2xl w-fit shadow-lg shadow-orange-500/20 mb-6 group-hover:scale-110 transition-transform">
                            <FaLock size={28} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Thẻ Quốc Tế</h2>
                        <p className="text-gray-400 text-sm mb-6">Thanh toán bằng Visa, Mastercard, JCB toàn cầu. Bảo mật tiêu chuẩn PCI-DSS.</p>
                        <div className="flex gap-4 grayscale group-hover:grayscale-0 transition-all">
                            {/* Bạn có thể thay bằng thẻ <img> chứa logo Visa/Master */}
                            <div className="font-black text-xl italic opacity-50">VISA</div>
                            <div className="font-black text-xl italic opacity-50">MASTER</div>
                        </div>
                    </div>
                </div>

                {/* FAQ & Chính sách */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <FaShieldAlt className="text-blue-400" />
                            Cam kết bảo mật
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Mã hóa SSL 256-bit",
                                "Xác thực 2 lớp OTP",
                                "Không lưu thông tin thẻ",
                                "Xác nhận tự động 24/7"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                    <FaCheckCircle className="text-green-500 shrink-0" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <h3 className="text-xl font-bold mb-6">Câu hỏi thường gặp (FAQs)</h3>
                        <div className="space-y-4">
                            <details className="group border-b border-white/5 pb-4 cursor-pointer">
                                <summary className="list-none font-medium text-sm text-blue-300">Thanh toán bao lâu thì nhận được game?</summary>
                                <p className="text-gray-500 text-sm mt-2 leading-relaxed">Hệ thống xử lý tự động ngay khi nhận được tiền. Thông thường mất từ 10 - 30 giây.</p>
                            </details>
                            <details className="group border-b border-white/5 pb-4 cursor-pointer">
                                <summary className="list-none font-medium text-sm text-blue-300">Tôi chuyển khoản sai nội dung thì sao?</summary>
                                <p className="text-gray-500 text-sm mt-2 leading-relaxed">Hãy liên hệ ngay Fanpage hoặc Hotline kèm ảnh giao dịch, nhân viên sẽ hỗ trợ bạn cộng tiền thủ công trong 5 phút.</p>
                            </details>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-20 text-center p-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[40px] border border-white/10">
                    <FaHeadset className="mx-auto text-4xl text-blue-400 mb-6" />
                    <h2 className="text-2xl font-bold mb-2">Bạn vẫn cần trợ giúp?</h2>
                    <p className="text-gray-400 mb-8">Đừng ngần ngại liên hệ với đội ngũ kỹ thuật của chúng tôi.</p>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/25">
                        Chat với hỗ trợ viên
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;