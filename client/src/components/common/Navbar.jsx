import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";
import Button from "./Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Nurses", path: "/nurses" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md border-b-2 border-[#E11D2E] z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#E11D2E] font-semibold border-b-2 border-[#E11D2E] pb-1"
                  : "text-[#1E3A8A] hover:text-[#E11D2E] font-medium transition duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink to="/booking">
            <Button>Book Now</Button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#1E3A8A]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 transition duration-300 ${
                  isActive
                    ? "bg-[#E11D2E] text-white font-semibold"
                    : "text-[#1E3A8A] hover:bg-gray-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="p-4">
            <NavLink to="/booking" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Book Now</Button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}