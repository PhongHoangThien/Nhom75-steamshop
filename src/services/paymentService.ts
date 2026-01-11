import { BANK_INFO, MOMO_INFO } from '../data/bankInfo';

export const getPaymentInfo = (method: string, amount: number, content: string) => {
    const isMomo = method === 'momo';

    if (isMomo) {
        return {
            accName: MOMO_INFO.accountName,
            accNum: MOMO_INFO.phoneNumber,
            bankName: MOMO_INFO.appName,
            qrUrl: MOMO_INFO.getQrUrl(amount, content),
            labelNum: "Số điện thoại",
            type: 'momo'
        };
    }

    return {
        accName: BANK_INFO.accountHolder,
        accNum: BANK_INFO.accountNumber,
        bankName: BANK_INFO.bankName,
        qrUrl: `https://img.vietqr.io/image/${BANK_INFO.bankId}-${BANK_INFO.accountNumber}-compact2.png?amount=${amount}&addInfo=${content}&accountName=${encodeURIComponent(BANK_INFO.accountHolder)}`,
        labelNum: "Số tài khoản",
        type: 'bank'
    };
};