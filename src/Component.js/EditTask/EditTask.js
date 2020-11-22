import React, {Component} from 'react'
import {Button, Modal} from "react-bootstrap";
import PropTypes from 'prop-types'
import styles from "./editTask.module.css"
export default class EditTask extends Component{
  constructor(props){
      super(props);
      this.state = {
        ...props.data
      }
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  handleSave = () => {
    const {text} = this.state;
    if(!text) {
      return;
    }
    this.props.onSave(this.state)
  }
    render(){ 
        const {props} = this;
        const {text} = this.state
        return(
        <Modal show={true} onHide={props.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <input type="text" 
          className={styles.taskInput}
          value = {text}
          onChange = {this.handleChange}
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
    // onSave: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
  }