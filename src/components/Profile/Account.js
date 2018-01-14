import React from 'react';
import PropTypes from 'prop-types';

const Account = props => {
    return (
        <div className="profile__content__account account">
            <h4 className='account__title'>Welcome {props.user.name}</h4>
            <img className='account__avatar' src={props.user.picture.data.url} alt="avatar"/>
            <button className='account__btn' onClick={props.handleLogout}>Log out</button>
        </div>
    );
};

Account.propTypes = {
    user: PropTypes.object.isRequired,
    handleLogout: PropTypes.func.isRequired
};

export default Account;