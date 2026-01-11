import React from 'react';
import { PAYMENT_METHODS } from '../../data/paymentMethods';

interface Props {
    selectedMethod: string;
    onSelect: (id: string) => void;
}

const MethodSelector: React.FC<Props> = ({ selectedMethod, onSelect }) => {
    return (
        <div className="bg-white dark:bg-bg rounded-xl border border-border_light dark:border-border overflow-hidden shadow-sm transition-colors">
            {PAYMENT_METHODS.map((method) => (
                <div
                    key={method.id}
                    onClick={() => onSelect(method.id)}
                    className={`p-4 cursor-pointer flex items-center justify-between border-b border-border_light dark:border-border last:border-b-0 transition-all ${
                        selectedMethod === method.id
                            ? "bg-panelLight_light dark:bg-panelLight border-l-4 border-l-primary"
                            : "hover:bg-panelLight_light/50 dark:hover:bg-panelLight/30"
                    }`}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-panelLight_light dark:bg-panel rounded-full border border-border_light dark:border-border transition-colors">
                            {method.icon}
                        </div>
                        <div>
                            <p className="font-bold">{method.name}</p>
                            <p className="text-xs text-textMuted_light dark:text-textMuted">{method.desc}</p>
                        </div>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${method.fee === "Miễn phí"
                        ? "text-green-500 bg-green-500/10"
                        : "text-red-500 bg-red-500/10"}`}>
                        {method.fee}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default MethodSelector;