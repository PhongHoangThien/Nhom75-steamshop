import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { RootState } from "../redux/store";
import { updateBalance } from "../redux/authSlice";
import { PAYMENT_METHODS } from '../data/paymentMethods';
import { BANK_INFO } from '../data/bankInfo';

export const usePayment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

    const [amount, setAmount] = useState<number>(50000);
    const [selectedMethod, setSelectedMethod] = useState("bank");
    const [copied, setCopied] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const transferContent = `${BANK_INFO.content} ${user?.username || "GUEST"}`;

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleConfirmPayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            dispatch(updateBalance(amount));
            setIsProcessing(false);

            const methodName = PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name || "Thanh toán";
            alert(`Nạp thành công ${amount.toLocaleString()}đ qua ${methodName}!`);

            navigate("/user-profile");
        }, 2000);
    };

    return {
        user,
        isAuthenticated,
        amount,
        setAmount,
        selectedMethod,
        setSelectedMethod,
        copied,
        isProcessing,
        transferContent,
        handleCopy,
        handleConfirmPayment
    };
};