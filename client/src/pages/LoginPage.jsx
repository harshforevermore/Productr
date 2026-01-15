import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Login Page Component
const LoginPage = () => {
  const { sendOTP, verifyOTP } = useAuth();
  const navigate = useNavigate();
  const [formState, setFormState] = useState("login");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email.trim()) {
      setError("Please enter a valid email or phone number");
      return;
    }
    setError("");
    try {
      await sendOTP(email);
    } catch (error) {
      console.log("error occured in handle login: ", error);
      return;
    }
    setFormState("otp");
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleOTPVerification = async () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("Please enter a valid OTP");
      return;
    }
    try {
      await verifyOTP(email, otpValue);
      navigate("/");
    } catch (error) {
      console.log("error occured in handleOTPVerification: ", error);
      return;
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen px-8 bg-[#F7F8FA]">
      <div className="left-image flex-1">
        <div className="relative flex justify-center">
          {" "}
          {/*  */}
          <div className="z-40 absolute linear-background w-3/4 h-full opacity-40 rounded-2xl bg-linear-to-b from-[#010860] from-0% via-[#002283] via-19% via-[#734AA3] via-38% via-[#E7959C] via-57% via-[#E4A182] via-77% to-[#BF3613] to-100%"></div>
          <img
            src="/images/main_bg.png"
            alt="background image"
            className="z-30 background-img w-3/4 h-3/4 border border-[#D4D4D4] rounded-2xl"
          />
          <img
            src="/images/main_top.png"
            alt="running person image"
            className="top-img z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-xs h-xs"
          />
          <img
            src="/images/logo_dark.png"
            alt="logo"
            className="logo-img z-60 absolute top-3 left-27 w-45 h-10"
          />
        </div>
      </div>
      <div className="right-form flex-1 flex justify-center">
        {formState === "login" ? (
          <div>
            <h1 className="text-2xl font-bold text-[#111652] mb-12">
              Login to your Productr Account
            </h1>

            <div className="w-full max-w-md">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email or Phone number
              </label>
              <input
                type="text"
                placeholder="Enter email or phone number"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className={`w-full px-3 py-2 rounded-lg border ${
                  error ? "border-red-500" : "border-[#D4D4D4]"
                } outline-none bg-white text-gray-700 placeholder-gray-400`}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <button
                onClick={handleLogin}
                className="cursor-pointer w-full mt-6 bg-[#071074] text-white py-3 rounded-lg font-medium hover:bg-indigo-800 transition-colors"
              >
                Login
              </button>

              <div className="mt-32 text-center bg-white border border-gray-300 rounded-lg py-4">
                <p className="text-gray-500 text-sm">
                  Don't have a Productr Account
                </p>
                <button className="text-[#071074] font-semibold text-sm mt-1">
                  SignUp Here
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-[#111652] mb-12">
              Login to your Productr Account
            </h1>

            <div className="w-full max-w-md">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Enter OTP
              </label>

              <div className="flex gap-3 justify-center mb-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-12 h-12 text-center text-xl font-semibold rounded-lg border ${
                      error ? "border-red-500" : "border-[#bdbdbd]"
                    } focus:outline-none focus:ring-2 focus:ring-[#07107462] text-gray-700`}
                  />
                ))}
              </div>

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <button
                onClick={handleOTPVerification}
                className="w-full mt-6 bg-[#071074] text-white py-3 rounded-lg font-medium hover:bg-indigo-800 transition-colors"
              >
                Enter your OTP
              </button>

              <div className="text-center mt-4">
                <span className="text-gray-500 text-sm">
                  Didnt recive OTP ?{" "}
                </span>
                <button className="cursor-pointer text-[#071074] font-semibold text-sm">
                  Resend
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
