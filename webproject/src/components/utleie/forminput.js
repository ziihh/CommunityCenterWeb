import React from "react";
import styles from "../../css/utleie.module.css";
import { DateRange } from 'react-date-range';
import * as rdrLocales from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "../../css/daterange.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      epost: "",
      number: "",
      info: "",
      date: "",
      startDate: new Date(),
      endDate: new Date(),
    };
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRangeChange(range) {
    this.setState({startDate: range.range1.startDate})
    this.setState({endDate: range.range1.endDate})
  }

  handleChange(event) {
    const { target: {name, value} } = event
      this.setState({ [name]: value }) }
    handleSubmit(event, props) {
    console.log(this.state)
    event.preventDefault();
  }

  render() {
    return (<div className={styles["inputArea"]}>
      <h2>Forespørsel om utleie</h2>
      <form onSubmit={this.handleSubmit}>
        <div className={styles["inputs"]}>
          <label htmlFor="fname">Full name</label>
          <input id="fname" type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange}/>
          <label htmlFor="femail">E-post</label>
          <input id="femail" type="text" name="epost" value={this.state.epost} onChange={this.handleChange}/>
          <label htmlFor="fnumber">Telefonnummer</label>
          <input id="fnumber" type="text" name="number" value={this.state.event} onChange={this.handleChange}/>
          <label htmlFor="fevent">Type arrangement</label>
          <textarea id="fevent" type="textarea" name="info" value={this.state.info} onChange={this.handleChange}></textarea>
          {/* <label htmlFor="fdate">Dato</label>
           <input id="fdate" type="date" name="date" value={this.state.date} onChange={this.handleChange}/> */}
           <label htmlFor="fdate">Dato</label>
          <div id="fdate" className={styles["daterange"]}>
            <DateRange
              onChange={this.handleRangeChange}
              ranges={[this.state]}
              locale={rdrLocales.nb}
              moveRangeOnFirstSelection={false}
            /></div>
          <input type="submit" value="Submit"/>

        </div>

      </form>
    </div>)
  }
}

export default Input;