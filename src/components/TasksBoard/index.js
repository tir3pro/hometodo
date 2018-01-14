import React from 'react';

import NewTaskButton from '../NewTaskButton';
import TasksList from '../TasksList';
import './styles.css';

const TasksBoard = () => {
    return (
        <section className='dashboard__board board'>
            <NewTaskButton/>
            <TasksList/>
        </section>
    );
};

export default TasksBoard;