import React from 'react';
    import { CheckCircle, XCircle } from 'lucide-react';

    const InventoryStatus = () => {
      const inventory = [
        { item: 'Diamond Rings', status: 'In Stock', quantity: 45 },
        { item: 'Gold Chains', status: 'Low Stock', quantity: 8 },
        { item: 'Pearl Necklaces', status: 'Out of Stock', quantity: 0 },
        { item: 'Silver Bracelets', status: 'In Stock', quantity: 32 }
      ];

      return (
        <div className="inventory-status">
          {inventory.map((item, index) => (
            <div key={index} className="inventory-item">
              <div className="status-icon">
                {item.status === 'In Stock' ? (
                  <CheckCircle size={20} color="#50C878" />
                ) : (
                  <XCircle size={20} color="#FF9500" />
                )}
              </div>
              <div className="item-info">
                <h4>{item.item}</h4>
                <p>{item.status} ({item.quantity})</p>
              </div>
            </div>
          ))}
        </div>
      );
    };

    export default InventoryStatus;
