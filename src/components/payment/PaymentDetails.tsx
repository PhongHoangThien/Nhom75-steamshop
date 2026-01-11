import React from 'react';
import { FaCopy, FaCheckCircle } from "react-icons/fa";

interface PaymentInfo {
    accName: string;
    accNum: string;
    bankName: string;
    qrUrl: string;
    labelNum: string;
    type: string;
}

interface Props {
    info: PaymentInfo;
    transferContent: string;
    onCopy: (text: string) => void;
    copied: boolean;
}

const PaymentDetails: React.FC<Props> = ({ info, transferContent, onCopy, copied }) => {
    const isMomo = info.type === 'momo';

    return (
        <div className="bg-white dark:bg-bg p-6 rounded-xl border border-border_light dark:border-border shadow-lg animate-fade-in transition-colors">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                3. Thông tin thanh toán
                <span className="text-sm font-normal text-textMuted_light dark:text-textMuted">(Quét mã để nhập nhanh)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-inner border mx-auto md:mx-0 max-w-[250px]">
                    <img
                        src={info.qrUrl}
                        alt="QR Code"
                        className="w-full h-auto"
                        onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}images/logo.png` }}
                    />
                    <p className={`text-center font-bold mt-2 text-sm ${isMomo ? 'text-pink-600' : 'text-blue-800'}`}>
                        {info.bankName}
                    </p>
                </div>

                <div className="space-y-4 text-sm">
                    <div className="bg-panelLight_light dark:bg-panel p-4 rounded-lg border border-dashed border-border_light dark:border-border transition-colors">
                        <p className="text-textMuted_light dark:text-textMuted mb-1">Người nhận:</p>
                        <p className="text-lg font-bold text-primary uppercase">{info.accName}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <p className="text-textMuted_light dark:text-textMuted mb-1">{info.labelNum}:</p>
                            <div className="flex items-center justify-between bg-panelLight_light dark:bg-panel p-3 rounded border border-border_light dark:border-border transition-colors">
                                <span className="font-mono text-lg font-bold">{info.accNum}</span>
                                <button onClick={() => onCopy(info.accNum)} className="text-primary hover:text-white transition">
                                    <FaCopy />
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="text-textMuted_light dark:text-textMuted mb-1">Nội dung chuyển khoản <span className="text-danger">*</span>:</p>
                            <div className="flex items-center justify-between bg-yellow-500/10 border border-yellow-500/50 p-3 rounded">
                                <span className="font-mono text-lg font-bold text-yellow-600 dark:text-yellow-500">{transferContent}</span>
                                <button onClick={() => onCopy(transferContent)} className="text-yellow-600 dark:text-yellow-500 hover:text-yellow-800 dark:hover:text-yellow-300 transition">
                                    {copied ? <FaCheckCircle /> : <FaCopy />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;