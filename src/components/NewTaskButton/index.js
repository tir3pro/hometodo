import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleTaskForm } from '../../AC';
import './styles.css';

const NewTaskButton = props => {
    const isOpen = props.form.isOpen;
    const handleClick = () => {
        props.toggleTaskForm('new');
    };

    return (
        <button
            className={ isOpen ? 'board__button board__button-active' : 'board__button' }
            onClick = { handleClick }>
            { isOpen ? 'Close Task Form ' : '+ New Task' }
        </button>
    );
};

NewTaskButton.propTypes = {
    form: PropTypes.object.isRequired,
    toggleTaskForm: PropTypes.func.isRequired
};

export default connect(state => ({
    form: state.form
}), { toggleTaskForm })(NewTaskButton)

