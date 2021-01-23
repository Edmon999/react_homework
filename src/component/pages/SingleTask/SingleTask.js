import React, { PureComponent } from 'react'
import { changeDateFormat } from '../../../Helpers//changeDateFormat'
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import EditTask from '../../EditTask//EditTask'
import { connect } from 'react-redux'
import { getTask, removeSingleTask } from '..//..//..//store//action'
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
                    <div>
                        <h2>{task.title}</h2>
                        <p>Description: {task.description}</p>
                        <p>Date: {changeDateFormat(task.date)}</p>
                        <p>Created at: {changeDateFormat(task.created_at)}</p>
                        <Button
                            // className={styles.buttons}
                            variant="danger"
                            onClick={this.onRemove}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        <Button
                            // className={styles.buttons}
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
    removeSingleTask
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleTask)