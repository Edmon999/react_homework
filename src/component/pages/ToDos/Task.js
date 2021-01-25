import React, { PureComponent } from 'react'
import { Button, Card } from "react-bootstrap"
import styles from './ToDo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faHistory, faCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { changeDateFormat } from '..//..//..//Helpers//changeDateFormat'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeTask, changeTaskStatus } from './/..//..//..//store//action'
import { trimString } from './/.//../..//..//Helpers//trimString'
class Task extends PureComponent {
    state = {
        checked: false,
        flipped: false,
    }
    handleCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
        this.props.onCheck(this.props.data._id)
    }
    render() {
        const { checked } = this.state
        const { disabled } = this.props
        const task = this.props.data
        return (
           
            <Card className={`${styles.task} ${checked ? styles.selected : ""}`} 
            
            >
                
                <Card.Body>
                    <input
                        type="checkbox"
                        onClick={this.handleCheck}
                    />
                    <Card.Title>
                        <Link to={`task/${task._id}`}>{trimString(task.title, 20)}</Link>
                    </Card.Title>
                    <Card.Text className={styles.description}> Description: {trimString(task.description, 50)}   </Card.Text>
                    <Card.Text>Date: {changeDateFormat(task.date)} </Card.Text>
                    <Card.Text> Created at: {changeDateFormat(task.created_at)} </Card.Text>
                    <Card.Text> Status: {task.status} </Card.Text>
                    {
                        task.status === "active" ?
                            <Button
                                className={styles.actionButton}
                                variant="success"
                                onClick={() => this.props.changeTaskStatus(task._id, {status: "done"}, "task")}
                                disabled={disabled}
                            >
                                <FontAwesomeIcon icon={faCheck} />
                            </Button >
                            :
                            <Button
                                className={styles.actionButton}
                                variant="info"
                                onClick={() => this.props.changeTaskStatus(task._id, {status: "active"}, "task")}
                                disabled={disabled}
                            >
                                <FontAwesomeIcon icon={faHistory} />
                            </Button>
                    }
                    <Button
                        className={styles.actionButton}
                        variant="danger"
                        onClick={() => this.props.removeTask(task._id)}
                        disabled={disabled}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <Button
                        className={styles.actionButton}
                        variant="warning"
                        disabled={disabled}
                        onClick={() => this.props.onEdit(task)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
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
    removeTask,
    changeTaskStatus
}
export default connect(null, mapDispatchToProps)(Task)