import { User } from "../redux/authSlice";

export const UsersData: User[] = [
  {
    id: 1,
    username: "SinhVien",
    email: "student@hcmuaf.edu.vn",
    password: "123456",
    role: "user",
    avatar: "/images/logo.png",
    phone: "0912345678",
    balance: 500000
  },
  {
    id: 2,
    username: "AdminUser",
    email: "admin@gmail.com",
    password: "admin",
    role: "admin",
    avatar: "/images/logo.png",
    phone: "0932345678",
    balance: 999999999
  }
];