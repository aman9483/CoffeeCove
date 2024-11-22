import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './index.css';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home';

import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Error from './pages/error'; // Import your Error page component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/coffee" element={<Menu />} />
     
        
    
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
