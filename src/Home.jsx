import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-700">
        <h1 className="text-lg">
          Website
          <span className="text-gray-400 ml-2">
            {user?.name}
          </span>
        </h1>

        <button
          onClick={handleLogout}
          className="px-4 py-1 border border-white rounded-full
          hover:bg-white hover:text-black transition"
        >
          Logout
        </button>
      </nav>

      {/* Content */}
      <div className="flex items-center justify-center h-[80vh]">
        <div className="text-center max-w-xl">

          <h2 className="text-2xl mb-4">
            Welcome to Home Page
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            This home page is created using React, React Router DOM, and Tailwind CSS. It features a modern, minimal, and professional design with a stylish black-and-white color scheme.
          </p>

        </div>
      </div>

    </div>
  );
}
