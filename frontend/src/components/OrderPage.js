import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderPage = ({ orderId }) => {
  const [order, setOrder] = useState(null);

useEffect(() => {
    axios
      .get("http://localhost:8080/order") //test
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  }, []);
  if (!order) return <div>Loading...</div>;

  return (
    <div className="orders">
         {order.map((order) => (
    <div>
      <h1>Order Details</h1>
      <p>Order ID:{order.id}</p>
      <p>Customer Name: {order.firstName},{order.lastName}</p>
      <p>Price: ${order.price}</p>
    </div>
    ))}
    </div> 
    );
};

export default OrderPage;