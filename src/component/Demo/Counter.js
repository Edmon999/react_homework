import React, { Component } from "react"
class Counter extends Component {
    constructor(props){
      super()
      this.state = {
        count: props.value
      }
    }
    // state = {
    //     count: 0
    // };
    handleClick = () => {
      this.setState({
        count: this.state.count+1
      })
    }
    handleClickMinus = () => {
      this.setState({
        count: this.state.count-1
      })
    }
    render() {
      console.log(this.state)
        return (
          <div>
              <p>
                {this.state.count}
              </p>
              <button
                onClick={this.handleClick}
              >     
                  plus
              </button>
              <button
                onClick={this.handleClickMinus}
              >     
                  minus
              </button>
          </div>  
        )
    }
}
export default Counter