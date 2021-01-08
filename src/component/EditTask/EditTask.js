import React, { Component, createRef } from 'react'
import { Button, Modal } from "react-bootstrap";
import PropTypes from 'prop-types'
import styles from "./editTask.module.css"
import DatePicker from "react-datepicker"
import {connect} from 'react-redux'
import {editTask} from '../../store//action'
 class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data,
      date: new Date(props.data.date)
    }
    this.titleRef = createRef();
  }
  componentDidMount = () => {
    this.titleRef.current.focus()
  }
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  handleSave = () => {
    const { title,date} = this.state;
    if (!title) {
      return;
    } 
    const editedTask = {
      ...this.state,
      date: date.toISOString().slice(0, 10)
    }
    this.props.editTask(editedTask, this.props.from)
  }
  handleChangeDate = (date) => {
    this.setState({
        date
    })
}
  render() {
    const { props } = this;
    const { title, description,date} = this.state
    return (
      <Modal show={true} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            name="title" 
            type="text"
            className={styles.taskInput}
            onChange={this.handleChange}
            value={title}
            ref = {this.titleRef}
          />
          <textarea
            rows="5"
            placeholder="Description"
            onChange={this.handleChange}
            name="description"
            value={description}
            className={styles.description}
          > 
          </textarea>
          <DatePicker 
            selected={date ? new Date(date) : new Date()}
            onChange={this.handleChangeDate}
            minDate={new Date()}
          />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary"
              onClick={this.handleSave}>
              Save
            </Button>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    )}

}
EditTask.propTypes = {
     data: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
  }
  const mapDispatchToProps = {
    editTask
  }
  export default connect(null, mapDispatchToProps)(EditTask)