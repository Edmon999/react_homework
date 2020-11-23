import React, { Component } from 'react'

class D extends Component {
    state = {
        name: "John",
        showText: true
    }
    changeText = () => {
        this.setState({
            showText: !this.state.showText
        })
    }
    render() {
    const   {name,showText} = this.state
        return (
         <div>
         {showText 
         ?
         <p>{name}</p>:
         <p>"nothing to show"</p>
         }
         {/* {showText && <p>{name}</p>} */}
         <button onClick={this.changeText}>click</button>
         </div>
        )
    }
}
export default D