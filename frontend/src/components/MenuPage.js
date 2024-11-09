import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MenuPage.css";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/menu") //test endpoint
      .then((response) => {
        setMenuItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error", error);
        setError("Fetch error");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {loading && <p>Loading menu items...</p>}
      {error && <p className="error">{error}</p>}
      <div className="menuitems">
        {menuItems.map((menuitem) => (
          <div key={menuitem.id} className="menuitem">
            <img src={menuitem.imageUrl} alt={menuitem.title} />
            <h2>{menuitem.title}</h2>
            <p>Price: ${menuitem.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
