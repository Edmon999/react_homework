import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { sendContact } from './/..//..//..//store//action'
class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: "",
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleClick = () => {
        const { name, email, message } = this.state
        const contact = {
            name,
            email,
            message
        }
        this.props.sendContact(contact)
        this.setState({
            name: "",
            email: "",
            message: "",
        })
    }
    render() {
        return (
            <div>
                <div className="md-form">
                    <MDBInput
                        icon="user"
                        label="Your name"
                        iconClass="grey-text"
                        type="text"
                        id="form-name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                </div>
                <div className="md-form">
                    <MDBInput
                        icon="envelope"
                        label="Your email"
                        iconClass="grey-text"
                        type="text"
                        id="form-email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                    />
                </div>
                <div className="md-form">
                    <MDBInput
                        icon="pencil-alt"
                        label="Your message"
                        iconClass="grey-text"
                        type="textarea"
                        id="form-text"
                        name="message"
                        onChange={this.handleChange}
                        value={this.state.message}
                        rows="6"
                    />
                </div>
                <Button
                    variant="primary"
                    onClick={this.handleClick}
                >Send</Button>
            </div>
        )
    }
}
const mapDispatchToProps = {
    sendContact
}
export default connect(null, mapDispatchToProps)(Contact)