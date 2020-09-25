import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./modules.js//module1";
import Lesson from "./modules.js//module2"
function App() {
  return (
    <div className="App">
         <h1>
           <User name="edmon" surname='sargsyan' age='20' />
         </h1>
         <Lesson />
    </div>
  );
}

export default App;
