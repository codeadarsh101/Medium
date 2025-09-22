import { useState } from "react";
import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";
import mediumlogo from "../assets/mediumlogo.jpg";


export const Appbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);


  
  
 

  function handleLogout() {
    localStorage.removeItem("token"); // clear jwt
    navigate("/signin"); // redirect to signin
  }

  

  return (
    <div className="border-b flex justify-between items-center px-10 py-4 relative">
      <Link to={"/blogs"} className="flex items-center cursor-pointer gap-2">
        <img
          src={mediumlogo}
          alt="Medium Logo"
          className="w-8 h-8 rounded-full object-cover shadow-sm"
        />
        <span className="text-xl font-semibold tracking-tight">Medium</span>
      </Link>

      <div className="flex items-center gap-4">
        <Link to={`/publish`}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none 
                       focus:ring-4 focus:ring-green-300 font-medium 
                       rounded-full text-sm px-5 py-2.5 text-center"
          >
            New
          </button>
        </Link>

        {/* Avatar with dropdown */}
        <div className="relative">
          <div onClick={() => setShowMenu(!showMenu)} className="cursor-pointer">
            <Avatar size={"big"} name={"Adarsh"} />
          </div>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
