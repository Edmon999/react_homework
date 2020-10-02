import React from 'react';
import logo from './logo.svg';
import './App.css';
// import User from "./modules.js//UserFunctionComp"
// import Lesson from "./modules.js//Lesson"
// import "./modules.js/class"
// import Person from './modules.js//Person'
import Product from './modules.js/Product1.jsx'
function App() {
  return (
    <div className="App">
      {/* <h1>
        <User name="edmon" surname='sargsyan' age='20' />
      </h1> */}
      {/* <Lesson /> */}
      <Product
        name={'banabas'}
        price='1$'
        description='Fresh bananas from Ecuador' 
        />
      {/* <Person name="edmon" age={20} lastName="sargsyan"/> */}
    </div>
  );
}

export default App;
