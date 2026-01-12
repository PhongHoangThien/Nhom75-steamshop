import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // dark mode
                // bg: colors.slate[900],
                // panel: colors.slate[800],
                // panelLight: colors.slate[700],
                // border: colors.slate[400],
                //
                // primary: colors.blue[500],
                // primaryHover: colors.slate[500],
                //
                // text: colors.slate[100],
                // textMuted: colors.slate[300],
                //
                // success: colors.green[400],
                // danger: colors.red[400],
                // price: colors.lime[300],
                //
                // // light mode
                // bg_light: colors.blue[500],
                // panel_light: colors.gray[200],
                // panelLight_light: colors.slate[50],
                // border_light: colors.slate[600],
                //
                // primary_light: colors.blue[600],
                // primaryHover_light: colors.blue[700],
                //
                // text_light: colors.slate[900],
                // textMuted_light: colors.slate[600],
                //
                // success_light: colors.emerald[600],
                // danger_light: colors.red[500],
                //
                // price_light: colors.lime[600],


                // --- DARK MODE (Chế độ tối) ---
                bg: colors.slate[900],           // Xám đen đậm (Nền chính trang web, tạo cảm giác sâu)
                panel: colors.slate[800],        // Xám đậm (Nền của các khối/thẻ sản phẩm, thanh menu)
                panelLight: colors.slate[700],   // Xám ghi (Màu nền của ô input hoặc màu khi di chuột vào menu)
                border: colors.slate[400],       // Xám sáng (Màu đường viền, đủ sáng để thấy rõ trên nền tối)

                option_hover: colors.blue[200],

                primary: colors.blue[500],       // Xanh dương sáng (Màu chủ đạo, dùng cho nút bấm, link quan trọng)
                primary_low: colors.blue[100],
                primary_high: colors.blue[200],
                primaryHover: colors.slate[500], // Xám trung tính (Màu nút khi di chuột vào - *Lưu ý: màu này sẽ biến nút xanh thành xám khi hover*)


                text: colors.slate[100],         // Trắng xám (Màu chữ chính, sáng rõ trên nền đen)
                textMuted: colors.slate[300],    // Xám nhạt (Màu chữ phụ, mô tả, thông tin ít quan trọng hơn)

                success: colors.green[400],      // Xanh lá tươi (Màu thông báo thành công, trạng thái "Còn hàng")
                danger: colors.red[400],         // Đỏ nhạt (Màu báo lỗi, nút xóa, trạng thái "Hết hàng")
                price: colors.lime[300],         // Vàng chanh (Màu dành riêng cho Giá tiền, rất nổi bật kiểu Gaming)

                // --- LIGHT MODE (Chế độ sáng) ---
                bg_light: colors.blue[500],// Xanh dương đậm (Nền chính trang web - *Lưu ý: Bạn đang để nền Light mode là màu xanh đậm thay vì trắng*)
                panel_card_light: colors.gray[100],
                panel_light: colors.gray[200],   // Xám nhạt (Nền các khối/thẻ sản phẩm)
                panelLight_light: colors.slate[50], // Trắng đục (Nền các ô input, chi tiết nhỏ)
                border_light: colors.slate[600], // Xám đậm (Đường viền, tương phản cao)

                primary_light: colors.blue[600], // Xanh dương đậm vừa (Màu nút bấm ở chế độ sáng)
                primaryHover_light: colors.blue[700], // Xanh dương tối (Màu nút khi di chuột vào)

                text_light: colors.slate[900],   // Đen xám (Màu chữ chính, đậm nhất)
                textMuted_light: colors.slate[600], // Xám đậm vừa (Màu chữ phụ)

                success_light: colors.emerald[600], // Xanh ngọc lục bảo (Màu thành công, đậm hơn dark mode để dễ đọc trên nền sáng)
                danger_light: colors.red[500],   // Đỏ tươi (Màu báo lỗi)

                price_light: colors.lime[600],   // Xanh nõn chuối đậm (Màu giá tiền, đậm để nổi trên nền sáng)
            },
            spacing: {
                card: "1.25rem",     // 20px
                section: "3rem",     // 48px
                nav: "0.75rem",      // 12px
            },
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1rem" }],
                sm: ["0.875rem", { lineHeight: "1.25rem" }],
                base: ["1rem", { lineHeight: "1.5rem" }],
                lg: ["1.125rem", { lineHeight: "1.75rem" }],
                xl: ["1.25rem", { lineHeight: "1.75rem" }],

                title: ["1.5rem", { lineHeight: "2rem" }],
                hero: ["2.25rem", { lineHeight: "2.5rem" }],
            },
            fontWeight: {
                thin: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
            },
            borderRadius: {
                steam: "4px",
                card: "6px",
                button: "3px",
            },
            boxShadow: {
                steam: "0 0 10px rgba(0,0,0,0.5)",
                card: "0 4px 12px rgba(0,0,0,0.4)",
            },
        },
    },
    plugins: [],
}
