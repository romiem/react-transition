import React, { Component, Easing } from 'react';
import { Switch } from 'react-router-dom';
import BezierEasing from 'bezier-easing';
import * as Animated from 'animated/lib/targets/react-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import './SlideTemplate.scss';

export default class SlideTemplate extends Switch {
    
    constructor(props) {
		super(props);
		this.state = {
			animate: new Animated.Value(0)
		};
    }
    
	componentWillAppear(cb) {
		console.log('componentWillAppear');
		setTimeout(
			//() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
			() => Animated.timing(
				this.state.animate,
				{
					toValue: 1,
					duration: 500,
					easing: BezierEasing(0, 0.65, 0.35, 1)
				}
			).start(cb),
			500
		);
    }
    
	componentWillEnter(cb) {
		console.log('componentWillEnter');
		setTimeout(
			//() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
			() => Animated.timing(
				this.state.animate,
				{
					toValue: 1,
					duration: 500,
					easing: BezierEasing(0, 0.65, 0.35, 1)
				}
			).start(cb),
			500
		);
    }
    
	componentWillLeave(cb) {
		console.log('componentWillLeave');
		Animated.spring(this.state.animate, { toValue: 2 }).start();
		setTimeout(() => cb(), 500);
    }
    
	render() {
		console.log('word ', this.state.animate);
		const style = {
			opacity: Animated.template`${this.state.animate.interpolate({
				inputRange: [0, 1, 2],
				outputRange: [0, 1, 0]
			})}
			`,
			transform: Animated.template`
				translate3d(0,${this.state.animate.interpolate({
				inputRange: [0, 1, 2],
				outputRange: ['100px', '0px', '-100px']
			})},0)
			`
		};
		return (
			<Animated.div style={style} className="slide-template">
				{super.render()}
			</Animated.div>
		);
	}
};