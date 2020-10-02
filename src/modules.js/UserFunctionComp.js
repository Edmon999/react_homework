import React from "react"
function User(props){
    return (
    <span>
        {props.name} {props.surname} {props.age}
    </span>
    )
}
export default User