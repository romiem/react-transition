import React, { Component } from 'react';
import { Route, matchPath } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import SlideTemplate from './SlideTemplate';
import { firstChild } from '../utils/helpers';

import GlobalNav from './GlobalNav';
import Home from './Home';
import DataExplosion from './DataExplosion';
// import Projects from './Projects';
// import ProjectItem from './ProjectItem';
import NotFound from './NotFound';
import './App.scss';

export default class App extends Component {

	constructor(props) {

		super(props);
		this.state = {
			projects: []
		};
    }
    
	// componentDidMount() {

	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 		.then(response => {
	// 			return response.json();
	// 		})
	// 		.then(json => {
	// 			this.setState({
	// 				projects: json.slice(0, 7)
	// 			});
    //         });
    // }
        
	render() {
		return (
			<div className="app">
				<GlobalNav />
				<Route
					render={({ location }) => (
						<TransitionGroup component="main">
							<SlideTemplate
								key={location.key}
								location={location}>
								<Route exact path="/" component={Home} />
								<Route exact path="/data-explosion" component={DataExplosion} />
                                
								{/* <Route
									exact
									path="/data-explosion"
									render={props => (
										<Projects {...props} projects={this.state.projects} />
									)}
								/> */}
								<Route component={NotFound} />
							</SlideTemplate>
						</TransitionGroup>
					)}
				/>
			</div>
		);
	}
}