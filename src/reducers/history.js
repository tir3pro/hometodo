import {CREATE_TASK, DELETE_TASK, UPDATE_TASK} from '../constants';

export default (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TASK: {
            const historyItem = {
                event: type,
                task: payload.task,
                timeStamp: Date.now()
            };
            return state.concat(historyItem);
        }
        case UPDATE_TASK:
        case DELETE_TASK: {
            const historyItem = {
                event: type,
                task: payload.task,
                timeStamp: Date.now()
            };
            return state.concat(historyItem);
        }
    }

    return state
};