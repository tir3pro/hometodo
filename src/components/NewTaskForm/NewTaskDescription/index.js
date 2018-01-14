import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectDescription } from '../../../AC/index';
import './styles.css';

const Description = ({value, selectDescription}) => {
    return (
        <div className='new-task__description new-task__section'>
            <h4 className='new-task__description__title new-task__section__title'>Task description</h4>
            <div className='new-task__description__text-area'>
                <input
                    className = 'new-task__description__input'
                    type = 'text'
                    placeholder = 'Please add a description'
                    value = {value}
                    onChange = {event => selectDescription({description: event.target.value})}
                />
            </div>
        </div>
    );
};

Description.propTypes = {
    selectDescription: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default connect(state => ({
    value: state.currentTask.description
}), { selectDescription })(Description);