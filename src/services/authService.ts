import usersData from "../data/users.json";
import { User } from "../redux/authSlice";
export const fakeLoginAPI = (email: string, pass: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = usersData.find((u) => u.email === email && u.password === pass);
            if (user) {
                const { password, ...userInfo } = user;
                resolve(userInfo);
            } else {
                reject("Email hoặc mật khẩu không đúng!");
            }
        }, 1500);
    });
};