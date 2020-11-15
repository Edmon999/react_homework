import React, {PureComponent } from 'react'
import { Container, Row, Col, FormControl, InputGroup, Button } from "react-bootstrap"
import styles from './ToDoEx.module.css'
import idGenerator from '../../Helpers.js//idGenerator'
import ToDotask from './ToDoTask'
class ExToDo extends PureComponent {
    state = {
        tasks: [],
        inputValue: "",
        selectedTask: new Set()
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
    addTask = () => {
        const { inputValue } = this.state;
        if (!inputValue) {
            return;
        }
        const newTask = {
            text: inputValue,
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
       })
    }
   
    render() {
        console.log("todoex")
        const tasksArr = this.state.tasks
            .map((task) => {
                return (<Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <ToDotask
                        data={task}
                        onRemove={this.removeTask}
                        onCheck={this.handleCheck}
                        disabled={!!this.state.selectedTask.size}
                    />
                </Col>
                )
            })
        return (
            <div className={styles.toDo}>
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={10} xs={12} md={8} lg={6}>
                            <InputGroup className={styles.input}>
                                <FormControl
                                    placeholder="Add task"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={this.handleInputChange}
                                    onKeyDown={this.handleKeyDown}
                                    value={this.state.inputValue}
                                    disabled={!!this.state.selectedTask.size}
                                />
                                <InputGroup.Append>
                                    <Button
                                        variant="outline-secondary"
                                        onClick={this.addTask}
                                        disabled={!this.state.inputValue}
                                    >
                                        Add
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        {tasksArr}
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                            <Button
                                variant="outline-danger"
                                onClick={this.removeSelected}
                                disabled={!this.state.selectedTask.size}
                            >
                                Remove Selected
                                    </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default ExToDo