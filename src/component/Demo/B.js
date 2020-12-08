import React, { Component } from 'react'

class B extends Component {
    state = {
        inputValue: ''
    }
    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    handleClick = () => {
       const value = this.state.inputValue;
       this.props.onSendValue(value);
       this.setState({
           inputValue: ""
       })
    }
    render() {
        console.log(this.props)
        return (
          <div>
            <input type="text" onChange = {this.handleChange} value={this.state.inputValue}>
            
            </input>
            <button onClick = {this.handleClick}>
                Send
            </button>
          </div>
        )
    }
}
export default B