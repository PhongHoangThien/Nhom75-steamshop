import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from "react-icons/fa";
import { usePayment } from '../../hook/usePayment';
import { getPaymentInfo } from '../../services/paymentService';
import { PAYMENT_METHODS } from '../../data/paymentMethods';
import MethodSelector from '../../components/payment/MethodSelector';
import AmountSelector from '../../components/payment/AmountSelector';
import PaymentDetails from '../../components/payment/PaymentDetails';
import {useTheme} from "../../hook/useTheme";
import Logo from "../../components/common/Logo";
const PaymentMethod = () => {
    const {isAuthenticated, amount, setAmount, selectedMethod, setSelectedMethod, copied, isProcessing, transferContent, handleCopy, handleConfirmPayment} = usePayment();
    const paymentInfo = getPaymentInfo(selectedMethod, amount, transferContent);
    const isSupported = selectedMethod === 'bank' || selectedMethod === 'momo';
    const {theme} = useTheme();
    if (!isAuthenticated) {
        return (
            <div
                className="min-h-[70vh] flex flex-col items-center justify-center bg-panelLight_light dark:bg-panel text-text_light dark:text-text transition-colors duration-300">
                <Logo />
                <h2 className="text-2xl font-bold mb-4">Vui lòng đăng nhập để nạp tiền</h2>
                <Link to="/login"
                      className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition">
                    Đăng nhập ngay
                </Link>
            </div>
        );
    }

    return (
        <div
            className="bg-panelLight_light dark:bg-panel min-h-screen py-8 px-4 md:px-16 lg:px-24 text-text_light dark:text-text font-sans transition-colors duration-300">
            <div className="container mx-auto">
                <h1 className="text-3xl font-extrabold mb-8 border-l-4 border-primary pl-4 transition-colors">
                    Nạp tiền vào tài khoản
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4 space-y-4">
                        <h3 className="text-xl font-bold mb-4">1. Chọn hình thức nạp</h3>
                        <MethodSelector
                            selectedMethod={selectedMethod}
                            onSelect={setSelectedMethod}
                        />
                    </div>

                    <div className="lg:col-span-8 space-y-8">
                        <AmountSelector
                            amount={amount}
                            setAmount={setAmount}
                        />

                        {isSupported ? (
                            <PaymentDetails
                                info={paymentInfo}
                                transferContent={transferContent}
                                onCopy={handleCopy}
                                copied={copied}
                            />
                        ) : (
                            <div className="bg-white dark:bg-bg p-8 rounded-xl border border-border_light dark:border-border text-center text-textMuted_light dark:text-textMuted transition-colors">
                                <p className="mb-2 text-4xl">🚧</p>
                                <p>Phương thức <b>{PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name}</b> đang bảo trì.</p>
                                <p>Vui lòng chọn Chuyển khoản hoặc Momo.</p>
                            </div>
                        )}

                        <div className="text-center">
                            <button
                                onClick={handleConfirmPayment}
                                disabled={isProcessing}
                                className="bg-primary text-white text-lg font-bold py-4 px-12 rounded-xl shadow-lg transition transform active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2 mx-auto"
                            >
                                {isProcessing ? <><FaSpinner className="animate-spin" /> Đang xử lý...</> : "Tôi đã chuyển tiền"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;