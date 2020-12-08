import React, {PureComponent} from 'react' 
 import {changeDateFormat}  from '../../../Helpers//changeDateFormat'
 import {Default} from 'react-spinners-css';
 import styles from './spinner.module.css'
 import { Container} from "react-bootstrap"
export default class SingleTask extends PureComponent{
    state = {
        task: null,
    }
    componentDidMount(){
        fetch(`http://localhost:3001/task/${this.props.match.params.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((response)=>{
            if(response.error){
                throw response.error
            }
            this.setState({
                task: response
            })
        })
        .catch((error)=>{
            console.log(error)
        });
    }   
    render(){
        const {task} = this.state
        return(
            <>
            {!!task ?
             <div>
            <h2>{task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Date: {changeDateFormat(task.date)}</p>
            <p>Created at: {changeDateFormat(task.created_at)}</p>

            </div> :
            <Container className={styles.spinner}>
             <Default color="black"/>
             </Container>
            }
            </>
        )
    } 
}
