import React from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import { Link } from "react-router-dom";

import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <footer className=' flex flex-col  lg:block  px-[24px] md:px-[39px] lg:px-[165px] mt-[5rem] bg-black pb-8 '>
        <div>
        <div className='border-4 border-[#d87d4a] ml-[35%] md:ml-0 w-[6rem]  mb-15 lg:mb-20'></div>
        <div className='flex flex-col lg:flex-row justify-between '>
        <img className='px-20 md:pr-[35rem] lg:pr-0 md:px-0 mb-12 md:mb-12 lg:mb-0'src={logo} />
        <div>
            <ul className=" flex flex-col md:flex-row gap-6 text-[#FFFFFF] font-bold text-center">
                <li><Link to="/" className="hover:text-[#FBAF85] active:text-[#D87D4A]">HOME</Link></li>
                <li><Link to="/headphones" className="hover:text-[#FBAF85] active:text-[#D87D4A]">HEADPHONES</Link></li>
                <li><Link to="/speakers" className="hover:text-[#FBAF85] active:text-[#D87D4A]">SPEAKERS</Link></li>
                <li><Link to="/earphones" className="hover:text-[#FBAF85] active:text-[#D87D4A]">EARPHONES</Link></li>
            </ul>
        </div>
        </div>
        </div>

        <p className='text-[#979797] lg:w-1/2 mt-12 lg:mt-10 cursor-default text-center md:text-left'>Audiophile is an all in one stop to fulfill your audio needs. 
            We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
            Come and visit our demo facility - we’re open 7 days a week
        </p>

        <div className='flex flex-col md:flex-row justify-between  items-center lg:items-start cursor-default'>
            <p className='text-[#979797] mt-12 '>
            Copyright 2021. All Rights Reserved
            </p>

            <div className='flex mt-8 gap-5 cursor-pointer '>
                <FaFacebookSquare className="hover:text-[#FBAF85] active:text-[#D87D4A] text-2xl text-gray-50 " />
                <FaInstagram className="hover:text-[#FBAF85] active:text-[#D87D4A] text-2xl text-gray-50 " />
                <FaTwitter className="hover:text-[#FBAF85] active:text-[#D87D4A] text-2xl text-gray-50 " />
            </div>


        </div>
        
        

    </footer>
  )
}

export default Footer