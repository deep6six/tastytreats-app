import React, { useState, useEffect } from "react";
import "./ShoppingCart.css"
import PayPalButtonsDisplay from "./PayPalButtonsDisplay";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      let cartItems = JSON.parse(localStorage.getItem('items')) || [];
      setCartItems(cartItems);
      console.log(cartItems);
    }, []);


      return (
        <div>
          <h1>Shopping Cart</h1>
          <div className="cartitems">
            {cartItems.map((cartitem, index) => (
              <div key={index} className="cartitem">
                <img src={cartitem.imageUrl} alt={cartitem.title} />
                <h2>{cartitem.title}</h2>
                <p>Price: ${cartitem.price}</p>
              </div>
            ))}
          </div>
          <PayPalButtonsDisplay />
        </div>
      );
};

export default ShoppingCart;