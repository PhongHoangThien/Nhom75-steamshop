import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const baseClass = "w-full bg-panelLight_light dark:bg-bg border border-theme rounded-md px-4 py-3 focus:outline-none focus:border-primary_light dark:focus:border-primary text-text_light dark:text-text placeholder-textMuted_light dark:placeholder-textMuted transition [&::-ms-reveal]:hidden";

    return (
        <div className="relative">
            <input
                {...props}
                type={showPassword ? "text" : "password"}
                className={baseClass}
                autoComplete="new-password"
            />
            <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-textMuted_light dark:text-textMuted hover:text-text_light dark:hover:text-text focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <FaEyeSlash size={20}/> : <FaEye size={20}/>}
            </button>
        </div>
    );
};

export default PasswordInput;