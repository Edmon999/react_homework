import * as actionTypes from "./actionTypes"
const defaultState = {
    task: null,
    tasks: [],
    errorMessage: null,
    successMessage: "",
    addTaskSuccess: false,
    loading: false,
    removeTaskSuccess: false,
    editTaskSuccess: false,
}
const reducer = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.LOADING: {
            return {
                ...state,
                loading: true,
                addTaskSuccess: false,
                errorMessage: null,
                successMessage: "",
                removeTaskSuccess: false,
                editTaskSuccess: false,
            }
        }
        case actionTypes.ERROR: {
            return {
                ...state,
                errorMessage: action.error,
                loading: false
            }
        }
        case actionTypes.GET_TASKS_SUCCESS: {
            return {
                ...state,
                tasks: action.tasks,
                loading: false
            }
        }
        case actionTypes.ADD_TASKS_SUCCESS: {
            const tasks = [...state.tasks, action.task]
            return {
                ...state,
                tasks: tasks,
                loading: false,
                addTaskSuccess: true,
                successMessage: "Task added successfully"
            }
        }
        case actionTypes.REMOVE_TASK: {
            const newTask = state.tasks.filter((task) => task._id !== action.taskId)
            return {
                ...state,
                tasks: newTask,
                loading: false,
                successMessage: "Task removed successfully"
            }
        }
        case actionTypes.REMOVE_SELECTED_TASKS: {
            let tasks = [...state.tasks];
            action.taskIds.forEach(id => {
                tasks = tasks.filter((task) => task._id !== id)
            });
            return {
                ...state,
                tasks: tasks,
                loading: false,
                successMessage: "Tasks removed successfully",
                removeTaskSuccess: true,
            }
        }
        case actionTypes.EDIT_TASKS_SUCCESS: {
            if (action.from === "single") {
                return {
                    ...state,
                    task: action.task,
                    loading: false,
                    successMessage: "Tasks edited successfully",
                    editTaskSuccess: true,
                }
            } else {
                const tasks = [...state.tasks]
                const editedTaskIndex = tasks.findIndex((task) => task._id === action.task._id)
                tasks[editedTaskIndex] = action.task;
                return {
                    ...state,
                    tasks: tasks,
                    loading: false,
                    successMessage: "Tasks edited successfully",
                    editTaskSuccess: true,
                }
            }

        }
        case actionTypes.GET_TASK_SUCCESS: {
            return {
                ...state,
                task: action.task,
                loading: false
            }
        }
        case actionTypes.REMOVE_SINGLE_TASK: {
            return {
                ...state,
                task: null,
                loading: false,
                successMessage: "Task removed successfully",
                removeTaskSuccess: true,
            }
        }
    }

    return state
}
export { reducer }