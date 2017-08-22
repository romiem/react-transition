import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './GlobalNav.scss';

export default class GlobalNav extends Component {
	render() {
		return (
			<div className="global-nav">
				<nav>
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/aboutus">About Us</NavLink>
					<NavLink to="/apply">Apply</NavLink>
					<NavLink to="/blah">Not Found</NavLink>
				</nav>
			</div>
		)
	}
}
