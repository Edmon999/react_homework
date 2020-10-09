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
       this.state.tasks.push(this.state.value);
        this.setState({
            tasks: this.state.tasks,
            value: ''
        })
    }
    render() {
        console.log(this.state.tasks)
        const tasksArr = this.state.tasks.map((el,i) => {
            return <p key={i}>{el}</p>
        })
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}>
                
                </input>
             <div>
                 <button onClick={this.handleClick}>  
                  add task
                </button>
            </div>
                {tasksArr}
            </div>
        )
    }
}
export default ToDo