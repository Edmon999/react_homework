import React, { Component } from 'react'
class Array extends Component {
    state = {
        fruits: ["banan", "apple", "orange","ciran"]
    }
    render(){
        // const fruitArr = [
        //     <p key='1'>banan</p>,
        //     <p key='2'>apple</p>,
        //     <p key='3'>orange</p>
        // ]
        const fruitArr = this.state.fruits.map((el,i)=> {
        return (<p key={i}> {el}</p>)
        })
        return(
            <div>
                {fruitArr}
            </div>
        )
    }
}
export default Array