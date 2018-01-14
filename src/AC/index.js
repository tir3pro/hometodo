import {
    TOGGLE_TASK_FORM, CREATE_TASK, DELETE_TASK, EDIT_FORM, SELECT_TYPE, SELECT_TASK, SELECT_LOCATION,
    SELECT_DESCRIPTION, LOG_IN, LOG_OUT, SUBMIT_FORM, UPDATE_TASK, RESET_TASKS, OPEN_POPUP, CLOSE_POPUP
} from '../constants';

/*form trigger and tasks events*/
export const toggleTaskForm = status => ({
    type: TOGGLE_TASK_FORM,
    status
});

export const createTask = task => ({
    type: CREATE_TASK,
    payload: { task }
});

export const deleteTask = task => ({
    type: DELETE_TASK,
    payload: { task },
});

export const updateTask = task => ({
    type: UPDATE_TASK,
    payload: { task }
});

/*new task events*/
export const selectType = type => ({
    type: SELECT_TYPE,
    payload: { type }
});

export const selectTask = task => ({
    type: SELECT_TASK,
    payload: { task }
});

export const selectLocation = location => ({
    type: SELECT_LOCATION,
    payload: { location }
});

export const selectDescription = description => ({
    type: SELECT_DESCRIPTION,
    payload: { description }
});

export const resetTasks = () => ({
    type: RESET_TASKS
});

export const editForm = (id, task) => ({
    type: EDIT_FORM,
    payload: { id, ...task }
});

export const submitForm = () => ({
    type: SUBMIT_FORM
});

/*account events*/
export const logIn = user => ({
    type: LOG_IN,
    payload: { user }
});

export const logOut = () => ({
    type: LOG_OUT
});

/*popup events*/
export const openPopup = task => ({
    type: OPEN_POPUP,
    payload: { task }
});

export const closePopup = () => ({
    type: CLOSE_POPUP
});