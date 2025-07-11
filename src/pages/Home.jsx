import React from 'react'
import { Link } from "react-router-dom";

import mobileHero from '../assets/home/mobile/image-header.jpg'
import tabletHero from '../assets/home/tablet/image-header.jpg'
import desktopHero from '../assets/home/desktop/image-hero.jpg' 

import headphoneThumbnail from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphoneThumbnail from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakerThumbnail from '../assets/shared/desktop/image-category-thumbnail-speakers.png'

import circlePattern from '../assets/home/desktop/pattern-circles.svg'

import desktopspeaker from '../assets/home/desktop/image-speaker-zx7.jpg'
import tabletspeaker from '../assets/home/tablet/image-speaker-zx7.jpg'
import mobilespeaker from '../assets/home/mobile/image-speaker-zx7.jpg'

import desktopearphones from '../assets/home/desktop/image-earphones-yx1.jpg'
import tabletearphones from '../assets/home/tablet/image-earphones-yx1.jpg'
import mobileearphones from '../assets/home/mobile/image-earphones-yx1.jpg'

import desktopman from '../assets/shared/desktop/image-best-gear.jpg'
import tabletman from '../assets/shared/tablet/image-best-gear.jpg'
import mobileman from '../assets/shared/mobile/image-best-gear.jpg'

