import React, { Component } from "react";
import styles from "../../../../css/events.module.css";
class EventPreview extends Component {
  constructor(props) {
    super(props);
  }

  handleChange;

  render() {
    return (
      <React.Fragment>
        <h1>Forhåndsvisning</h1>
        <div className={styles["event-container"]}>
          <div className={styles["preview-box"]}>
            <h1>{this.props.title}</h1>
            <img src={this.props.image} />
            <p>{this.props.description}</p>
            <p className={styles["event-date"]}>
              {this.props.date + " " + this.props.time}
            </p>
            <button className={styles["event-button"]}>Se Arrangement</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventPreview;
