import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/audiophile_logo.png';
import { FaShoppingCart } from 'react-icons/fa';

import headphoneThumbnail from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphoneThumbnail from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakerThumbnail from '../assets/shared/desktop/image-category-thumbnail-speakers.png'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shop = [
    {
      itemName:'Headphones',
      image:headphoneThumbnail
    },
    {
      itemName:'Speakers',
      image:speakerThumbnail
    },
    {
      itemName:'Earphones',
      image:earphoneThumbnail
    },
    
  ]

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav text-[#FFFFFF] sm:mx-[39px] lg:mx-[165px] pt-[32px] pb-[38px] border-b-1 border-[#979797] cursor-pointer bg-transparent ">
      <div className="flex justify-between items-center relative ">
        <Link to="/" className="ml-[32%] md:ml-[75px] lg:mx-0">
        <img className=' ' src={logo} alt="" />
        </Link>

        {/* Desktop Links */}
        <ul className=" hidden md:hidden lg:flex gap-6">
          <li><Link to="/" className="hover:text-[#FBAF85] active:text-[#D87D4A]">HOME</Link></li>
          <li><Link to="/headphones" className="hover:text-[#FBAF85] active:text-[#D87D4A]">HEADPHONES</Link></li>
          <li><Link to="/speakers" className="hover:text-[#FBAF85] active:text-[#D87D4A]">SPEAKERS</Link></li>
          <li><Link to="/earphones" className="hover:text-[#FBAF85] active:text-[#D87D4A]">EARPHONES</Link></li>
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
        <div
          className="fixed inset-0 bg-[#0000009a]  z-40"
          onClick={closeMenu} // Close menu when clicking outside
        ></div>
      )}

      {menuOpen && (
        
  
        <div className="absolute top-22 left-0 w-full bg-[#ffffff] z-50 px-[39px]">
          <div className="">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-[1rem] mb-[3rem] md:pb-[2rem] md:pt-[2rem] lg:hidden ">
              {shop.map((item, index) => (
                <div
                  key={index}  
                  className="w-full flex flex-col items-center justify-center text-center relative "
                >
                  <img src={item.image} alt={item.itemName} className="absolute z-5 top-5.5 w-[12rem] md:w-[12rem] " />
                  <div className='bg-[#f1f1f1] rounded-lg w-full h-[11rem]   mt-[6rem]  flex flex-col justify-end text-center pb-8'>
                  <h2 className="text-lg font-bold uppercase text-black">{item.itemName}</h2>
                  <Link to={`/${item.itemName.toLowerCase()}`}  onClick={closeMenu}>
                  <button className="mt-2 text-[#979797] tracking-widest text-sm">SHOP <span className='text-[#D87D4A]'>&rarr;</span></button>
                  </Link>
                  </div>
                </div>
              ))}
              </div>
        </div>
      </div>
    )}

    </nav>
  );
}

export default Navbar;
