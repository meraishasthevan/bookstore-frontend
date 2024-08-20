// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import BookDetails from './Components/BookDetails';
import './App.css';
import FormPage from './Components/FormPage';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-page" element={<FormPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
