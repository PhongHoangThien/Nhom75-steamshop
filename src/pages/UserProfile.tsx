import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useUserTabs } from "../hook/useUserTabs";
import UserSidebar from "../components/UserSidebar";
import ProfileTab from "../components/user-tabs/ProfileTab";
import OrderHistoryTab from "../components/user-tabs/OrderHistoryTab";
import WishlistTab from "../components/user-tabs/WishlistTab";
import ChangePasswordTab from "../components/user-tabs/ChangePasswordTab";

const UserProfile = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const { activeTab } = useUserTabs();

    if (!user) return null;

    const renderContent = () => {
        switch (activeTab) {
            case 'orders':
                return <OrderHistoryTab />;
            case 'wishlist':
                return <WishlistTab />;
            case 'password':
                return <ChangePasswordTab />;
            case 'profile':
            default:
                return <ProfileTab user={user} />;
        }
    };

    return (
        <div className="panel-theme min-h-screen py-8 px-4 md:px-16 lg:px-24 text-text">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1 space-y-4">
                        <UserSidebar user={user} activeTab={activeTab} />
                    </div>
                    <div className="md:col-span-3">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;