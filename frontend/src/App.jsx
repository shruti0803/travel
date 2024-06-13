import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import {Package} from './components/Package/Package';
import {Registration} from './components/Registration/Registration';
import axios from 'axios';
import { Ok } from './components/Registration/Ok';


function App() {

  
  return (
    <Router>
      <div id='page1'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/package" element={<Package/>}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/ok" element={<Ok/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
