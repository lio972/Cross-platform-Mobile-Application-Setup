import React, { useContext } from 'react';
    import InventoryContext from '../context/InventoryContext';
    import { Edit, Trash } from 'lucide-react';

    const InventoryItem = ({ item }) => {
      const { deleteItem } = useContext(InventoryContext);

      return (
        <div className="inventory-item">
          <div className="item-info">
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Stock: {item.stock}</p>
            <p>Price: ${item.price}</p>
          </div>
          <div className="item-actions">
            <button className="edit-btn">
              <Edit size={18} />
            </button>
            <button className="delete-btn" onClick={() => deleteItem(item.id)}>
              <Trash size={18} />
            </button>
          </div>
        </div>
      );
    };

    export default InventoryItem;
