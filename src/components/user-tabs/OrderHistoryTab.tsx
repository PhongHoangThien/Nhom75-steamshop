import React from 'react';

const OrderHistoryTab = () => {
    return (
        <div className="panel-theme p-6 rounded-lg border border-border animate-fade-in">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border">Lịch sử giao dịch</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="text-textMuted text-sm border-b border-border">
                        <th className="py-3 px-2">Mã đơn</th>
                        <th className="py-3 px-2">Sản phẩm</th>
                        <th className="py-3 px-2">Thời gian</th>
                        <th className="py-3 px-2">Tổng tiền</th>
                        <th className="py-3 px-2">Trạng thái</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm">
                    {/* Mock Data - Sau này có thể thay bằng props */}
                    <tr className="border-b border-border hover:bg-panelLight transition">
                        <td className="py-4 px-2 text-primary font-medium">#10234</td>
                        <td className="py-4 px-2">Elden Ring (Steam Key)</td>
                        <td className="py-4 px-2">06/01/2026</td>
                        <td className="py-4 px-2 font-bold">800.000đ</td>
                        <td className="py-4 px-2"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Hoàn thành</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderHistoryTab;