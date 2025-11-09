import React, { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState([
    { id: "1", name: "Chicken Wings", course: "Starters", price: 80 },
    { id: "2", name: "Beef Steak", course: "Mains", price: 150 },
    { id: "3", name: "Chocolate Cake", course: "Dessert", price: 60 },
  ]);

  const addItem = (item) => {
    setMenu((prev) => [...prev, { ...item, id: Date.now().toString() }]);
  };

  const removeItem = (id) => {
    setMenu((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menu, addItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
