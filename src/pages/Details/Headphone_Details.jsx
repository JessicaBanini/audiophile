import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../data.json';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



import headphoneThumbnail from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphoneThumbnail from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakerThumbnail from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'

import desktopman from '../../assets/shared/desktop/image-best-gear.jpg'
import tabletman from '../../assets/shared/tablet/image-best-gear.jpg'
import mobileman from '../../assets/shared/mobile/image-best-gear.jpg'

function Headphone_Details() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };


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
  // Get the slug from the URL parameters
  const { slug } = useParams();

  // Find the product with the matching slug
  const product = productData.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { id, name, image, description, features, includes,  gallery, others } = product;


  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemIndex = existingCart.findIndex(item => item.id === product.id);

    if (itemIndex !== -1) {
      // Update existing item quantity
      const updatedCart = [...existingCart];
      updatedCart[itemIndex].quantity += quantity;
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } else {
      // Add new item
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image, 
        quantity: quantity
      };
      localStorage.setItem('cartItems', JSON.stringify([...existingCart, newItem]));
    }

    navigate('/cart');

  };



  return (


    <section className="cursor-default">
          <div className="bg-black absolute top-0 object-cover -z-8 w-full  md:h-[5%] lg:h-[15%] 2xl:h-[10%] text-white text-3xl lg:text-6xl md:text-5xl font-semibold"></div>

      {/* Product Details Section */}
      
      <div className="px-[24px] md:px-[39px] lg:px-[165px] mt-[4rem] md:mt-[8rem]">
        {/* Product Image Gallery */}
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Main Image */}
          <picture className="w-full lg:w-1/2">
            <source media="(min-width:1024px)" srcSet={image.desktop} />
            <source media="(min-width:768px)" srcSet={image.tablet} />
            <img src={image.mobile} alt={name} className="w-full object-cover rounded-lg" />
          </picture>

          
          <div className="lg:w-1/2 mt-[-1rem] lg:mt-10 2xl:mt-[10rem]">
            <h1 className="text-black text-3xl md:text-5xl uppercase font-bold mb-4">{name}</h1>
            <p className="text-[#979797] text-lg">{description}</p>
            <p className="text-black text-2xl font-bold mt-7">$ {product.price}</p>

            <div className='flex gap-8 mt-8'>
            <div className="flex items-center space-x-5 bg-gray-200 px-5">
              <button
                onClick={decrease}
                className=" text-gray-800 hover:bg-gray-300 transition"
              >
                –
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                onClick={increase}
                className=" bg-gray-200  text-gray-800 hover:bg-gray-300"
              >
                +
              </button>
            </div>
                
            <button onClick={addToCart} className="hover:bg-[#FBAF85] active:bg-[#D87D4A] bg-[#D87D4A] font-bold  text-gray-50 py-3 px-8 cursor-pointer">
                ADD TO CART
            </button>
            </div>

            
          </div>
          
        
        </div>

        {/* Product Description and Features */}
        <div className="flex flex-col lg:flex-row gap-20 mt-20 md:mt-[8rem]">
          {/* Features */}
          <div className="lg:w-1/2">
            <h2 className="text-black text-2xl font-bold mb-4">FEATURES</h2>
            <p className="text-[#979797] text-lg whitespace-pre-wrap ">{features}</p>
          </div>
        

        {/* Includes */}
        <div className="mt-[-1rem] md:mt-10">
          <h2 className="text-black text-2xl font-bold mb-4">IN THE BOX</h2>
          <ul className="grid grid-cols-1  gap-4">
            {includes.map(({ quantity, item }, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="text-[#D87D4A] font-bold">{quantity}x</span>
                <span className="text-[#979797]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>


        <div className="flex flex-col lg:flex-row gap-8 w-full mt-[4rem] md:mt-[8rem]">
          <div className="flex flex-col gap-8">
            <picture className="w-full  ">
                <source media="(min-width:1024px)" srcSet={gallery.first.desktop} />
                <source media="(min-width:768px)" srcSet={gallery.first.tablet} />
                <img src={gallery.first.mobile} alt={name} className="w-full object-cover rounded-lg" />
            </picture>
            <picture className="w-full ">
              <source media="(min-width:1024px)" srcSet={gallery.second.desktop} />
              <source media="(min-width:768px)" srcSet={gallery.second.tablet} />
              <img src={gallery.second.mobile} alt={name} className="w-full object-cover rounded-lg" />
            </picture>
            </div>
            <div>
            <picture className="w-full 2xl:w-8xl">
              <source media="(min-width:1024px)" srcSet={gallery.third.desktop} />
              <source media="(min-width:768px)" srcSet={gallery.third.tablet} />
              <img src={gallery.third.mobile} alt={name} className="w-full object-cover rounded-lg" />
            </picture>
            </div>
          </div>

        {/* You May Also Like */}
        <div className="mt-10 md:mt-[8rem]">
          <h2 className="text-black text-2xl font-bold mb-10 text-center">YOU MAY ALSO LIKE</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {others.map(({ slug, name, image }, index) => (
              <div key={index} className="flex flex-col items-center">
                <picture className="w-full">
                  <source media="(min-width:1024px)" srcSet={image.desktop} />
                  <source media="(min-width:768px)" srcSet={image.tablet} />
                  <img src={image.mobile} alt={name} className="w-full object-cover rounded-lg" />
                </picture>
                <h3 className="text-black text-xl font-bold mt-4">{name}</h3>
                <Link to={`/${slug}`}>
                  <button className="hover:bg-[#FBAF85] active:bg-[#D87D4A] bg-[#D87D4A] font-bold mt-4 text-gray-50 py-2 px-8 cursor-pointer">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            ))}
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
          <Link to={`/${item.itemName.toLowerCase()}`}classsname='cursor-pointer'  >
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



      </div> 
     


    </section>
  );
}

export default Headphone_Details;