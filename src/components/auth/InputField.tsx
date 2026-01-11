import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ icon, className, ...props }) => {
    const baseClass = "w-full bg-panelLight_light dark:bg-bg border border-theme rounded-md px-4 py-3 focus:outline-none focus:border-primary_light dark:focus:border-primary text-text_light dark:text-text placeholder-textMuted_light dark:placeholder-textMuted transition [&::-ms-reveal]:hidden";

    return (
        <div className="relative">
            <input
                className={`${baseClass} ${icon ? 'pl-10' : ''} ${className || ''}`}
                {...props}
            />
            {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted_light dark:text-textMuted">
                    {icon}
                </div>
            )}
        </div>
    );
};

export default InputField;