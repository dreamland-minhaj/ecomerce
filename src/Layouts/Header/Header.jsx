import { NavLink } from "react-router-dom"
import { FaCartPlus } from "react-icons/fa";



const Header = () => {
  return (
    <>
  {/* Responsive E-Commerce Header */}
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-bold text-gray-800">
            E-commerce
          </NavLink>
        </div>
        {/* Navigation Links (hidden on small screens) */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-gray-600 hover:text-gray-800">
            Shop
          </NavLink>
          <NavLink to="/dashboard/overview" className="text-gray-600 hover:text-gray-800">
            Dashboard
          </NavLink>
        </nav>
        {/* Search Bar & Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center border rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
              Search
            </button>
          </div>
          <NavLink to="/cart" className="text-gray-600 hover:text-gray-800 text-2xl">
            <FaCartPlus/>
          </NavLink>
        </div>
        {/* Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button
           id="menu-btn"
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu (hidden by default) */}
        <div id="mobile-menu" className="hidden md:hidden">
            <nav className="flex flex-col space-y-2 mt-4">
                <NavLink to="/" className="text-gray-600 hover:text-gray-800">
                    Home
                </NavLink>
                <NavLink to="/shop" className="text-gray-600 hover:text-gray-800">
                    Shop
                </NavLink>
            </nav>
      </div>
    </div>
  </header>
</>
  )
}

export default Header