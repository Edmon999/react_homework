import React, { Component } from "react"
import {FormControl, InputGroup, Button} from "react-bootstrap"
import styles from './AddTask.module.css'
import PropTypes from 'prop-types'
export default class Addtask extends Component {
    state = { 
        inputValue: '',
    }
    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    handleKeyDown = (event) => {
        if(event.key === "Enter"){
            this.addTask();
        }
        return 
    }
    addTask = () => {
        const {inputValue} = this.state
        if(!inputValue){
            return 
        }
        const newTask = {
            title: inputValue,
        }
        this.props.onAdd(newTask)
        this.setState({
            inputValue: '',
        })
    }
    render() {
        const {disabled} = this.props
        return (
            <InputGroup className={styles.input}>
                <FormControl
                    placeholder="Add task"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.inputValue}
                    disabled={disabled}
                />
                <InputGroup.Append>
                    <Button
                        variant="outline-secondary"
                        onClick={this.addTask}
                        disabled={disabled}
                    >
                        Add
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}
Addtask.propTypes = {
    onAdd: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}
