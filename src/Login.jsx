import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";

export default function Login() {
  const navigate = useNavigate();// For redirecting after login
  const [form, setForm] = useState({ email: "", password: "" });
// Handle login button click
  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));// Get saved user from localStorage

    if (!form.email || !form.password) {
      toast.error("All fields are required");
      return;
    }
    // Check credentials
    if (
      user?.email === form.email &&
      user?.password === form.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login successful");

      setTimeout(() => navigate("/home"), 1500);// Redirect to home after 1.5 seconds
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <>
     <Navbar />
     <div className="min-h-screen flex items-center justify-center bg-black">
        {/* login card */}
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-90 border border-gray-700 rounded-xl p-6">

        <h2 className="text-xl text-center mb-6">Login</h2>

        <input
          className="w-full mb-3 px-3 py-2 bg-black border border-gray-600 rounded-md"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

        <input
          type="password"
          className="w-full mb-4 px-3 py-2 bg-black border border-gray-600 rounded-md"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

        <button
          onClick={handleLogin}
          className="w-full py-2 border cursor-pointer border-white rounded-full hover:bg-white hover:text-black transition"
          >
          Login
        </button>
        {/* Link to Signup page */}
        <p className="text-xs text-center text-gray-400 mt-4">
          Don’t have an account?
          <Link to="/signup" className="text-white underline ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </div>
            </>
  );
}
