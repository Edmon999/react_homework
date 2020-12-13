import React, { PureComponent } from 'react'
import { changeDateFormat } from '../../../Helpers//changeDateFormat'
import { Default } from 'react-spinners-css';
import styles from './spinner.module.css'
import { Container, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import EditTask from '../../EditTask//EditTask'
export default class SingleTask extends PureComponent {
    state = {
        task: null,
        openEditModal: false,
    }
    componentDidMount() {
        fetch(`http://localhost:3001/task/${this.props.match.params.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                this.setState({
                    task: response
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }
    toggleEditModal = () => {
        this.setState({
            openEditModal: !this.state.openEditModal
        })
    }
    onRemove = () => {
        const taskId = this.state.task._id;
        fetch(`http://localhost:3001/task/${taskId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                this.props.history.push("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    saveTask = (task) => {
        fetch(`http://localhost:3001/task/${task._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then((res) => {
                return res.json()
            })
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                this.setState({
                        task: response,
                        openEditModal: false,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        const { task, openEditModal } = this.state
        return (
            <>
                {!!task ?
                    <div>
                        <h2>{task.title}</h2>
                        <p>Description: {task.description}</p>
                        <p>Date: {changeDateFormat(task.date)}</p>
                        <p>Created at: {changeDateFormat(task.created_at)}</p>
                        <Button
                            className={styles.buttons}
                            // className={styles.actionButton}
                            variant="danger"
                            onClick={this.onRemove}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        <Button
                            className={styles.buttons}
                            // className={styles.actionButton}
                            variant="warning"
                            onClick={this.toggleEditModal}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    </div> :
                    <Container className={styles.spinner}>
                        <Default color="black" />
                    </Container>
                   
                }
                  {
                        openEditModal
                        &&
                        <EditTask
                            data={task}
                            handleClose={this.toggleEditModal}
                            onSave={this.saveTask}
                        />
                 }
            </>
        )
    }
}
