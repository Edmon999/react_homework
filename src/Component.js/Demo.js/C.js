import React, { Component } from 'react'

class C extends Component {
    render() {
      console.log(this.props)
        return (
         <div>
           {this.props.text}
         </div>
        )
    }
}
export default C