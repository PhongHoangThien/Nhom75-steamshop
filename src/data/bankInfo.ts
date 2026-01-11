// src/data/bankInfo.ts

// ... giữ nguyên phần BANK_INFO cũ
export const BANK_INFO = {
    bankName: "Ngân hàng Quân Đội (MB Bank)",
    bankId: "MB",
    accountNumber: "1023456789",
    accountHolder: "STEAM SHOP",
    content: "Nap Tien",
    qrCodeUrl: "https://img.vietqr.io/image/MB-1023456789-compact2.png?amount=&addInfo=Nap%20Tien&accountName=STEAM%20SHOP"
};
export const MOMO_INFO = {
    appName: "Ví điện tử MoMo",
    phoneNumber: "0987654321", // Số điện thoại nhận tiền
    accountName: "STEAM SHOP",
    content: "Nap Tien",
    getQrUrl: (amount: number, content: string) => {
        const momoData = `momo://?action=transfer&to=0987654321&amount=${amount}&note=${content}`;
        return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(momoData)}`;
    }
};