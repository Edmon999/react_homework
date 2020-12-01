import React from 'react';
import './App.css';
// import './Component.js/Demo.js/Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
// import ToDo from './component.js/ToDos.js/ToDo'
// import Bootstrap from "./component.js/Demo.js/Bootstrap-demo"
import ExToDo from './component.js/ToDos/ToDoExample'
// import Promise from "./component.js//Demo.js//Promise"
function App() {
  return (
    <div className="App">
        <ExToDo />
        {/* <Bootstrap /> */}
    </div>
  );
}

export default App;
