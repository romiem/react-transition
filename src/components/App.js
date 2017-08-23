import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Switch, Route, withRouter } from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Home from './Home';
import About from './About';
import AppForm from './AppForm';
import NotFound from './NotFound';

import './App.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.props.history.listen((location, action) => {
            console.log("on route changejjj", location);
        });

        console.log('location', this.props.location);
    }

    render () {

        const currentKey = this.props.location.pathname.split('/')[1] || '/';
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
                            <Route path="/about" component={About} />
                            <Route path="/apply" component={AppForm} />
                            <Route component={NotFound} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default withRouter(App)