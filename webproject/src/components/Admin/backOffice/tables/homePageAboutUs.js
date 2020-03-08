import React, { Component } from "react";
import "../../../../css/backOfficeCSS/tablesCSS/homePageAboutUs.css";
import ComponentsTables from "../componentsTables";
import { Route, withRouter } from "react-router-dom";

class HomePageAboutUs extends Component {
	constructor(props) {
		super(props);
		this.exitEditPage = this.exitEditPage.bind(this);
	}

	exitEditPage() {
		var editHomePageAboutUs = document.getElementById("editHomePageAboutUs");
		editHomePageAboutUs.style.display = "none";
	}
	render() {
		return (
			<div className="homePageAboutUs" id="editHomePageAboutUs">
				<a
					href="javascript:void(0);"
					id="icon"
					className="closingIcon"
					onClick={this.exitEditPage}
				>
					<i className="fa fa-times" />
				</a>
				<h2 id="pageHeading">Her kan du redigere om oss delen fra forsiden</h2>
				<form className="aboutUsTable" id="aboutUsTable">
					<label for="title">Title</label>
					<input className="input_fields" type="text" name="title" />

					<label for="image">Bilde</label>
					<input
						className="input_fields"
						type="file"
						name="pic"
						accept="image/*"
					/>
					<label for="description">Bilde beskrivelse</label>
					<input
						className="input_fields"
						type="text"
						name="description"
						placeholder="Liten beskrivelse om hva bilde er..."
					/>
					<textarea className="tekstboks">om oss</textarea>
					<label for="submit" name="submit" />
					<input className="input_button" type="submit" />
				</form>
			</div>
		);
	}
}

export default withRouter(HomePageAboutUs);
