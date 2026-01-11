import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess } from "../redux/authSlice";
import { fakeLoginAPI } from "../services/authService";

export const useAuthForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error } = useSelector((state: RootState) => state.auth);

    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [registerData, setRegisterData] = useState({
        fullname: "", email: "", username: "", password: "", confirmPassword: "", phone: ""
    });

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const submitLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const user = await fakeLoginAPI(loginData.email, loginData.password);
            dispatch(loginSuccess(user));
            navigate("/");
        } catch (err) {
            dispatch(loginFailure(err as string));
        }
    };

    const submitRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) return alert("Mật khẩu không khớp!");
        dispatch(registerStart());
        setTimeout(() => {
            dispatch(registerSuccess());
            alert("Đăng ký thành công!");
            navigate("/login");
        }, 1000);
    };

    return {
        loginData,
        registerData,
        isLoading,
        error,
        handleLoginChange,
        handleRegisterChange,
        submitLogin,
        submitRegister
    };
};