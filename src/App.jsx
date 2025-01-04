import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Dashboard from './components/Dashboard';
    import Inventory from './components/Inventory';
    import Navbar from './components/Navbar';
    import { InventoryProvider } from './context/InventoryContext';

    function App() {
      return (
        <InventoryProvider>
          <Router>
            <div className="app">
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
              </Routes>
            </div>
          </Router>
        </InventoryProvider>
      );
    }

    export default App;
