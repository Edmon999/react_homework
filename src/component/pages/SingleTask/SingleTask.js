import React, { PureComponent } from 'react'
import { changeDateFormat } from '../../../Helpers//changeDateFormat'
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faHistory, faCheck, faClock} from '@fortawesome/free-solid-svg-icons'
import EditTask from '../../EditTask//EditTask'
import { connect } from 'react-redux'
import { getTask, removeSingleTask, changeTaskStatus } from '..//..//..//store//action'
import styles from './singleTask.module.css'
class SingleTask extends PureComponent {
    state = {
        openEditModal: false,
    }
    componentDidMount() {
        this.props.getTask(this.props.match.params.id)
    }
    componentDidUpdate = (prevProps) => {
        if (!prevProps.editTaskSuccess && this.props.editTaskSuccess) {
            this.setState({
                openEditModal: false,
            })
        }
        if (!prevProps.removeTaskSuccess && this.props.removeTaskSuccess) {
            this.props.history.push("/")
        }
    }
    toggleEditModal = () => {
        this.setState({
            openEditModal: !this.state.openEditModal
        })
    }
    onRemove = () => {
        const taskId = this.props.task._id;
        this.props.removeSingleTask(taskId)
    }
    
    render() {
        const { openEditModal } = this.state
        const { task } = this.props
        return (
            <>
                {!!task ?
                
                    <div className={styles.main}>
                        <h1 className={styles.title}>{task.title}</h1>
                        <p className={styles.description}><h5>Description:</h5> {task.description}</p>
                        <p className={styles.date}><h5>Date:</h5> <FontAwesomeIcon icon={faClock} />{changeDateFormat(task.date)}</p>
                        <p className={styles.created_at}><h5>Created at:</h5> {changeDateFormat(task.created_at)}</p>
                        {
                        task.status === "active" ?
                            <Button
                                 className={styles.buttons}
                                variant="success"
                                onClick={() => this.props.changeTaskStatus(task._id, {status: "done"}, "single")}
                            >
                                <FontAwesomeIcon icon={faCheck} />
                            </Button >
                            :
                            <Button
                                 className={styles.buttons}
                                variant="info"
                                onClick={() => this.props.changeTaskStatus(task._id, {status: "active"}, "single")}
                            >
                                <FontAwesomeIcon icon={faHistory} />
                            </Button>
                          }
                        <Button
                            className={styles.buttons}
                            variant="danger"
                            onClick={this.onRemove}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        <Button
                            className={styles.buttons}
                            variant="warning"
                            onClick={this.toggleEditModal}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    </div> :
                    <h3>NO TASK FOUND</h3>
                    
                }
               
                {
                    openEditModal
                    &&
                    <EditTask
                        from="single"
                        data={task}
                        handleClose={this.toggleEditModal}
                        onSave={this.saveTask}
                    />
                }
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        task: state.task,
        editTaskSuccess: state.editTaskSuccess,
        removeTaskSuccess: state.removeTaskSuccess
    }
}
const mapDispatchToProps = {
    getTask,
    removeSingleTask,
    changeTaskStatus
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleTask)