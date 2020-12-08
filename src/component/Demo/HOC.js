import React from 'react'
import styles from './HOC.module.css'
export default function HOC(props){
    return(
        <div className={styles.main}>
            {props.children}
        </div>
    )
}