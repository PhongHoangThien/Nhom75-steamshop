import { User } from "../redux/authSlice";

export const UsersData: User[] = [
  {
    id: 1,
    username: "SinhVien",
    email: "student@hcmuaf.edu.vn",
    password: "123456",
    role: "user",
    avatar: "/images/logo.png"
  },
  {
    id: 2,
    username: "AdminUser",
    email: "admin@gmail.com",
    password: "admin",
    role: "admin",
    avatar: "/images/logo.png"
  }
];