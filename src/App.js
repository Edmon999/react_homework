import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExToDo from './component//pages//ToDos//ToDo'
import About from './component//pages//About//About'
import SingleTask from './component//pages//SingleTask//SingleTask'
import NotFound from './component//pages//404//404'
import { Route, Switch, Redirect,} from 'react-router-dom'
import Navbar from './component//Navbar//Navbar'
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
