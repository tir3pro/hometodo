import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './styles.css';

const Location = ({address}) => {
    return (
        <div className='new-task__location new-task__section'>
            <h5 className='new-task__location__title new-task__section__title'>Location</h5>
            <div className='new-task__location__address'>
                <p>{address || 'Please select your location on the map'}</p>
            </div>
        </div>
    );
};

Location.propTypes = {
    address: PropTypes.string
};

export default connect(state => ({
    address: state.currentTask.location
}))(Location);