function Home() {
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
  return (

    // Hero
    <section className=''>
      <picture className='hero_image absolute top-0 object-cover h-[100%]'>
        <source
          media="(min-width:1024px)"
          srcSet={desktopHero}
        />
        <source
          media="(min-width:768px)"
          srcSet={tabletHero}
        />
        <img
          src={mobileHero}
          alt="Hero"
          className="w-full object-cover "
        />
      </picture>
      <section  className=' px-[24px] md:px-[39px] lg:px-[165px]'>
        <div className='py-[29%] md:py-[22%] lg:py-[12%] flex justify-center lg:justify-start'>
        <div className='   flex flex-col text-center  items-center lg:items-start lg:text-left '>
          <p className='text-[#979797] text-sm  mb-8 tracking-[10px]'>NEW PRODUCT</p>
          <p className='text-gray-50 font-bold text-5xl md:text-6xl lg:w-[50%] md:w-[55%] 2xl:text-8xl 2xl:mb-8 mb-5'>XX99 MARK II HEADPHONES</p>
          <p className='text-[#979797] font-medium text-lg lg:[50%] md:w-[55%] 2xl:text-xl 2xl:mb-8 mb-5'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className='hover:bg-[#FBAF85] active:bg-[#D87D4A] bg-[#D87D4A] font-bold text-gray-50 py-2.5 lg:py-4 px-8'>SEE PRODUCT</button>
        </div>
        </div>


        {/* Category */}

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center my-[5rem] md:py-[2rem] lg:py-[6rem] ">
        {shop.map((item, index) => (
          <div
            key={index}  
            className="w-full flex flex-col items-center justify-center text-center relative "
          >
            <img src={item.image} alt={item.itemName} className="absolute z-5 top-5.5 w-[15rem] md:w-[20rem] " />
            <div className='bg-[#f1f1f1] rounded-lg w-full h-[12rem] md:h-[11rem] lg:h-[15rem] mt-[8rem] flex flex-col justify-end text-center  pb-8'>
            <h2 className="text-lg font-bold uppercase">{item.itemName}</h2>
            <Link to={`/${item.itemName.toLowerCase()}`} className='cursor-pointer'>
            <button className="mt-2 text-[#979797] tracking-widest text-sm">SHOP <span className='text-[#D87D4A]'>&rarr;</span></button>
            </Link>     
            </div>
          </div>
        ))}
        </div>



     {/* ZX SPEAKER WITH ORANGE BG */}


      <div className='cursor-default'>
      <div className='bg-[#D87D4A] rounded-lg w-full lg:h-[32rem] 2xl:h-[39.5rem] flex justify-center items-center lg:items-start relative overflow-hidden mb-8 md:mb-20 '>
      <img src={circlePattern} className=' absolute top-0 left-0 z-0 lg:top-[-2rem] lg:left-[-10rem]' alt="" />
          
          {/* <div className="flex flex-col lg:flex-row items-center lg:items-start mt-[5rem] lg:mt-[7rem] text-white gap-8 px-6 text-center lg:text-left"> */}
          <div className='flex flex-col lg:flex-row items-center lg:items-start mt-[5rem] lg:mt-[4rem] gap-8 px-6 text-gray-50 text-center lg:text-left '>
          <img src={speakerThumbnail} className=' lg:ml-[-5rem] 2xl:ml-[-15rem] z-10 w-4xl md:w-sm lg:w-4xl ' alt="" />

          <div className=' h-[0%] max-w-[22rem] lg:max-w-[24rem] lg:ml-[-5rem] z-10 ' >
            <p className='font-bold text-5xl 2xl:text-6xl lg:w-1/2 md:mt-[-5rem] mt-0 lg:mt-8 2xl:mt-15 mb-8 '>ZX9 SPEAKER</p>
            <p className=' md: text-lg lg:w-full  2xl:text-lg mb-8'>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <button className='hover:bg-[#979797] cursor-pointer bg-[#000000] font-bold text-gray-50 py-2.5 2xl:py-4 px-8 mb-[4rem]'>SEE PRODUCT</button>
          </div>
          </div>
          </div>

      </div>
      

      {/* ZX7 SPEAKER */}

      <div className='relative  rounded-xl '>
        <picture className=''>
          <source
            media="(min-width:1024px)"
            srcSet={desktopspeaker}
          />
          <source
            media="(min-width:768px)"
            srcSet={tabletspeaker}
          />
          <img
            src={mobilespeaker}
            alt="Hero"
            className="w-full object-cover rounded-lg"
          />
        </picture>

        <div className="absolute top-0 mt-[7rem] lg:mt-[5rem] 2xl:mt-[9rem] left-4 md:left-15  2xl:left-30 flex  flex-col items-center justify-center text-white ">
          <p className="text-black  text-3xl md:text-4xl 2xl:text-6xl font-bold px-4 py-2  mb-2 2xl:mb-5">
            ZX7 SPEAKER
          </p>
          <button className=' hover:bg-[#000000] hover:text-white active:bg-[#000000] active:text-white cursor-pointer bg-transparent font-bold text-black p-2.5 2xl:py-4 2xl:px-12  md:px-8 mb-[4rem] border-2 border-black'>SEE PRODUCT</button>
        </div>

        </div>
      {/* EARPHONES */}


        <div className=' flex flex-col md:flex-row  gap-5 mt-[2rem] md:mt-[5rem]'>
          <picture className=''>
            <source
              media="(min-width:1024px)"
              srcSet={desktopearphones}
            />
            <source
              media="(min-width:768px)"
              srcSet={tabletearphones}
            />
            <img
              src={mobileearphones}
              alt="Hero"
              className="w-full object-cover rounded-lg"
            />
          </picture>


          <div className='bg-[#F2F2F2]  md:w-full lg:w-1/2 2xl:w-full rounded-lg flex flex-col items-center justify-center '>
            <p className="text-black text-3xl  md:text-4xl 2xl:text-6xl font-bold px-4 mt-10 mb-4 2xl:mb-5">
              XY1 EARPHONES
            </p>
            <button className='hover:bg-[#000000] hover:text-white cursor-pointer bg-transparent font-bold text-black py-2.5 2xl:py-4 2xl:px-12 px-8 mb-[4rem] border-2 border-black'>SEE PRODUCT</button>
          </div>
        </div>
      

       {/* MAN */}

        <div className=' flex flex-col lg:flex-row-reverse lg:gap-20  2xl:gap-40 mt-[2rem] md:mt-[5rem]'>
          <picture className=''>
            <source
              media="(min-width:1024px)"
              srcSet={desktopman}
            />
            <source
              media="(min-width:768px)"
              srcSet={tabletman}
            />
            <img
              src={mobileman}
              alt="Hero"
              className="w-full object-cover rounded-lg"
            />
          </picture>


          <div className=' md:w-full lg:w-1/2 rounded-lg flex flex-col items-center justify-center '>
            <p className="text-black text-3xl lg:text-5xl uppercase  md:text-4xl 2xl:text-6xl font-bold mt-10 mb-4 2xl:mb-5 text-center lg:text-left">
              Bringing you the<span className='text-[#D87D4A]'> best </span>audio gear
            </p>
            <p className='w-full text-center lg:text-left'>
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and 
              audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and 
              experience a wide range of our products. Stop by our store to meet some of the fantastic people who make 
              Audiophile the best place to buy your portable audio equipment.
            </p>
            </div>
        </div>
      


      
      



      </section>
      
    </section>
  )
}

export default Home
