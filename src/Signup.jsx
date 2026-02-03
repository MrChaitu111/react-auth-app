import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Eye icons

// Function to validate password strength
const isValidPassword = (password) => {
  // Minimum 8 chars, at least 1 uppercase, 1 lowercase, 1 number
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};

 
export default function Signup() {
  const navigate = useNavigate();// React Router navigation
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for show/hide password toggle
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to handle Signup button click
  const handleSignup = () => {
    const { name, email, password, confirmPassword } = form;

    // Validate empty fields
    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

 // Validate matching passwords
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Validate password strength
    if (!isValidPassword(password)) {
      toast.error(
        "Password must be 8 chars, uppercase, lowercase & number"
      );
      return;
    }

// Save user to localStorage (mock authentication)
    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, password })
    );
// Navigate to login page after 1.5 seconds
    toast.success("Signup successful 🎉");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <>
      <Navbar />{/* Navigation bar component */}
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-95 border border-neutral-800 rounded-2xl p-8">
          <h1 className="text-2xl font-light text-center mb-8 text-white">
            Create account
          </h1>

          {/* Name */}
          <input
            className="w-full mb-4 bg-transparent border border-neutral-700 px-4 py-3 rounded-lg text-sm outline-none text-white focus:border-white transition"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          {/* Email */}
          <input
            className="w-full mb-4 bg-transparent border border-neutral-700 px-4 py-3 rounded-lg text-sm outline-none text-white focus:border-white transition"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          {/* Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full bg-transparent border border-neutral-700 px-4 py-3 rounded-lg text-sm outline-none text-white focus:border-white transition pr-10"
              placeholder="Password"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-6">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full bg-transparent border border-neutral-700 px-4 py-3 rounded-lg text-sm outline-none text-white focus:border-white transition pr-10"
              placeholder="Confirm password"
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            className="w-full py-3 border border-white rounded-full hover:bg-white hover:text-black transition text-white cursor-pointer"
          >
            Sign up
          </button>
          {/* Link to Login page */}
          <p className="text-xs text-neutral-400 text-center mt-6">
            Already have an account?
            <Link to="/login" className="underline text-white ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

