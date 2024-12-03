import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './EditMenu.css';

function EditMenu() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Burger", cost: 5.99, imageUrl: "/images/burger.jpg" },
    { id: 2, name: "Pizza", cost: 7.99, imageUrl: "/images/pizza.jpg" },
    { id: 3, name: "Pasta", cost: 6.49, imageUrl: "/images/pasta.jpg" },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    cost: "",
    imageUrl: "",
  });

  const handleCostChange = (id, newCost) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, cost: parseFloat(newCost) } : item
      )
    );
  };

  const handleImageChange = (id, newImageUrl) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, imageUrl: newImageUrl } : item
      )
    );
  };

  const handleAddNewItem = () => {
    if (newItem.name && newItem.cost && newItem.imageUrl) {
      setMenuItems([
        ...menuItems,
        { id: menuItems.length + 1, ...newItem },
      ]);
      setNewItem({ name: "", cost: "", imageUrl: "" }); 
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="edit-menu">
        <div className="sidebar4">
        <div className="sidebar-buttons">
          <Link to="/new_employee" className="sidebar-button" >
            <button className="sidebar-button">New Employee Account</button>
          </Link>
          <Link to="/edit_menu">
            <button className="sidebar-button">Edit Menu</button>
          </Link>

          <Link to="/employee_management" >
            <button className="sidebar-button">Management</button>
          </Link>
          
          <Link to='/scheduling'>
            <button className="sidebar-button">Scheduling</button>
          </Link>
        </div>
        <button className="back-button" onClick={() => window.history.back()}>
          &#8592; Back
        </button>
      </div>
        <h1 className="theHead">Edit Menu</h1>
        <div className="menu-items">
            {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                    <div className="item-details">
                        <img src={item.imageUrl} alt={item.name} className="item-image" />
                        <h3 >{item.name}</h3>
                        <input
                        type="number"
                        value={item.cost}
                        onChange={(e) => handleCostChange(item.id, e.target.value)}
                        className="cost-input"
                        />
                        <input
                        type="text"
                        value={item.imageUrl}
                        onChange={(e) => handleImageChange(item.id, e.target.value)}
                        className="image-url-input"
                        placeholder="Change image URL"
                        />
                    </div>
                </div>
            ))}
        </div>

      <div className="add-item-form">
        <h2 className="newFood">Add New Food Item</h2>
        <input
          type="text"
          placeholder="Food Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Cost"
          value={newItem.cost}
          onChange={(e) => setNewItem({ ...newItem, cost: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newItem.imageUrl}
          onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
        />
        
      </div>
      <div><button className="addButton" onClick={handleAddNewItem}>Add Item</button></div>
    </div>
  );
}

export default EditMenu;