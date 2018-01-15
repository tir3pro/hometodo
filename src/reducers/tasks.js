import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from '../constants';
import { getActiveTasks } from '../helper';

export default (state = {}, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TASK: return Object.assign({}, state, {[payload.task.id]: payload.task});

        case DELETE_TASK: return (() => {
            let copy = Object.assign({}, state);
            delete copy[payload.task.id];
            return copy;
        })();

        case UPDATE_TASK: return (() =>{
            return Object.assign({}, state, {[payload.task.id]: payload.task});
        })();
    }

    return state;
};