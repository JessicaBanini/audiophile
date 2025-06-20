import React from 'react';
import productData from '../../data.json';

// import xx59 from "./assets/product-xx59-headphones/tablet/image-product.jpg"
// import mark_I from "./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg"


function Headphones() {
  // Hardcoded IDs for three products
  const productIds = [4, 3, 2]; // Example: XX59 Headphones, XX99 Mark I, XX99 Mark II

  // Find all products with matching IDs
  const selectedProducts = productIds.map((id) => productData.find((item) => item.id === id));

  return (
    <section className="">
      {/* Background Header */}
      <div className="bg-black absolute top-0 object-cover -z-8 w-full h-[35%] md:h-[25%] lg:h-[45%] 2xl:h-[30%] text-white text-3xl lg:text-6xl md:text-5xl font-semibold">
        <p className="flex justify-center items-center lg:pt-[10rem] pt-[8.5rem] md:pt-[9.5rem]">HEADPHONES</p>
      </div>

      {/* Product List Section */}
      <div className=" px-[24px] md:px-[39px] lg:px-[165px] mt-[15rem] 2xl:mt-[20rem]">
        {selectedProducts.map((product, index) => {
          if (!product) {
            return null; // Skip if product is not found
          }

          const { id, name, description, new: isNew } = product;

          // Determine if the layout should be reversed (middle product)
          const isReversed = index === 1; // Index 1 is the middle product

          return (
            <section  className='pt-20'>
            <div
              key={id}
              className={`flex flex-col mt-[2rem] md:mt-[5rem] ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20`}
            >
              {/* Product Image */}
              

            {/* <div className=' flex flex-col  lg:gap-20  2xl:gap-40 mt-[2rem] md:mt-[5rem]'> */}
          <picture className='w-full lg:w-1/2 '>
            <source
              media="(min-width:1024px)"
              srcSet={product.image.desktop}
            />
            <source
              media="(min-width:768px)"
              srcSet={product.image.tablet}
            />
            <img
              src={product.image.mobile}
              alt="Hero"
              className="w-full object-cover rounded-lg"
            />
          </picture>

          

          <div className=' md:w-full lg:w-1/2 rounded-lg flex flex-col items-center justify-center '>
          {isNew && (
                  <p className=" text-[#D87D4A] uppercase font-bold text-sm mb-1 tracking-[10px] text-center lg:text-left">New Product</p>
                )}
            <p className="text-black text-3xl md:text-5xl uppercase md:w-1/2 2xl:text-6xl font-bold mt-5 mb-4 2xl:mb-5 text-center lg:text-left">
            {name}
            </p>
            <p className='w-full text-center lg:text-left md:text-lg text-[#979797]'>
            {description}
            </p>
            </div>
        </div>

              
            {/* </div> */}
            </section>
            
          );
        })}
      </div>
      
    </section>
  );
}

export default Headphones;