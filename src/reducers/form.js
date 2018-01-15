import { TOGGLE_TASK_FORM } from '../constants';

const initialState = {
    isOpen: false,
    status: 'new'
};

export default (state = initialState, action) => {
    const {type, status} = action;

    switch (type) {
        case TOGGLE_TASK_FORM: return Object.assign({}, state, {isOpen: !state.isOpen, status: status});
    }

    return state;
};