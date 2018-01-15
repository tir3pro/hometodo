import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from './Button';
import Account from './Account';
import { logIn, logOut } from '../../AC';
import './styles.css';

const Login = (props) => {
    const item = 'account';
    const responseFacebook = (response) => {
        if (!response.userID) return;
        props.logIn(response);
    };
    const handleLogout = () => {
        props.logOut();
    };

    return (
        <div className='profile__content'>
            { !props.isLoggedIn ? <Button handleResponse = {responseFacebook}/> : <Account user = {props.userData} handleLogout = {() => (handleLogout(item))}/> }
        </div>
    );
};

Login.propTypes = {
    isLoggedIn: PropTypes.bool,
    userData: PropTypes.object
};

export default connect(state => ({
    isLoggedIn: state.account.isLoggedIn,
    userData: state.account.userData
}), { logIn, logOut })(Login);