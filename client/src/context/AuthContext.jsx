import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axiosClient from "../api/axiosConfig";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /* 🔁 Restore user from localStorage */
  useEffect(() => {
    const storedUser = localStorage.getItem("productr-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /* 1️⃣ SEND OTP */
  const sendOTP = async (emailOrPhone) => {
    try {
      await axiosClient.post("/auth/send-otp", { emailOrPhone });
      toast.success("OTP sent successfully");
    } catch (error) {
      throw error.response?.data?.message || "Failed to send OTP";
    }
  };

  /* 2️⃣ VERIFY OTP (LOGIN) */
  const verifyOTP = async (emailOrPhone, otp) => {
    try {
      const { data } = await axiosClient.post("/auth/verify-otp", {
        emailOrPhone,
        otp,
      });

      setUser(data.user);
      localStorage.setItem("productr-user", JSON.stringify(data.user));

      toast.success("Login successful");
      return data.user;
    } catch (error) {
      throw error.response?.data?.message || "OTP verification failed";
    }
  };

  /* 3️⃣ LOGOUT */
  const logout = async () => {
    try {
      await axiosClient.post("/auth/logout");
    } catch (error) {
      console.error("Logout error", error);
    } finally {
      setUser(null);
      localStorage.removeItem("productr-user");
      toast.success("Logged out successfully");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        sendOTP,
        verifyOTP,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
