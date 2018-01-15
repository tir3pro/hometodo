import React from 'react';
import Header from '../Header';
import Dashboard from '../Dashboard';
import History from '../History';
import Popup from '../Popup';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound';

const App = () => {
    return (
        <Router>
            <section className='hometodo'>
                <Header/>
                <Switch>
                    <Route path = '/dashboard' component = {Dashboard}/>
                    <Route path = '/history' component = {History}/>
                    <Route path = '/' component = {Dashboard} exact />
                    <Route path = '*' component = {NotFound} />
                </Switch>
                <Popup/>
            </section>
        </Router>
    );
};

export default App;
