import React, { Component } from "react"
class Description extends Component {


    render() {
        return (  
             <p> description : {this.props.text}</p>   
        )
    }
}
export default Description