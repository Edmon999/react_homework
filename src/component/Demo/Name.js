import React, { Component } from "react"
class Name extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (  
             <p> Name is : {this.props.text}</p>   
        )
    }
}
export default Name