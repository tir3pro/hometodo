import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

const Button = props => {
    return (
        <div className='profile__content__account account'>
            <h4 className='account__title'>Sign in to your account</h4>
            <FacebookLogin
                icon = 'fa-facebook'
                className = 'profile__content__btn'
                appId = '307057359815120'
                autoLoad = {false}
                fields = 'name, email, picture'
                scope = 'public_profile, user_friends, email'
                callback = {props.handleResponse} />
        </div>
    );
};

Button.propTypes = {
    handleResponse: PropTypes.func.isRequired
};

export default Button;