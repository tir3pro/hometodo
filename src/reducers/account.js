import { LOG_IN, LOG_OUT } from '../constants';

export default (state = {}, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOG_IN: return Object.assign({}, state, {isLoggedIn: true, userData: payload.user});
        case LOG_OUT: return Object.assign({}, state, {isLoggedIn: false, userData: null});
    }

    return state
};