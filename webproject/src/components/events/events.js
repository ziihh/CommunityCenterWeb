import React from "react";
import styles from "../../css/events.module.css";
import { getData } from "../../sendAPIRequest";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import EventPageLinks from "./eventpagecontainer";

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    return getData("events")
      .then(result => {
        if (result.statuscode === 200) {
          return result.data;
        }
      })
      .then(data => {
        this.setState({ items: data });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className={styles["event-header"]}>Kommende Arrangementer</h1>
        <div className={styles["event-container"]}>
          {this.state.items.map(x => (
            <div key={x.eventId} className={styles["event-box"]}>
              <h1>{x.title}</h1>
              <img src={x.image} alt={x.imagealt} />
              <p>{x.description}</p>
              <p className={styles["event-date"]}>{x.date + " " + x.time}</p>
              <Link
                to={{
                  pathname: `Arrangementer/${x.eventId}`,
                  state: { events: this.state.items }
                }}
                className={styles["event-button"]}
              >
                {" "}
                Se Arrangement
              </Link>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Events;
