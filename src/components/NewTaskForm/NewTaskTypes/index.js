import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import taskTypes from '../data/index';
import {resetTasks, selectType} from '../../../AC/index';
import './styles.css';

const Type = props => {
    const types = Object.keys(taskTypes);

    return (
        <div className='new-task__type new-task__section'>
            <h4 className='new-task__type__title new-task__section__title'>Service type</h4>
            <ul className='new-task__type__types-list'>
                {types.map(type => {
                    const logo = taskTypes[type].logo;
                    const isActive = props.type === type;

                    return (
                        <li className = 'new-task__type__types-item' key = {logo}>
                            <div className = {isActive ? 'new-task__type__btn new-task__type__btn-active' : 'new-task__type__btn'}
                                 onClick = {() => {
                                     props.selectType({type: type});
                                     props.resetTasks();
                            }}>
                                <div className='new-task__type__logo'>
                                    <img src={logo} alt={logo}/>
                                </div>
                                <p className='new-task__type__name'>{type}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

Type.propTypes = {
    selectType: PropTypes.func.isRequired,
    status: PropTypes.string,
    type: PropTypes.string
};

export default connect(state => ({
    status: state.form.status,
    type: state.currentTask.type
}), ({ selectType, resetTasks }))(Type);