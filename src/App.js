import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./Component.js//Counter"
// import Product from './modules.js/Product1.jsx'
// import Counter from './modules.js//Counter';
// import New from './modules.js/New'
import ToDo from './Component.js//ToDo'
function App() {
  return (
    <div className="App">
      {/* <Product
        name={'banabas'}
        price='115$'
        description='Fresh bananas from Ecuador' 
        /> */}
        {/* <Counter value={5}/> */}
        {/* <New /> */}
        <ToDo />
    </div>
  );
}

export default App;
