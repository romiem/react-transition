import React, { Component } from 'react';
import './SlideTitle.scss';

export default class SlideTitle extends Component {

	constructor(props) {

		super(props);
		this.state = {
			visible: false
		};
    }

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				visible: true
			});
		}, this.props.showTimeout);
	}
    
    render() {

		let textClasses = 'text futura-light';
		this.state.visible ? textClasses += ' visible' : '';

		return (
			<div className="slide-title">
                <div className={textClasses}>{this.props.value}</div>
			</div>
		);
	}
}