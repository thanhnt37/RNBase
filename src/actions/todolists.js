import * as types from '../constants/ActionTypes';

export function addNewTask(newTask) {
    return {
        type: types.ADD_NEW_TASK,
        data: newTask
    };
}

export function deleteTask(task) {
    return {
        type: types.DELETE_TASK,
        data: task
    };
}
