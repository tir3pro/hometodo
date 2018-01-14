import { OPEN_POPUP, CLOSE_POPUP } from '../constants';

const initialState = {
    isOpen: false,
    taskToDelete: undefined
};

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case OPEN_POPUP: return Object.assign({}, state, {isOpen: true, taskToDelete: payload.task});
        case CLOSE_POPUP: return Object.assign({}, state, {isOpen: false, taskToDelete: undefined});
    }

    return state
};