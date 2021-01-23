import React, { Component, createRef } from "react"
import { FormControl,Button, Modal } from "react-bootstrap"
import styles from './AddTask.module.css'
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from "react-redux"
import {addTask} from './../../store//action'
class Addtask extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            date: new Date()
        }
        this.titleRef  = createRef()
    }
    state = {
        title: '',
        description: '',
        date: new Date()
    }
    componentDidMount = () => {
        this.titleRef.current.focus()
    }
    handleInputChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.addTask();
        }
    }
    handleChangeDate = (date) => {
        this.setState({
            date
        })
    }
    addTask = () => {
        const { title, description, date} = this.state
        if (!title) {
            return
        }
        const newTask = {
            title,
            description,
            date: date.toISOString().slice(0, 10)
        }
        this.props.addTask(newTask)
    }
    render() {
        const {handleClose } = this.props
        return (
                <Modal show={true} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <FormControl
                        name="title"
                        placeholder="title"
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleKeyDown}
                        ref={this.titleRef}
                    />
                    <textarea 
                        className={styles.description}
                        rows="5"
                        placeholder="Description"
                        onChange={this.handleInputChange}
                        name="description"
                     > 
                     </textarea>
                     <DatePicker 
                    selected={this.state.date}
                    onChange={this.handleChangeDate}
                    minDate={new Date()}
                    />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.addTask}>
                            Add
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                         </Button>
                    </Modal.Footer>
                </Modal>
        )
    }
}
Addtask.propTypes = {
    handleClose: PropTypes.func.isRequired
}
const mapDispatchToProps = {
    addTask: addTask
}
export default  connect(null, mapDispatchToProps)(Addtask)