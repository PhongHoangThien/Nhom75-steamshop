import React from 'react';

interface Props {
    amount: number;
    setAmount: (val: number) => void;
}

const AmountSelector: React.FC<Props> = ({ amount, setAmount }) => {
    const quickAmounts = [20000, 50000, 100000, 200000, 500000, 1000000, 2000000];

    return (
        <div className="bg-white dark:bg-bg p-6 rounded-xl border border-border_light dark:border-border shadow-lg transition-colors">
            <h3 className="text-xl font-bold mb-4">2. Chọn số tiền muốn nạp</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {quickAmounts.map((val) => (
                    <button
                        key={val}
                        onClick={() => setAmount(val)}
                        className={`py-2 rounded-lg font-medium border transition-all ${
                            amount === val
                                ? "bg-primary text-white border-primary"
                                : "bg-panelLight_light dark:bg-panel border-border_light dark:border-border hover:border-primary text-textMuted_light dark:text-textMuted hover:text-text_light dark:hover:text-text"
                        }`}
                    >
                        {val.toLocaleString()}đ
                    </button>
                ))}
            </div>
            <div className="relative">
                <label className="text-sm font-bold text-textMuted_light dark:text-textMuted mb-1 block">Hoặc nhập số tiền khác:</label>
                <div className="flex items-center">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full bg-panelLight_light dark:bg-panel border border-border_light dark:border-border rounded-l-lg px-4 py-3 text-xl font-bold focus:outline-none focus:border-primary text-primary"
                    />
                    <span className="bg-panel_light dark:bg-panelLight border border-border_light dark:border-border border-l-0 px-4 py-3 rounded-r-lg font-bold text-textMuted_light dark:text-textMuted transition-colors">VNĐ</span>
                </div>
            </div>
        </div>
    );
};

export default AmountSelector;