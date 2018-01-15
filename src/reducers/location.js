import { SELECT_LOCATION, LOAD_LOCATION_ERROR } from '../constants';

const initialLocationState = {
    lat: null,
    lng: null,
    address: undefined
};

export default (state = initialLocationState, action) => {

    const {type, payload} = action;
    switch (type) {
        case SELECT_LOCATION: return Object.assign({}, state, payload);
        // cover errors
        case LOAD_LOCATION_ERROR: return Object.assign({}, state, {});
    }

    return state;
};