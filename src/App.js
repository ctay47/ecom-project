// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ProductPage from './Components/ProductPage';
import ContactPage from './Components/ContactPage';
import ChatBox from './Components/ChatBox'; // Import the ChatBox component

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <ChatBox /> {/* Place ChatBox here, after Router but inside the div */}
    </div>
  );
}

export default App;
