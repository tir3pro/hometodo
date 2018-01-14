import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { getDate } from '../../helper';
import './styles.css';

const History = props => {
    const taskEvents = {
        CREATE_TASK: 'created',
        DELETE_TASK: 'deleted',
        UPDATE_TASK: 'updated'
    };

    return (
        <section className='hometodo__history history'>
            <h2 className='history__title'>Your change log:</h2>
            <ul className='history__list'>
                {
                    props.history.map((item, i) => {
                        const {task} = item;
                        const event = taskEvents[item.event];
                        const time = getDate(item.timeStamp);

                        return (
                            <li className='history__item' key={item.timeStamp}>
                                <p className='history__list__info'>
                                    {i + 1}. Task with <b>ID {task.id}</b> was <b>{event}</b> at <b>{time}</b>.
                                </p>
                                <p className='history__list__sub-info'>
                                    Details: <b>type:</b> {task.type}, <b>task:</b> {task.task.toLowerCase()}, <b>location:</b> {task.location},
                                    <b>description:</b> {task.description}
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

History.propTypes = {
    history: PropTypes.array.isRequired
};

export default connect(state => ({
    history: state.history
}))(History);
