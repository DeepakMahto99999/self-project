import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          className="w-36 cursor-pointer"
          src={assets.logo}
          alt="Logo"
        />

        {/* Nav Links */}
        <ul className="hidden md:flex items-start gap-6 font-medium">
          <li className="flex flex-col items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black pb-1 border-b-2 border-[#5f6FFF]"
                  : "text-black pb-1"
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="flex flex-col items-center">
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                isActive
                  ? "text-black pb-1 border-b-2 border-[#5f6FFF]"
                  : "text-black pb-1"
              }
            >
              COLLECTIONS
            </NavLink>
          </li>
          <li className="flex flex-col items-center">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black pb-1 border-b-2 border-[#5f6FFF]"
                  : "text-black pb-1"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li className="flex flex-col items-center">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-black pb-1 border-b-2 border-[#5f6FFF]"
                  : "text-black pb-1"
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          <img
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigate('/collections')}
            src={assets.search_icon}
            alt="Search"
          />
          <img
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigate('/login')}
            src={assets.profile_icon}
            alt="Profile"
          />
          <img
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigate('/cart')}
            src={assets.cart_icon}
            alt="Cart"
          />

          {/* Mobile Menu Toggle Icon */}
          <img
            className="w-6 md:hidden"
            onClick={() => setShowMenu(true)}
            src={assets.menu_icon}
            alt="Menu"
          />

          {/* Mobile Menu */}
          <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className="flex items-center justify-between px-5 py-6">
              <h3 className="text-gray-700">Back</h3>
              <img
                className="w-4"
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt="Close"
              />
            </div>

            <ul className="flex flex-col gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink 
                to="/" 
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  isActive 
                    ? 'bg-[#5f6FFF] text-white px-4 py-2 rounded inline-block'
                    : 'px-4 py-2 rounded inline-block text-black'
                }
              >
                Home
              </NavLink>

              <NavLink 
                to="/collections" 
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  isActive 
                    ? 'bg-[#5f6FFF] text-white px-4 py-2 rounded inline-block'
                    : 'px-4 py-2 rounded inline-block text-black'
                }
              >
                COLLECTIONS
              </NavLink>

              <NavLink 
                to="/about" 
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  isActive 
                    ? 'bg-[#5f6FFF] text-white px-4 py-2 rounded inline-block'
                    : 'px-4 py-2 rounded inline-block text-black'
                }
              >
                ABOUT
              </NavLink>

              <NavLink 
                to="/contact" 
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  isActive 
                    ? 'bg-[#5f6FFF] text-white px-4 py-2 rounded inline-block'
                    : 'px-4 py-2 rounded inline-block text-black'
                }
              >
                CONTACT
              </NavLink>
            </ul>
            <hr className="mt-4 border-t border-gray-300" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
