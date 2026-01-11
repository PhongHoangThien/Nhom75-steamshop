import React from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialButtons = () => {
    return (
        <>
            <div className="my-6 flex items-center justify-center space-x-2">
                <span className="h-px w-full bg-border_light dark:bg-border"></span>
                <span className="text-textMuted_light dark:text-textMuted text-sm whitespace-nowrap">
                    Hoặc đăng nhập bằng
                </span>
                <span className="h-px w-full bg-border_light dark:bg-border"></span>
            </div>
            <div className="flex justify-center gap-4">
                <button className="p-2 rounded-full border-theme bg-panelLight_light dark:bg-panelLight hover:bg-bg_light dark:hover:bg-border transition text-red-500 flex items-center justify-center">
                    <FaGoogle size={24}/>
                </button>
                <button className="p-2 rounded-full border-theme bg-panelLight_light dark:bg-panelLight hover:bg-bg_light dark:hover:bg-border transition text-blue-500 flex items-center justify-center">
                    <FaFacebook size={24}/>
                </button>
            </div>
        </>
    );
};

export default SocialButtons;