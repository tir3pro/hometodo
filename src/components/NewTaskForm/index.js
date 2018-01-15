import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Transition from 'react-transition-group/Transition';

import { createTask, updateTask, toggleTaskForm, submitForm } from '../../AC';
import Title from './NewTaskTitle';
import Location from './NewTaskLocation';
import Type from './NewTaskTypes';
import Tasks from './NewTaskTasks';
import Description from './NewTaskDescription';
import './styles.css';

const transitionStyles = {
    entered: { right: 0 },
};

const NewTaskForm = props => {
    const {form, currentTask} = props;
    const validate = taskForm => {
        return Object.keys(taskForm).every((prop) => {
            if (prop === 'id') return true;
            return taskForm[prop];
        });
    };
    const handleSubmitTask = () => {
        const timeStamp = Date.now();
        if (form.status === 'new') {
            const id = (Date.now() + Math.random()).toString();
            props.createTask({...currentTask, id, timeStamp});
        } else if (form.status === 'edit') {
            props.updateTask({...currentTask, timeStamp});
        }
        props.submitForm();
        props.toggleTaskForm();
    };

    return (
        <Transition in = {form.isOpen} timeout = {400}>
            {(transitionState) => (
                <section className = 'dashboard__new-task new-task' style = {{
                    ...transitionStyles[transitionState]
                }}>
                    <Title validate = {validate(currentTask)} handleSubmitTask = {handleSubmitTask}/>
                    <Location/>
                    <Type/>
                    <Tasks/>
                    <Description/>
                </section>
            )}
        </Transition>
    );
};

NewTaskForm.propTypes = {
    form: PropTypes.object.isRequired,
    currentTask: PropTypes.object
};

export default connect(state => ({
    form: state.form,
    currentTask: state.currentTask
}), { createTask, updateTask, toggleTaskForm, submitForm })(NewTaskForm);