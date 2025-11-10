import React, { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState([
    { id: "1", name: "Chicken Wings", course: "Starters",description:"Crispy, deep-fried wings tossed in a tangy and spicy buffalo sauce, served with a side of cool ranch for dipping" , price: 80 },
    { id: "2", name: "Beef Steak", course: "Mains",description:"a prepared, thick-cut of beef, cooked to your preference and featuring a savory, seared crust with a juicy interior", price: 150 },
    { id: "3", name: "Chocolate Cake", course: "Dessert",description:"a rich, moist texture and intense chocolate flavor, while highlighting any unique elements like special frosting or premium ingredients", price: 60 },
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
