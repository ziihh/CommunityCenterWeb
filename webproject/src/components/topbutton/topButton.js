import React, { Component } from "react";
import "../../css/topButton.css";
class ButtonScroll extends Component {
	constructor() {
		super();
		this.state = {
			intervalId: 0
		};
	}

	scrollTop() {
		if (window.pageYOffset === 0) {
			clearInterval(this.state.intervalId);
		}
		window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
	}

	scrollToTop() {
		const intervalId = setInterval(
			this.scrollTop.bind(this),
			this.props.delayInMs
		);
		this.setState({ intervalId: intervalId });
	}

	render() {
		return (
			<button
				title="scroll to top"
				className="scroll_top"
				onClick={() => {
					this.scrollToTop();
				}}
			>
				Til toppen
			</button>
		);
	}
}

class ScrollTopButton extends Component {
	render() {
		return (
			<div className="TopButton">
				<ButtonScroll scrollStepInPx="50" delayInMs="16.66" />
			</div>
		);
	}
}
export default ScrollTopButton;
