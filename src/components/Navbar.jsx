import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="bg-gray-900 text-white fixed w-full shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          You're Not Alone
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/admin" className="hover:text-blue-400 transition">
              Admin
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-gray-800 flex flex-col items-center space-y-4 py-6 text-lg">
          <li>
            <Link
              to="/"
              onClick={toggleNav}
              className="hover:text-blue-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleNav}
              className="hover:text-blue-400 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              onClick={toggleNav}
              className="hover:text-blue-400 transition"
            >
              Admin
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
