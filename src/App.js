import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExToDo from './component.js//pages//ToDos//ToDoExample'
import About from './component.js//pages//About//About'
import SingleTask from './component.js//pages//SingleTask//SingleTask'
import NotFound from './component.js//pages//404//404'
import { Route, Switch, Redirect,} from 'react-router-dom'
import Navbar from './component.js//NavbarLink//NavbarLink'
function App() {
  return (
    <div className="App">
{/* <Link to="/task"> task</Link> */}
      <Navbar />
      <Switch>
        <Route path="/" exact component={ExToDo} />
        <Route path="/about" exact component={About} />
        <Route path="/task/:id" exact component={SingleTask} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </div>
  );
}

export default App;
