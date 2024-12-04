import React, { useState, useEffect } from "react";
import "./ShoppingCart.css"
import PayPalButtonsDisplay from "./PayPalButtonsDisplay";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotal] = useState("");
  
    useEffect(() => {
      let cartItems = JSON.parse(localStorage.getItem('items')) || [];
      setCartItems(cartItems);
      console.log(cartItems);
    }, []);

    useEffect(() => {
      let total = 0;
      cartItems.map((cartItem, index) => {
        total += cartItem.price;
      })
      setTotal(total.toFixed(2));
    })


      return (
        <div>
          <h1>Shopping Cart</h1>
          <div className="cartitems">
            {cartItems.map((cartitem, index) => (
              <div key={index} className="cartitem">
                <img src={cartitem.imageUrl} alt={cartitem.title} />
                <h2>{cartitem.title}</h2>
              </div>
            ))}
          </div>
          <div className="totalPrice">
            <p>Price: ${totalPrice}</p>
          </div>
          <div className="paypalbtns">
            <PayPalButtonsDisplay />
          </div>
        </div>
      );
};

export default ShoppingCart;