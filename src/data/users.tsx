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
    avatar: "/images/logo-dark.png",
    phone: "0932345678",
    balance: 1000000
  },
  {
    id: 3,
    username: "User1",
    email: "user@gmail.com",
    password: "user123",
    role: "user",
    avatar: "/images/logo.png",
    phone: "0932345678",
    balance: 900000
    },
    {
        id: 4,
        username: "User2",
        email: "user2@gmail.com",
        password: "user123",
        role: "user",
        avatar: "/images/logo.png",
        phone: "0932345678",
        balance: 9000000
    }
];