import React from 'react';
import productData from '../../data.json';
import { Link } from "react-router-dom";


import headphoneThumbnail from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphoneThumbnail from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakerThumbnail from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'

import desktopman from '../../assets/shared/desktop/image-best-gear.jpg'
import tabletman from '../../assets/shared/tablet/image-best-gear.jpg'
import mobileman from '../../assets/shared/mobile/image-best-gear.jpg'
// import xx59 from "./assets/product-xx59-headphones/tablet/image-product.jpg"
// import mark_I from "./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg"


function Speakers() {

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
  const productIds = [6,5]; 

  // Find all products with matching IDs
  const selectedProducts = productIds.map((id) => productData.find((item) => item.id === id));

  return (
    <section className="">
      {/* Background Header */}
      <div className="bg-black absolute top-0 object-cover -z-8 w-full h-[35%] md:h-[25%] lg:h-[45%] 2xl:h-[30%] text-white text-3xl lg:text-6xl md:text-5xl font-semibold">
        <p className="flex justify-center items-center lg:pt-[10rem] pt-[8.5rem] md:pt-[9.5rem]">SPEAKERS</p>
      </div>

      {/* Product List Section */}
      <div className=" px-[24px] md:px-[39px] lg:px-[165px] mt-[8rem] 2xl:mt-[15rem]">
        {selectedProducts.map((product, index) => {
          if (!product) {
            return null; // Skip if product is not found
          }

          const { id, name, description, new: isNew ,image} = product;

          // Determine if the layout should be reversed (middle product)
          const isReversed = index === 1; // Index 1 is the middle product

          return (
            <section  className='pt-15'>
            <div
              key={id}
              className={`flex flex-col mt-[2rem] md:mt-[5rem] ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20`}
            >
              {/* Product Image */}
              

            {/* <div className=' flex flex-col  lg:gap-20  2xl:gap-40 mt-[2rem] md:mt-[5rem]'> */}
          <picture className='w-full lg:w-1/2 '>
            <source
              media="(min-width:1024px)"
              srcSet={image.desktop}
            />
            <source
              media="(min-width:768px)"
              srcSet={image.tablet}
            />
            <img
              src={image.mobile}
              alt="Hero"
              className="w-full object-cover rounded-lg"
            />
          </picture>

          

          <div className=' md:w-full lg:w-1/2 rounded-lg flex flex-col items-center justify-center cursor-default'>
          {isNew && (
                  <p className=" text-[#D87D4A] uppercase font-bold text-sm mb-1 tracking-[8px] lg:tracking-[15px] text-center lg:text-left lg:self-start">New Product</p>
                )}
            <p className="text-black text-3xl md:text-5xl uppercase md:w-1/2 lg:w-full 2xl:text-6xl font-bold mt-4 mb-4 2xl:mb-5 text-center lg:text-left  ">
            {name}
            </p>
            <p className='w-full text-center lg:text-left md:text-lg text-[#979797]'>
            {description}
            </p>
            <button className='hover:bg-[#FBAF85] active:bg-[#D87D4A] bg-[#D87D4A] font-bold mt-8 text-gray-50 py-2.5 lg:py-4 px-8 cursor-pointer self-center lg:self-start'>SEE PRODUCT</button>

            </div>
        </div>

              
            {/* </div> */}
            </section>
            
          );
        })}
        {/* Category */}

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center my-[5rem] md:py-[2rem] lg:py-[6rem] cursor-default ">
        {shop.map((item, index) => (
          <div
            key={index}  
            className="w-full flex flex-col items-center justify-center text-center relative "
          >
            <img src={item.image} alt={item.itemName} className="absolute z-5 top-5.5 w-[15rem] md:w-[20rem] " />
            <div className='bg-[#f1f1f1] rounded-lg w-full h-[12rem] md:h-[11rem] lg:h-[15rem] mt-[8rem] flex flex-col justify-end text-center  pb-8'>
            <h2 className="text-lg font-bold uppercase">{item.itemName}</h2>
            <Link to={`/${item.itemName.toLowerCase()}`} classsname='cursor-pointer'>
            <button className="mt-2 text-[#979797] tracking-widest text-sm cursor-pointer">SHOP <span className='text-[#D87D4A]'>&rarr;</span></button>
            </Link>     
            </div>
          </div>
        ))}
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


          <div className=' md:w-full lg:w-1/2 rounded-lg flex flex-col items-center justify-center cursor-default'>
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



      </div>


      
    </section>
  );
}

export default Speakers;