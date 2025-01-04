import React from 'react';
    import { Link } from 'react-router-dom';
    import { Gem, Package, List } from 'lucide-react';

    const Navbar = () => {
      return (
        <nav className="navbar">
          <div className="navbar-brand">
            <Gem size={24} />
            <span>Jewelry Store</span>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">
                <List size={18} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/inventory">
                <Package size={18} />
                Inventory
              </Link>
            </li>
          </ul>
        </nav>
      );
    };

    export default Navbar;
