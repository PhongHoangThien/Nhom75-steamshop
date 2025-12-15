import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: colors.slate[900],
                panel: colors.slate[800],
                panelLight: colors.slate[700],
                border: colors.slate[600],

                primary: colors.blue[500],
                primaryHover: colors.slate[500],

                text: colors.slate[100],
                textMuted: colors.slate[300],

                success: colors.green[400],
                danger: colors.red[400],

                price: colors.lime[300],
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
