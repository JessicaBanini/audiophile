import React from 'react'
import mobileHero from '../assets/home/mobile/image-header.jpg'
import tabletHero from '../assets/home/tablet/image-header.jpg'
import desktopHero from '../assets/home/desktop/image-hero.jpg' 

import headphoneThumbnail from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphoneThumbnail from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakerThumbnail from '../assets/shared/desktop/image-category-thumbnail-speakers.png'

import circlePattern from '../assets/home/desktop/pattern-circles.svg'

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
          className="w-full object-cover"
        />
      </picture>
      <section  className=' px-[24px] md:px-[39px] lg:px-[165px]'>
        <div className='py-[29%] md:py-[22%] lg:py-[12%] flex justify-center lg:justify-start'>
        <div className='   flex flex-col text-center  items-center lg:items-start lg:text-left '>
          <p className='text-[#979797] text-xl mb-4'>NEW PRODUCT</p>
          <p className='text-gray-50  text-5xl md:text-6xl lg:w-[50%] md:w-[55%] mb-5'>XX99 MARK II HEADPHONES</p>
          <p className='text-[#979797] font-medium text-lg lg:[50%] md:w-[55%] mb-5'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className='bg-[#D87D4A] font-bold text-gray-50 py-2.5 lg:py-4 px-8'>SEE PRODUCT</button>
        </div>
        </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center my-[5rem] md:py-[3rem] lg:py-[7rem] ">
      {shop.map((item, index) => (
        <div
          key={index}  
          className="w-full flex flex-col items-center justify-center text-center relative "
        >
          <img src={item.image} alt={item.itemName} className="absolute z-5 top-5.5 w-[15rem] md:w-[20rem] " />
          <div className='bg-[#f1f1f1] rounded-lg w-full h-[12rem] md:h-[15rem] mt-[8rem] flex flex-col justify-end text-center  pb-8'>
          <h2 className="text-lg font-bold uppercase">{item.itemName}</h2>
          <button className="mt-2 text-[#d87d4a] tracking-widest text-sm">SHOP &rarr;</button>
          </div>
        </div>
      ))}
      </div>
      <div className='relative '>
      <div className='bg-[#D87D4A] rounded-lg  w-full lg:h-[30rem] 2xl:h-[40rem]  lg:items-start  absolute  -z-4'>
        <img src={circlePattern} className=' absolute -z-5 top-[-2rem] lg:left-[-15rem]' alt="" />
        <img src={speakerThumbnail} className=' z-10 pb[-8rem]  border-2 mt-[9rem] w-1/2 max-w-3xl ' alt="" />
        </div>

      </div>

      </section>
      
    </section>
  )
}

export default Home
