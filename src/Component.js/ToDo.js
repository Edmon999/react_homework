import React, { Component } from 'react'
import Task from './Task'
class ToDo extends Component {
    state = {
        tasks: [],
        value: ''
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleClick = () =>{
        const tasks = [...this.state.tasks]
       tasks.push(this.state.value);
        this.setState({
            tasks: tasks,
            value: ''
        })
    }
    render() {
        const {tasks} = this.state
        const tasksArr = tasks.map((el,i) => {
            return <Task key={i} data={el}/>
        })
        return (
            <div>
                <input
                 type="text"
                 placeholder="add task"
                 value={this.state.value}
                 onChange={this.handleChange}>
                </input>
             <div>
                 
                 <button
                  onClick={this.handleClick}>  
                  add task
                </button>
            </div>
                <ol>
                {tasksArr}
                </ol>
   </div>
        )
    }
}
export default ToDo