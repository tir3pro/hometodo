import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteTask, editForm, toggleTaskForm, openPopup } from '../../AC';
import { getDate } from '../../helper';
import './styles.css';

const Task = props => {
    const id = Object.keys(props.task)[0];
    const currentTask = props.task[id];
    const {type, task} = currentTask;
    const handleDelete = () => {
        props.openPopup({...currentTask, id});
    };
    const handleEdit = () => {
        props.editForm(id, currentTask);
        props.toggleTaskForm('edit');
    };
    const getClassName = (isFormOpened, btn) => {
        return isFormOpened
            ? `board__tasks-item__btn board__tasks-item__btn-disabled board__tasks-item__btn-${btn}`
            : `board__tasks-item__btn board__tasks-item__btn-${btn}`;
    };
    const getDisabledProp = isFormOpened => {
        return isFormOpened ? 'disabled' : '';
    };
    return (
        <li className='board__tasks-item'>
            <h4 className='board__tasks-item__date'>{getDate(currentTask.timeStamp)}</h4>
            <p className='board__tasks-item__title'>I need a {type} to {task.toLowerCase()}</p>
            <div className='board__tasks-item__btns'>
                <button className={getClassName(props.isFormOpened, 'edit')}
                        onClick={handleEdit}
                        disabled={getDisabledProp(props.isFormOpened)}>Edit</button>
                <button className={getClassName(props.isFormOpened, 'delete')}
                        onClick={handleDelete}
                        disabled={getDisabledProp(props.isFormOpened)}>Delete</button>
            </div>
        </li>
    );
};

Task.propTypes = {
    description: PropTypes.string,
    isFormOpened: PropTypes.bool,
    deleteTask: PropTypes.func,
    toggleTaskForm: PropTypes.func,
    openPopup: PropTypes.func,
};

export default connect(state => ({
    currentTask: state.currentTask,
    isFormOpened: state.form.isOpen
}), { deleteTask, editForm, toggleTaskForm, openPopup })(Task);

