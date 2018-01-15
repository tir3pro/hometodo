import { combineReducers } from 'redux';
import form from './form';
import tasks from './tasks';
import account from './account';
import currentTask from './currentTask';
import history from './history';
import popup from './popup';
import location from './location';
import device from './device';

export default combineReducers({
    form,
    tasks,
    account,
    currentTask,
    history,
    popup,
    location,
    device
});