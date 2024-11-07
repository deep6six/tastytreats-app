import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MenuPage.css";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/menu") //test
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <div className="menuitems">
        {menuItems.map((item) => (
          <div key={item.id} className="menuitem">
            <img src={item.imageUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
