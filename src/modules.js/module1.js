import React from "react"
function User(props){
    return (
    <span className="user">
        {props.name} {props.surname} {props.age}
    </span>
    )
}
export default User