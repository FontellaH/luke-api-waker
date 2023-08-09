import './App.css';
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import React from 'react';
import { Router, Routes, Route, Link } from "react-router-dom";




function App() {
  return (
    <div>
      <Home />
      <Routes>

        <Route path='/people/:id' element={<People />} />
        <Route path='/planet/:id' element={<Planets />} />
      </Routes>
    </div>

  );
}

export default App;
