import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import taskTypes from '../data/index';
import { selectTask } from '../../../AC/index';
import './styles.css';

const Tasks = props => {
    const {type, selectTask} = props;
    const tasks = type && taskTypes[type].tasks;
    const getTasks = () => {
        return tasks.map(task => {
            const isActive = props.task === task;

            return (
                <li className = 'new-task__task__tasks-item' key = {task}>
                    <div className = {isActive ? 'new-task__task__btn new-task__task__btn-active' : 'new-task__task__btn'}
                            onClick = {() => selectTask({task: task})}>
                        <span className='new-task__task__name'>{task}</span>
                    </div>
                </li>
            );
        })
    };
    const getNotSelectedTypeMessage = () => {
        return <p>Please select a <b>Service type</b> above to see what to do</p>
    };

    return (
        <div className='new-task__task new-task__section'>
            <h4 className='new-task__task__title new-task__section__title'>{type} tasks</h4>
            <ul className='new-task__task__tasks-list'>
                {type ? getTasks() : getNotSelectedTypeMessage()}
            </ul>
        </div>
    );
};

Tasks.propTypes = {
    type: PropTypes.string,
    task: PropTypes.string,
    selectTask: PropTypes.func.isRequired
};

export default connect(state => ({
    type: state.currentTask.type,
    task: state.currentTask.task
}), { selectTask })(Tasks);