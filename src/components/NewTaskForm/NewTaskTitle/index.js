import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';

const Title = props => {
    let {type, task, description, location} = props.taskInfo;
    type = type || 'someone';
    task = task || 'do something';
    description = description || 'it is very important';
    location = location || 'somewhere';

    return (
        <div className='new-task__header new-task__section'>
            <h5 className='new-task__header__title new-task__section__title'>New Task</h5>
            <div className='new-task__header__description'>
                <p>I need <b>a <span className = 'new-task__header__description__type'>{type}</span></b> to
                    <span className = 'new-task__header__description__task'>{task}</span>,
                    <span className = 'new-task__header__description__description'>{description}</span></p>
            </div>
            <div className='new-task__header__location'>
                <p>My address is {location}</p>
            </div>
            <button className={!props.validate ?
                    'new-task__header__description__submit new-task__header__description__submit-disabled'
                    : 'new-task__header__description__submit'}
                onClick = {props.handleSubmitTask}
                disabled = {!props.validate ? 'disabled' : ''}>
                {props.status === 'new' ? 'Create task' : 'Update task'}
            </button>
        </div>
    );
};

Title.propTypes = {
    taskInfo: PropTypes.object.isRequired,
    status: PropTypes.string,
    validate: PropTypes.bool,
    handleSubmitTask: PropTypes.func
};

export default connect(state => ({
    taskInfo: state.currentTask,
    status: state.form.status
}))(Title);