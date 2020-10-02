import React, { Component } from 'react'
import Price from "./Price"
import Name from "./Name"
import Description from "./Description"
class Product extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        console.log(this.props)
        return (
            <div>
                <Price text={this.props.price}/>
                <Name text={this.props.name} />
                <Description text={this.props.description} />
            </div>
        )
    }
}
export default Product