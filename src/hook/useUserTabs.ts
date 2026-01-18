import { useLocation } from "react-router-dom";

export const useUserTabs = () => {
    const location = useLocation();
    const path = location.pathname;

    let activeTab = 'profile';

    if (path.includes('/order-history')) {
        activeTab = 'orders';
    } else if (path.includes('/wishlist')) {
        activeTab = 'wishlist';
    } else if (path.includes('/change-password')) {
        activeTab = 'password';
    } else if (path.includes('/transaction-history')) {
        activeTab = 'transactions';
    }

    return { activeTab };
};