import React, {PureComponent} from 'react'
import {Button, Card } from "react-bootstrap"
import styles from './ToDo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import {changeDateFormat} from '..//..//..//Helpers//changeDateFormat'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeTask} from './/..//..//..//store//action'
 class Task extends PureComponent{
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
                            <Card.Title>
                            <Link to={`task/${task._id}`}>{task.title}</Link>
                            </Card.Title>
                            <Card.Text   className={styles.description}> Description: {task.description}   </Card.Text>
                            <Card.Text>Date: {changeDateFormat(task.date)} </Card.Text>
                            <Card.Text> Created at: {changeDateFormat(task.created_at)} </Card.Text>
                            <Button 
                            className={styles.actionButton}
                            variant="danger"
                            onClick = {() => this.props.removeTask(task._id)}
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
    onCheck: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}
const mapDispatchToProps = {
    removeTask
}
export default connect(null, mapDispatchToProps)(Task)