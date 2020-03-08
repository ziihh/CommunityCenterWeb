import React, { Component } from "react";
import styles from "../../../../css/backOfficeCSS/tablesCSS/eventtable.module.css";
import { postData } from "../../../../sendAPIRequest";
import EventPreview from "./eventpreview";
class EventTables extends Component {
	constructor(props) {
		super(props);

		this.state = {
			eventId: "",
			title: "",
			date: "",
      		time: "",
			image: "",
			imagealt: "",
			description: "",
			tags: ""
		};
		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.myFunction = this.myFunction.bind(this);
		this.setImageState = this.setImageState.bind(this);
	}

	myFunction() {
		var eventTables = document.getElementById("eventTables");
		eventTables.style.display = "none";
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	setImageState(blob) {
		this.setState({ image: blob})
	}

	onLoadEnded(callback, reader) {
		return function() {
			callback(reader.result);
		}
	}

	handleImageChange(callback){
		var file    = document.getElementById('eventimage').files[0];
		var reader  = new FileReader();

	  reader.onloadend = this.onLoadEnded(callback, reader);
		if (file) {
		 reader.readAsDataURL(file);
		}

	}

	handleSubmit(data) {
		postData(data, "addEvent");
	}

	render() {
		return (
			<React.Fragment>
			<div className={styles["eventTables"]} id="eventTables">
				<a
					href="javascript:void(0);"
					id="icon"
					className="closingIcon"
					onClick={this.myFunction}
				>
					<i className="fa fa-times" />
				</a>
				<h2 id={styles["eventHeading"]}>Legg til arrangement</h2>
				<div className={styles["inputs"]}>
					<label htmlFor="title">Tittel</label>
					<input
						type="text"
						name="title"
						onChange={e => this.handleChange(e)}
					/>
					<label htmlFor="date">Dato</label>
					<input
						id="date"
						type="date"
						name="date"
						onChange={e => this.handleChange(e)}
					/>
          <label htmlFor="time">Tid</label>
					<input
						type="time"
						name="time"
						onChange={e => this.handleChange(e)}
					/>
					<label htmlFor="description">Om arrangementet</label>
					<textarea name="description" 
							  onChange={e => this.handleChange(e)}>
					</textarea>

				<label htmlFor="fileToUpload">Last opp bilde</label>
					<input
						name="fileToUpload" 
						id="fileToUpload"
						id="eventimage"
						type="file"
						name="image"
						onChange={e => this.handleImageChange(this.setImageState)}
					/>

					<label htmlFor="imagealt">Bilde beskrivelse</label>
					<input
						type="text"
						name="imagealt"
						placeholder="skriv kort om bilde "
						onChange={e => this.handleChange(e)}
					/>
				<textarea defaultValue="Legg til tags" name="tags" onChange={e => this.handleChange(e)}>

					</textarea>
					<label htmlFor="submit" name="submit" />
					<input
						type="submit"
						onClick={e => this.handleSubmit(this.state)}
					/>
				</div>
			</div>
			<EventPreview 
				title={this.state.title}
				date={this.state.date}
				time={this.state.time}
				image={this.state.image}
				description={this.state.description}
				tags={this.state.tags} 
				/>

			</React.Fragment>
		);
	}
}

export default EventTables;
