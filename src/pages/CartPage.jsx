import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
      calculateTotal(parsedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    calculateTotal(cartItems);
  }, [cartItems]);

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
          <Link to="/" className="text-[#D87D4A] hover:text-[#FBAF85] font-medium">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-200 py-4">
                <picture className="w-full lg:w-1/2">
                    <source media="(min-width:1024px)" srcSet={image.desktop} />
                    <source media="(min-width:768px)" srcSet={image.tablet} />
                    <img src={image.mobile} alt={name} className="w-full object-cover rounded-lg" />
                </picture>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm md:text-base">${item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button 
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    –
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button 
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="text-red-500 hover:text-red-700 text-sm md:text-base"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-600">Total:</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#D87D4A]">
                ${totalPrice.toFixed(2)}
              </h2>
            </div>
            <Link to="/checkout">
              <button className="w-full md:w-auto bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-6 py-3 rounded-lg font-medium transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;