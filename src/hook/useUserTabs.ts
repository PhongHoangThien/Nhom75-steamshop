import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useUserTabs = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
            return;
        }

        const path = location.pathname;
        if (path === '/wishlist') {
            setActiveTab('wishlist');
        } else if (path === '/order-history') {
            setActiveTab('orders');
        } else if (path === '/change-password') {
            setActiveTab('password');
        } else {
            setActiveTab('profile');
        }
    }, [isAuthenticated, navigate, location.pathname]);

    return { activeTab };
};