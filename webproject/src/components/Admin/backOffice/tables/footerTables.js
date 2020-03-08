import React, { Component } from "react";
import styles from "../../../../css/backOfficeCSS/tablesCSS/footertable.module.css";
import { postData } from "../../../../sendAPIRequest";
import FooterPreview from "./footerpreview";
class FooterTables extends Component {
	constructor(props) {
		super(props);

		this.state = {
			footerId: "",
			title: "",
			description: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.myFunction = this.myFunction.bind(this);
	}

	myFunction() {
		var footerTables = document.getElementById("footerTables");
		footerTables.style.display = "none";
	}
	handleChange(footer) {
		this.setState({ [footer.target.name]: footer.target.value });
	}

	onLoadEnded(callback, reader) {
		return function() {
			callback(reader.result);
		};
	}

	handleSubmit(data) {
		postData(data, "addFooter");
	}

	render() {
		return (
			<React.Fragment>
				<div className={styles["footerTables"]} id="footerTables">
					<a
						href="javascript:void(0);"
						id="icon"
						className="closingIcon"
						onClick={this.myFunction}
					>
						<i className="fa fa-times" />
					</a>
					<h2 id={styles["footerHeading"]}>Oppdater Footer kontaktinfo</h2>

					<label htmlFor="title">Tittel</label>
					<input
						type="text"
						name="title"
						onChange={e => this.handleChange(e)}
					/>

					<label htmlFor="description">Footerinfo</label>
					<textarea name="description" onChange={e => this.handleChange(e)} />

					<label htmlFor="submit" name="submit" />
					<input type="submit" onClick={e => this.handleSubmit(this.state)} />
				</div>
				<FooterPreview
					title={this.state.title}
					image={this.state.image}
					description={this.state.description}
				/>
			</React.Fragment>
		);
	}
}

export default FooterTables;
