import { SELECT_TYPE, SELECT_TASK, SELECT_LOCATION, SELECT_DESCRIPTION, RESET_TASKS, EDIT_FORM, SUBMIT_FORM } from '../constants';

const initialCurrentTask = {
    id: undefined,
    type: undefined,
    task: undefined,
    location: undefined,
    description: ''
};

export default (state = initialCurrentTask, action) => {
    const {type, payload} = action;

    switch (type) {
        case SELECT_TYPE: return Object.assign({}, state, payload.type);
        case SELECT_TASK: return Object.assign({}, state, payload.task);
        case SELECT_LOCATION: return Object.assign({}, state, {location: payload.address});
        case SELECT_DESCRIPTION: return Object.assign({}, state, payload.description);
        case RESET_TASKS: return Object.assign(Object.assign({}, state, {...state, task: undefined}));
        case EDIT_FORM: return Object.assign({}, state, payload);
        case SUBMIT_FORM: return Object.assign({}, state, initialCurrentTask);
    }

    return state;
};