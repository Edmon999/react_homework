import request from '../Helpers//request'
import * as actionTypes from "./actionTypes"
export function getTasks(data={}) {
    let url = "http://localhost:3001/task";
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
        request("http://localhost:3001/task", "POST", taskObj)
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
        request(`http://localhost:3001/task/${taskId}`, "DELETE")
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
        request(`http://localhost:3001/task`, "PATCH", { tasks: taskIds })
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
            request(`http://localhost:3001/task/${data._id}`, `PUT`, data)
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
            request(`http://localhost:3001/task/${taskId}`)
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
            request(`http://localhost:3001/task/${taskId}`, "DELETE")
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