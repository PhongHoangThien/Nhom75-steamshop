import React from 'react';
import { useSelector } from 'react-redux';
import { FaMoneyBillWave, FaInbox } from "react-icons/fa";
import { RootState } from "../../redux/store";

const TransactionHistoryTab = () => {
    const { history } = useSelector((state: RootState) => state.transactions);

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleString('vi-VN', {
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    return (
        <div className="panel-theme p-6 rounded-lg border border-border animate-fade-in">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border flex items-center gap-2">
                <FaMoneyBillWave className="text-primary"/> Lịch sử nạp tiền
            </h2>

            {history.length === 0 ? (
                <div className="text-center py-10 text-textMuted_light dark:text-textMuted flex flex-col items-center">
                    <FaInbox className="text-4xl mb-3 opacity-50"/>
                    <p>Chưa có giao dịch nạp tiền nào.</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                        <tr className="text-text_light dark:text-textMuted text-sm border-b border-border">
                            <th className="py-3 px-2">Mã giao dịch</th>
                            <th className="py-3 px-2">Phương thức</th>
                            <th className="py-3 px-2">Thời gian</th>
                            <th className="py-3 px-2">Số tiền</th>
                            <th className="py-3 px-2">Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody className="text-sm">
                        {history.map((trx) => (
                            <tr key={trx.id} className="border-b border-border dark:hover:bg-panelLight transition hover:bg-option_hover">
                                <td className="py-4 px-2 hover:text-text text-primary font-medium">{trx.id}</td>
                                <td className="py-4 px-2">
                                    <span className="font-bold">{trx.method}</span>
                                </td>
                                <td className="py-4 px-2">{formatDate(trx.date)}</td>
                                <td className="py-4 px-2 font-bold text-green-500 flex items-center gap-1">
                                    +{trx.amount.toLocaleString()}đ
                                </td>
                                <td className="py-4 px-2">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                                        trx.status === 'success' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
                                            trx.status === 'failed' ? 'bg-red-500/20 text-red-500' :
                                                'bg-yellow-500/20 text-yellow-500'
                                    }`}>
                                        {trx.status === 'success' ? 'Thành công' : 'Thất bại'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TransactionHistoryTab;