import React from "react"
import styles from "./task.module.css"
console.log(styles)
function Task(props){
    return (
    <li className={`${styles.task} ${props.selected ? styles.selected : ""}`}>{props.data}</li>
    )
}
export default Task