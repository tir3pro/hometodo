import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Task from '../Task';
import './styles.css';

const TasksList = (props) => {
    debugger;
    const tasks = Object.keys(props.tasks);

    return (
        <ul className='board__tasks-list'>
            { tasks.length ? tasks.map(taskId => <Task key = {taskId} task = { {[taskId]: props.tasks[taskId]} } />) : null }
        </ul>
    );
};

TasksList.propTypes = {
    tasks: PropTypes.object.isRequired
};

export default connect(store => ({
    tasks: store.tasks
}))(TasksList);