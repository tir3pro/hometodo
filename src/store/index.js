import { createStore } from 'redux';
import reducer from '../reducers';

import { getStorage, updateStorage } from '../services';

const initialState = getStorage();
const store = createStore(reducer, initialState);

store.subscribe(() => {
    updateStorage(store);
});

//DEV ONLY
window.store = store;
export default store;