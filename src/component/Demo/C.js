import React, { Component } from 'react'
import {connect} from 'react-redux'
class C extends Component {
  state = {
    inputValue: ""
  }
  handleClick = () => {
    const value = this.state.inputValue;
    this.props.onSend(value)
    this.setState({
      inputValue: ""
    })
  }
  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    console.log(this.props)
      const {inputValue} = this.state
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.inputValue}
        >

        </input>
        <button
          onClick={this.handleClick}
        >
          click me
           </button>
        <p>{inputValue}</p>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSend: (text) => {
      console.log(text)
      dispatch({
        type: "SENDTEXT",
        text,
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(C)