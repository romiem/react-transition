import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Switch, Route, withRouter } from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Home from './Home';
import AboutUs from './AboutUs';
import AppForm from './AppForm';
import NotFound from './NotFound';

import './App.scss';

const App = ({ location }) => {

    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = {
        enter: 1500,
        exit: 500
    };

    return (
        <div className="app">
            <GlobalNav />
            <TransitionGroup className="pages">
                <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
                    <Switch location={location}>
                        <Route path="/" exact component={Home} />
                        <Route path="/aboutus" component={AboutUs} />
                        <Route path="/apply" component={AppForm} />
                        <Route component={NotFound} /> 
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default withRouter(App)