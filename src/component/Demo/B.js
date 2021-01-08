import React, { Component } from 'react'
import C from "./C"
import D from "./D"
import {connect} from 'react-redux'
class B extends Component {
    state = {
        inputValue: ""
    }
    inputValueC = (text) => {
        this.setState({
            inputValue: text
        })
    }
    render() {
        console.log(this.props)
        return (
          <div>
            <h3>{this.props.val}</h3>
          <C />
          <D />
          </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        val: state.texts
    }
}
export default connect(mapStateToProps)(B)