import React, { Component } from "react";
import styles from "../../../../css/footer.module.css";
class FooterPreview extends Component {
	constructor(props) {
		super(props);
	}

	handleChange;

	render() {
		return (
			<React.Fragment>
				<h1>Forhåndsvisning av footer kontaktinfo</h1>

				<p id="textfooter">
					<span className="større">{this.props.title}</span>&nbsp;
					{this.props.description}
				</p>
			</React.Fragment>
		);
	}
}

export default FooterPreview;
