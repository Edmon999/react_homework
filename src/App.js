import React from 'react';
import logo from './logo.svg';
import './App.css';
 import "./modules.js//Counter"
import Product from './modules.js/Product1.jsx'
// import Counter from './modules.js//Counter';
function App() {
  return (
    <div className="App">
      <Product
        name={'banabas'}
        price='115$'
        description='Fresh bananas from Ecuador' 
        />
        {/* <Counter value={5}/> */}
    </div>
  );
}

export default App;
