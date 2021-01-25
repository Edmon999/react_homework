import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExToDo from './component//pages//ToDos//ToDo'
import About from './component//pages//About//About'
import SingleTask from './component//pages//SingleTask//SingleTask'
import NotFound from './component//pages//404//404'
import { Route, Switch, Redirect, } from 'react-router-dom'
import Navbar from './component//Navbar//Navbar'
import Contact from './component//pages//contact//Contact'
import { ToastContainer, toast } from 'react-toastify';
import {connect} from "react-redux"
import Spinner from './Helpers//Spinner'
import Footer from './component//Footer//Footer'
function App(props) {
  const {errorMessage, loading, successMessage} = props
  if(errorMessage){
    toast.error(errorMessage)
  }
  if(successMessage){
    toast.success(successMessage)
  }
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={ExToDo} />
        <Route path="/about" exact component={About} />
        <Route path="/task/:id" exact component={SingleTask} />
        <Route path="/task" exact component={ExToDo} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to='/404' />
      </Switch>
      <Footer />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      { loading && <Spinner /> }
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
    loading: state.loading,
    successMessage: state.successMessage
  }
}
export default connect(mapStateToProps)(App);
