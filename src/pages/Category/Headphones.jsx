import React from 'react'

function Headphones() {
  return (
    <section className=''>
    <div className=' bg-black absolute top-0 object-cover -z-8 w-screen h-[30%] text-white text-6xl font-semibold'>
       <p className=' flex justify-center items-center pt-[10rem]'>HEADPHONES</p> 
    </div>

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
  )
}

export default Headphones