
import React, { Component } from 'react'
import B from './B'
import C from './C'
import D from './D'
import Array from './Array'

class New extends Component {
    state = {
        count: 0,
        inputValue: "",
        value: ''
    };
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state)
        })
        // console.log(this.state)
        // this.setState((state)=>{
        //     return {
        //         count: state.count + 1
        //     }
        // })
    }
    handleChange = (event) => {
       console.log(event.target.value)
       this.setState({
           inputValue: event.target.value
       })
    }
    getValue = (value) => {
        this.setState({
            value: value
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <p>{this.state.count}</p>
                <button
                    onClick={this.handleClick}
                >
                    click
                </button>
                <div>
                    <input
                        type="text"
                        onChange={this.handleChange}
                    >
                    </input>
                    <p>{this.state.inputValue}</p>
                </div>
                --------------------------
                <B onSendValue = {this.getValue}/>
                <C text={this.state.value}/>
                -------------
                <D />
                -------
                <Array />
            </div>
        )
    }
}
export default New 