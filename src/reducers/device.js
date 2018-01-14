import { isMobile } from '../helper';

const initialState = {
    device: isMobile() ? 'mobile' : 'desktop'
};

export default (state = initialState) => {
    return state
};