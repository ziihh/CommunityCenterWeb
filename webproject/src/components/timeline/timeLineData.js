import React, { Component } from "react";
import "../../css/timeLine.css";

import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"; // Installed from npm: Link: https://reactjsexample.com/a-vertical-timeline-component-for-react/
import HeaderBody from "../headerBody";
import ScrollTopButton from "../topbutton/topButton";
import Footer from "../footer/footer";
import { getData } from "../../sendAPIRequest";

class TimeLinePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			isDataFetched: false
		};
	}

	componentDidMount() {
		var timeLines = getData("timeline");
		var data = [];
		var years = [];
		console.log(timeLines);
		// resolving promise and sort timeline years.
		timeLines.then(res => {
			if (res.statusCode == 200) {
				console.log(res);
				res.data.sort(function(a, b) {
					if (a.year < b.year) {
						return 1;
					} else if (a.year > b.year) {
						return -1;
					}
					return 0;
				});
				// creating html content for rendering.
				for (const [index, value] of res.data.entries()) {
					// checks if value.year does not exist in duplicates array.
					if (!years.includes(value.year)) {
						years.push(value.year);
						// creats html content with year tag.
						data.push(
							<div id={index} className="timeLineBody">
								<TimelineItem
									key="001"
									dateText={value.year}
									style={{ color: "#e86971" }}
								/>
								<div className="verticalLine">
									<div className="section1" id="sections">
										<h1 id="heading">{value.title}</h1>

										<img
											className="timeLinePictures"
											id="storyLinePictures"
											src={value.image}
											alt={value.description}
										/>

										<p className="story">{value.story}</p>
									</div>
								</div>
							</div>
						);
					} else {
						console.log(res[index]);
						data.push(
							<div id={index} className="timeLineBody">
								<div id="entry timeline-item--no-children" />
								<div className="verticalLine">
									<div className="section1" id="sections">
										<h1 id="heading">{value.title}</h1>

										<img
											className="timeLinePictures"
											id="storyLinePictures"
											src={value.image}
											alt={value.description}
										/>

										<p className="story">{value.story}</p>
									</div>
								</div>
							</div>
						);
					}
				}
			}
			this.setState({
				items: data,
				isDataFetched: true
			});
		});
	}

	render() {
		if (this.state.isDataFetched) {
			return (
				<div className="timeLinePage">
					<HeaderBody />
					{console.log("passed")}
					{console.log(this.state.items)}

					{this.state.items}
					<ScrollTopButton />
					<Footer />
				</div>
			);
		} else {
			return null;
		}
	}
}

export default TimeLinePage;
