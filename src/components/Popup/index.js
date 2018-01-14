import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteTask, closePopup } from '../../AC';
import './styles.css';

const Popup = props => {
    const {isOpen, taskToDelete} = props.popup;
    const handleCancel = () => {
        props.closePopup();
    };
    const handleDelete = () => {
        props.deleteTask(taskToDelete);
        props.closePopup();
    };
    const getPopup = () => {
        return (
            <div className='hometodo__popup popup'>
                <div className='popup__overlay'></div>
                <div className='popup__window'>
                    <h3 className='popup__title'>Sure you want to delete a task?</h3>
                    <div className='popup__buttons'>
                        <button className='popup__btn popup__btn__cancel-btn' onClick = {handleCancel}>Cancel</button>
                        <button className='popup__btn popup__btn__remove-btn' onClick = {handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        );
    };

    return isOpen ? getPopup() : null;
};

Popup.propTypes = {
    popup: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    closePopup: PropTypes.func.isRequired
};

export default connect(state => ({
    popup: state.popup
}), { deleteTask, closePopup })(Popup);
