import React, { PureComponent } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import styles from './ToDo.module.css'
import ToDotask from './Task'
import AddTask from "../../AddTask/AddTask"
import Confirm from './Confirm'
import EditTask from "../../EditTask/EditTask"
class ExToDo extends PureComponent {
    state = {
        tasks: [],
        inputValue: "",
        selectedTask: new Set(),
        showConfirm: false,
        edittask: null,
        toggleAddTaskModal: false,
    }
    componentDidMount = () => {
        fetch("http://localhost:3001/task", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                const tasks = [...this.state.tasks]
                this.setState({
                    tasks: response
                })
            })
            .catch((error) => {
                console.log(error)
            })
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
    addTask = (taskObj) => {
        fetch("http://localhost:3001/task", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                const tasks = [...this.state.tasks]
                tasks.push(response)
                this.setState({
                    tasks,
                    toggleAddTaskModal: false,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    removeTask = (taskId) => {
        fetch(`http://localhost:3001/task/${taskId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "aplication/json"
            }
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                const newTask = this.state.tasks.filter((task) => task._id !== taskId)
                this.setState({
                    tasks: newTask
                })
            })
            .catch((error) => {
                console.log(error)
            })
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
        const body = {
            tasks: [...this.state.selectedTask]
        };
        fetch(`http://localhost:3001/task`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then((res) => {
                return res.json()
            })
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                let tasks = [...this.state.tasks]
                this.state.selectedTask.forEach((id) => {
                    tasks = tasks.filter((task) => task._id !== id)
                })
                this.setState({
                    tasks,
                    selectedTask: new Set(),
                    showConfirm: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
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
    saveTask = (editedtask) => {
        fetch(`http://localhost:3001/task/${editedtask._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedtask)
        })
            .then((res) => {
                return res.json()
            })
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                const tasks = [...this.state.tasks]
                const editedTaskIndex = tasks.findIndex((task) => task._id === editedtask._id)
                tasks[editedTaskIndex] = response;
                this.setState({
                    tasks: tasks,
                    edittask: null,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    toggleAddTask = () => {
        this.setState({
            toggleAddTaskModal: !this.state.toggleAddTaskModal
        })
    }
    render() {
        const { showConfirm, edittask, toggleAddTaskModal } = this.state
        const tasksArr = this.state.tasks
            .map((task) => {
                return (<Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <ToDotask
                        data={task}
                        onRemove={this.removeTask}
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
                    />
                }
                {
                    toggleAddTaskModal
                    &&
                    <AddTask
                        onAdd={this.addTask}
                        handleClose={this.toggleAddTask}
                    />

                }
            </div>
        )
    }
}
export default ExToDo