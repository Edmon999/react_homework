import React, { PureComponent } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import styles from './ToDo.module.css'
import ToDotask from './Task'
import AddTask from "../../AddTask/AddTask"
import Confirm from '../../Confirm/Confirm'
import EditTask from "../../EditTask/EditTask"
import Search from '..//..//Search//Search'
import { connect } from 'react-redux'
import { getTasks, removeSelectedTasks } from '../../../store//action'
class ExToDo extends PureComponent {
    state = {
        inputValue: "",
        selectedTask: new Set(),
        showConfirm: false,
        edittask: null,
        toggleAddTaskModal: false,
    }
    componentDidMount = () => {
        this.props.getTasks()
    }
    componentDidUpdate = (prevProps) => {
        if (!prevProps.addTaskSuccess && this.props.addTaskSuccess) {
            this.toggleAddTask()
        }
        if (!prevProps.removeTaskSuccess && this.props.removeTaskSuccess) {
            this.setState({
                selectedTask: new Set(),
                showConfirm: false
            })
        }
        if (!prevProps.editTaskSuccess && this.props.editTaskSuccess) {
            this.setState({
                edittask: null,
            })
        }
    }
    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.addTask()
        }
    }

    handleCheck = (id) => {
        const selectedTask = new Set(this.state.selectedTask)
        if (selectedTask.has(id)) {
            selectedTask.delete(id)
        }
        else {
            selectedTask.add(id)
        }
        this.setState({
            selectedTask
        })
    }
    removeSelected = () => {
        const taskIds = [...this.state.selectedTask]
        this.props.removeSelectedTasks(taskIds)
    }
    toggleConfirm = () => {
        const { showConfirm } = this.state
        this.setState({
            showConfirm: !showConfirm
        })
    }
    toggleEdit = (task) => {
        this.setState({
            edittask: task,
        })
    }
    onClose = () => {
        this.setState({
            edittask: null,
        })
    }
    toggleAddTask = () => {
        this.setState({
            toggleAddTaskModal: !this.state.toggleAddTaskModal
        })
    }
    render() {
        const { showConfirm, edittask, toggleAddTaskModal } = this.state
        const tasksArr = this.props.tasks
            .map((task) => {
                return (<Col key={task._id} xs={12} sm={8} md={6} lg={4} xl={3}>
                    <ToDotask
                        data={task}
                        onCheck={this.handleCheck}
                        disabled={!!this.state.selectedTask.size}
                        onEdit={this.toggleEdit}
                    />
                </Col>
                )
            })

        return (
            <div className={styles.toDo}>
                <Container>
                    <div className={styles.Search}>
                    < Search />
                    </div>
                    <Row className="justify-content-center">
                        <Col sm={10} xs={12} md={8} lg={6}>
                            <Button
                                variant="outline-secondary"
                                onClick={this.toggleAddTask}
                            >
                                Add Task
                        </Button>
                        </Col>
                    </Row>
                    <Row>
                        {tasksArr}
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                            <Button
                                variant="outline-danger"
                                onClick={this.toggleConfirm}
                                disabled={!this.state.selectedTask.size}
                            >
                                Remove Selected
                                    </Button>
                        </Col>
                    </Row>
                </Container>
                {
                    showConfirm &&
                    <Confirm
                        onSubmit={this.removeSelected}
                        handleClose={this.toggleConfirm}
                        count={this.state.selectedTask.size}
                    />
                }
                {
                    !!edittask
                    &&
                    <EditTask
                        data={edittask}
                        handleClose={this.onClose}
                        onSave={this.saveTask}
                        from="task"
                    />
                }
                {
                    toggleAddTaskModal
                    &&
                    <AddTask
                        handleClose={this.toggleAddTask}
                    />

                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        addTaskSuccess: state.addTaskSuccess,
        removeTaskSuccess: state.removeTaskSuccess,
        editTaskSuccess: state.editTaskSuccess
    }
}
const mapDispatchToProps = {
    getTasks,
    removeSelectedTasks,
}
export default connect(mapStateToProps, mapDispatchToProps)(ExToDo)