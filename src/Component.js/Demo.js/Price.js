import React, { Component } from "react"
class Price extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: props.text,
            rate: 487
        }
    }
    handleClick = () => {
       let {price, rate} = this.state;
       let sign = price[price.length - 1];
        if(sign === "$"){
            let amd = parseFloat(price) * rate +"֏";
            this.setState({
                price: amd
            })
        }  
        else if(sign === "֏"){
            let usd = parseFloat(price) / rate +"$";
            this.setState({
                price: usd
            })
        }
    }
    render() {
        return (
            <>
                <p> price is: {this.state.price}</p>
                <button onClick={this.handleClick}>
                    change the curency
                 </button>
            </>

        )
    }
}
export default Price