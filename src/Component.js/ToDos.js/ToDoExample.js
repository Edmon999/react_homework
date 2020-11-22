import React, {PureComponent } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import styles from './ToDoEx.module.css'
import idGenerator from '../../Helpers.js/idGenerator'
import ToDotask from './ToDoTask'
import AddTask from "../AddTask//AddTask"
import Confirm from './Confirm'
import EditTask from "../EditTask//EditTask"
class ExToDo extends PureComponent {
    state = {
        tasks: [],
        inputValue: "",
        selectedTask: new Set(),
        showConfirm: false,
        edittask: null,
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
    addTask = (value) => {
        const newTask = {
            text: value,
            _id: idGenerator()
        }
        const tasks = [...this.state.tasks]
        tasks.push(newTask)
        this.setState({
            tasks: tasks,
            inputValue: ''
        })
    }
    removeTask = (taskId) => {
        const newTask = this.state.tasks.filter((task) => task._id !== taskId)
        this.setState({
            tasks: newTask
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
        let  tasks = [...this.state.tasks]
       this.state.selectedTask.forEach((id) => {
           tasks =  tasks.filter((task) => task._id !== id)
       })
       this.setState({
           tasks,
           selectedTask: new Set(),
           inputValue: "",
           showConfirm: false,
       })
    }
    toggleConfirm = () => {
        const {showConfirm} = this.state
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
        const tasks = [...this.state.tasks]
        const editedTaskIndex = tasks.findIndex((task) => task._id === editedtask._id)
        tasks[editedTaskIndex] = editedtask;
        this.setState({
            tasks: tasks,
            edittask: null,
        })
    }
    render() {
        const {showConfirm, edittask} = this.state
        const tasksArr = this.state.tasks
            .map((task) => {
                return (<Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <ToDotask
                        data={task}
                        onRemove={this.removeTask}
                        onCheck={this.handleCheck}
                        disabled={!!this.state.selectedTask.size}
                        onEdit = {this.toggleEdit}
                    />
                </Col>
                )
            })
            
        return (
            <div className={styles.toDo}>
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={10} xs={12} md={8} lg={6}>
                            <AddTask 
                            onAdd = {this.addTask}
                            disabled = {!!this.state.selectedTask.size}
                            />
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
                onSubmit = {this.removeSelected} 
                handleClose = {this.toggleConfirm}
                count = {this.state.selectedTask.size}
                />
               }
               {
                   !!edittask 
                   &&
                    <EditTask
                    data = {edittask}
                    handleClose = {this.onClose}
                    onSave = {this.saveTask}
                    />
               }
            </div>
        )
    }
}
export default ExToDo