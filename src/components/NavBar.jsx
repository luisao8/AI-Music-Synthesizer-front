import React from "react";
import 'tailwindcss/tailwind.css';
import logo from "../multimedia/Dalleee1.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";


function NavBar() {
 
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);


  return (
    <header className="pb-6 lg:pb-0" style={{ backgroundColor: '#031065' }}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 ml-12">
            {/* <a href="#" title="" className="flex">
              <img src={logo} alt="logo" style={{ height: '30x', width: "120px", borderRadius: "8px" }}/>
            </a> */}
            <h1 className="text-2xl font-bold text-center text-white">AI Music Synthesizer</h1>
          </div>

          <div className="relative">
            <a
              href="#"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
            </a>
          </div>

            {isAuthenticated ? (
      <div className="relative">
        <button onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)} className="items-center justify-center hidden px-4 py-3 ml-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button">
          {user.name}
        </button>
        {isUserDropdownOpen && (
          <div className="absolute z-10 mt-2 py-2 bg-white border border-gray-200 rounded-md shadow-md">
            <p className="block px-4 py-2 text-base font-medium text-black">
              {user.email}
            </p>
            <button onClick={logout} className="block w-full px-4 py-2 text-base font-medium text-black transition-all duration-200 hover:bg-red-700 focus:bg-red-700">
              Log Out
            </button>
          </div>
        )}
      </div>
            ) : (
              <a href="#" title="" onClick={() => loginWithRedirect()} className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Log in / Register </a>
            )}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
