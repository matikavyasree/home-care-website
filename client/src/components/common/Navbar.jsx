import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";
import Button from "./Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xl border-b border-gray-200"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E11D2E] after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#E11D2E] after:w-full"
                    : "text-[#1E3A8A] hover:text-[#E11D2E] after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink to="/booking">
            <Button>Book Now</Button>
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#1E3A8A] transition-transform duration-300 hover:scale-110"
        >
          {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 transition-all duration-300 ${
                  isActive
                    ? "bg-[#E11D2E] text-white font-semibold"
                    : "text-[#1E3A8A] hover:bg-gray-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="p-5">
            <NavLink to="/booking" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Book Now</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}