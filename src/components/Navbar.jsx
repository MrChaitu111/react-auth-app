import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="w-full border-b border-neutral-800 px-8 py-4 flex justify-between items-center bg-black">
      <Link to="/" className="text-lg font-light text-white">
        MyApp
      </Link>

      <div className="flex gap-6 items-center text-sm">
        {/* ✅ Logout only on Home & when logged in */}
        {isLoggedIn && location.pathname === "/home" ? (
          <>
            <span className="text-neutral-400">
              Welcome, {user?.name}
            </span>

            <button
              onClick={handleLogout}
              className="border border-white px-4 py-1 rounded-lg
              hover:bg-white hover:text-black transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* ✅ Login page lo only links */}
            <Link to="/login" className="w-full  border border-white rounded-md px-4 py-1
        hover:bg-white hover:text-black transition text-white">
              Login
            </Link>
            <Link to="/signup"  className="w-full  border border-white rounded-md px-4 py-1
        hover:bg-white hover:text-black transition text-white">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
