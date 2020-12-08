import React from 'react'
import styles from './blockStyle.module.css'
export default function Blocks(props){
    return (
        <div className={styles.blocks}>
           {props.number}
        </div>
    )
}

