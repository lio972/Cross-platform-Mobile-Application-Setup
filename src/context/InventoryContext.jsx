import React, { createContext, useState } from 'react';

    const InventoryContext = createContext();

    const initialInventory = [
      { id: 1, name: 'Diamond Ring', category: 'Rings', stock: 45, price: 1500 },
      { id: 2, name: 'Gold Chain', category: 'Necklaces', stock: 8, price: 800 },
      { id: 3, name: 'Pearl Necklace', category: 'Necklaces', stock: 0, price: 1200 },
      { id: 4, name: 'Silver Bracelet', category: 'Bracelets', stock: 32, price: 600 }
    ];

    export const InventoryProvider = ({ children }) => {
      const [inventory, setInventory] = useState(initialInventory);

      const addItem = (item) => {
        setInventory([...inventory, { ...item, id: inventory.length + 1 }]);
      };

      const updateItem = (id, updatedItem) => {
        setInventory(inventory.map(item => 
          item.id === id ? { ...item, ...updatedItem } : item
        ));
      };

      const deleteItem = (id) => {
        setInventory(inventory.filter(item => item.id !== id));
      };

      return (
        <InventoryContext.Provider value={{ inventory, addItem, updateItem, deleteItem }}>
          {children}
        </InventoryContext.Provider>
      );
    };

    export default InventoryContext;
