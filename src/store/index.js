import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

import { getStorage, updateStorage } from '../services';

const initialState = getStorage();
const enhancer = applyMiddleware(thunk);
const store = createStore(reducer, initialState, enhancer);

store.subscribe(() => {
    updateStorage(store);
});

//DEV ONLY
window.store = store;
export default store;