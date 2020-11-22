import React, {PureComponent} from 'react'
import {Button, Card } from "react-bootstrap"
import styles from './ToDoEx.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
export default class Task extends PureComponent{
    state = {
        checked: false,
    }
    handleCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
        this.props.onCheck(this.props.data._id)
    }
    render(){
        const {checked} = this.state
        const {disabled} = this.props
        const task = this.props.data
        return(
            <Card className={`${styles.task} ${checked ? styles.selected : ""}`}>
                        <Card.Body>
                            <input
                             type ="checkbox"
                             onClick = {this.handleCheck}
                             />
                            <Card.Title>{task.text.slice(0, 10) + "..."}</Card.Title>
                            <Card.Text>
                                {task.text}
                            </Card.Text>
                            <Button 
                            className={styles.actionButton}
                            variant="danger"
                            onClick = {() => this.props.onRemove(task._id)}
                            disabled = {disabled}
                            >
                            <FontAwesomeIcon icon={faTrash}/>
                            </Button>
                            <Button 
                            className={styles.actionButton}
                            variant="warning"
                            disabled = {disabled}
                            onClick= {() => this.props.onEdit(task)}
                            >
                            <FontAwesomeIcon icon={faEdit}/>
                            </Button>
                        </Card.Body>
                    </Card>
        )
    }
}
Task.propTypes = {
    data: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}