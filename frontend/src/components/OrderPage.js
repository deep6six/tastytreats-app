import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/order")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging: Check the data structure
        setOrders(response.data); // Correctly set the state with the fetched data
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  }, []);
  if (!orders.length) return <div>Loading...</div>;

  return (
    <div className="orders">
   <h1>Order Details</h1>
         {orders.map((order) => (
     <div key={order.id}>
    
      <p>Customer Name: {order.firstName},{order.lastName}</p>
      <p>Price: ${order.price}</p>
    </div>
    ))}
    </div> 
    );
};

export default OrderPage;