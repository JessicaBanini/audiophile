import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/audiophile_logo.png';
import { FaShoppingCart } from 'react-icons/fa';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav text-[#FFFFFF] sm:mx-[39px] lg:mx-[165px] pt-[32px] pb-[38px] border-b-1 border-[#979797] cursor-pointer bg-[#191919] ">
      <div className="flex justify-between items-center relative ">
        <Link to="/" className="ml-[32%] md:ml-[75px] lg:mx-0">
        <img className=' ' src={logo} alt="" />
        </Link>

        {/* Desktop Links */}
        <ul className=" hidden md:hidden lg:flex gap-6">
          <li><Link to="/" className="hover:text-[#FBAF85] active:text-[#D87D4A]">HOME</Link></li>
          <li><Link to="/services" className="hover:text-[#FBAF85] active:text-[#D87D4A]">HEADPHONES</Link></li>
          <li><Link to="/contact" className="hover:text-[#FBAF85] active:text-[#D87D4A]">SPEAKERS</Link></li>
          <li><Link to="/contact" className="hover:text-[#FBAF85] active:text-[#D87D4A]">EARPHONES</Link></li>
        </ul>

      <div >
        <FaShoppingCart className="hover:text-[#FBAF85] active:text-[#D87D4A] text-2xl text-gray-50 mr-6" />
     </div>


        {/* Mobile and Tablet Menu Button */}
        <button className="absolute left-5 lg:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
  <div className="absolute top-15 left-0 w-full bg-[#191919] z-50">
    <ul className="lg:hidden mt-4 ml-8 space-y-3 p-5">
      <li><Link to="/" onClick={closeMenu} className="hover:text-[#FBAF85] active:text-[#D87D4A]">HOME</Link></li>
      <li><Link to="/services" onClick={closeMenu} className="hover:text-[#FBAF85] active:text-[#D87D4A]">HEADPHONES</Link></li>
      <li><Link to="/contact" onClick={closeMenu} className="hover:text-[#FBAF85] active:text-[#D87D4A]">SPEAKERS</Link></li>
      <li><Link to="/contact" onClick={closeMenu} className="hover:text-[#FBAF85] active:text-[#D87D4A]">EARPHONES</Link></li>
    </ul>
  </div>
)}

    </nav>
  );
}

export default Navbar;
