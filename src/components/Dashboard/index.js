import React from 'react';
import TasksBoard from '../TasksBoard';
import NewTaskForm from '../NewTaskForm';
import MyMap from '../Map';
import './styles.css';

const Dashboard = () => {
    return (
            <section className='hometodo__dashboard dashboard'>
                <MyMap/>
                <TasksBoard/>
                <NewTaskForm/>
            </section>
    );
};

export default Dashboard;
