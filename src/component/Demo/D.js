import React, { Component } from 'react'
import {connect} from 'react-redux'
class D extends Component {
   
    render() {
        console.log(this.props)
        return (
         <div>
         <p>show input C</p>
         <p>{this.props.value}</p>
         </div>
        )
    }
}
const  mapStateToProps = (state) => {
    console.log(state)

    return {
        value: state.text
    }
}
export default connect(mapStateToProps, null)(D)