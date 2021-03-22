import request from '../Helpers//request'
import * as actionTypes from "./actionTypes"
const apiUrl = process.env.REACT_APP_API_URL
console.log(process.env.REACT_APP_API_URL)
export function getTasks(data={}) {
    let url = `${apiUrl}/task`;
    let query = "?"
    for(let key in data){
        let value = data[key]
        query = `${query}${key}=${value}&`
    }
    if(query==="?"){
        query = ''
    }
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING, })
        request(url+query)
            .then((res) => {
                dispatch({
                    type: actionTypes.GET_TASKS_SUCCESS,
                    tasks: res
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }
}
export function addTask(taskObj) {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING, })
        request(`${apiUrl}/task`, "POST", taskObj)
            .then((res) => {
                dispatch({
                    type: actionTypes.ADD_TASKS_SUCCESS,
                    task: res
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }
}
export function removeTask(taskId) {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING, })
        request(`${apiUrl}/task/${taskId}`, "DELETE")
            .then((res) => {
                dispatch({
                    type: actionTypes.REMOVE_TASK,
                    taskId
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }
}
export function removeSelectedTasks(taskIds) {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING, })
        request(`${apiUrl}/task`, "PATCH", { tasks: taskIds })
            .then((res) => {
                dispatch({
                    type: actionTypes.REMOVE_SELECTED_TASKS,
                    taskIds
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }
}
    export function editTask(data, from) {
        return (dispatch) => {
            dispatch({ type: actionTypes.LOADING })
            request(`${apiUrl}/task/${data._id}`, `PUT`, data)
                .then((editedTask) => {
                    dispatch({
                        type: actionTypes.EDIT_TASKS_SUCCESS,
                        task: editedTask,
                        from
                    })
                })
                .catch((err) => {
                    dispatch({
                        type: actionTypes.ERROR,
                        error: err.message
                    })
                })
        }
    }
    export function getTask(taskId) {
        return (dispatch) => {
            dispatch({ type: actionTypes.LOADING, })
            request(`${apiUrl}/task/${taskId}`)
                .then((res) => {
                    dispatch({
                        type: actionTypes.GET_TASK_SUCCESS,
                        task: res
                    })
                })
                .catch((err) => {
                    dispatch({
                        type: actionTypes.ERROR,
                        error: err.message
                    })
                })
        }
    }
    export function removeSingleTask(taskId) {
        return (dispatch) => {
            dispatch({ type: actionTypes.LOADING, })
            request(`${apiUrl}/task/${taskId}`, "DELETE")
                .then((res) => {
                    dispatch({
                        type: actionTypes.REMOVE_SINGLE_TASK,
                        taskId
                    })
                })
                .catch((err) => {
                    dispatch({
                        type: actionTypes.ERROR,
                        error: err.message
                    })
                })
        }
    }
    export function changeTaskStatus(id, data, from) {
        return (dispatch) => {
            dispatch({ type: actionTypes.LOADING })
            request(`${apiUrl}/task/${id}`, `PUT`, data)
            
                .then((editedTask) => {
                    dispatch({
                        type: actionTypes.CHANGE_TASK_STATUS,
                        task: editedTask,
                        from
                    })
                    
                })
                .catch((err) => {
                    dispatch({
                        type: actionTypes.ERROR,
                        error: err.message
                    })
                })
        }
    }
    export function sendContact(data) {
        return (dispatch) => {
            dispatch({ type: actionTypes.LOADING })
            request(`${apiUrl}/form`, `POST`, data)
                .then((data) => {
                    dispatch({
                        type: actionTypes.SEND_CONTACT,
                        contact: data,
                    })
                })
                .catch((err) => {
                    dispatch({
                        type: actionTypes.ERROR,
                        error: err.message
                    })
                })
        }
    }