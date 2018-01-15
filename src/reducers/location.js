import { LOAD_LOCATION_SUCCES, SELECT_LOCATION, LOAD_LOCATION_ERROR } from '../constants';

const initialLocationState = {
    lat: null,
    lng: null,
    address: undefined
};

export default (locationState = initialLocationState, action) => {
    const {type, payload} = action;
    debugger;
    switch (type) {
        case SELECT_LOCATION: return Object.assign({}, locationState, payload);
        case LOAD_LOCATION_ERROR: return Object.assign({}, locationState, {});
    }

    return locationState
};