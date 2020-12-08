import React from 'react';
import {Button, Modal} from "react-bootstrap";
import PropTypes from 'prop-types'
export default function Confirm(props){
    return(
        <Modal show={true} onHide={props.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>remove {props.count} tasks? </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="primary" onClick={props.onSubmit}>
              Remove
            </Button>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    )
}
Confirm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired
}