import React, { Component } from "react"
import { FormControl,Button, Modal } from "react-bootstrap"
import styles from './AddTask.module.css'
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class Addtask extends Component {
    state = {
        title: '',
        description: '',
        date: new Date()
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
        this.props.onAdd(newTask)
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
    onAdd: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
}
