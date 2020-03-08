import React from 'react';
import '../../css/infoContainers.css';
import { withRouter } from 'react-router-dom';

const timeLine = 'Historisk tidslinje?';
const timeLineText = 'Les den fullstendige historiske tidslinjen om kulturhus';
const contactBox = 'Kontakt oss';
const address = 'Besøksadresse: Ødegårdvegen 126 2121 Bergen';
const mail = 'Mail: dagligleder@kulturhus.no';
const telefone = 'Tlf: XXX XX XXX';
const partnerBox = 'Vil du være en del av kulturhus?';
const partnerText = 'Bli partner du og!';
const leieBox = 'Leie kulturhust?';
const leieText = 'Vil du leie kulturhus? Klikk under!';

class InformationContainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tidslinje: false,
      utleie: false,
      contact: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.setTidslinje = this.setTidslinje.bind(this);
    this.setFormContainer = this.setFormContainer.bind(this);
    this.setContactInformation = this.setContactInformation.bind(this);
  }
  setTidslinje() {
    this.state.tidslinje = true;
    this.handleClick();
  }
  setFormContainer() {
    this.state.utleie = true;
    this.handleClick();
  }
  setContactInformation() {
    this.state.kontakt = true;
    this.handleClick();
  }
  handleClick() {
    const { history } = this.props;
    if (this.state.tidslinje === true) {
      this.state.tidslinje = false;
      window.scroll(0, 0);
      history.push(`/TimeLine`);
    } else if (this.state.utleie === true) {
      window.scroll(0, 0);
      history.push(`/utleie`);
    } else if (this.state.kontakt === true) {
      window.scroll(0, 0);
      history.push(`/kontakt`);
    }
  }

  render() {
    return (
      <div className="grid">
        <div className="informationContainer">
          <h3> {timeLine} </h3> <p id="leieText"> {timeLineText} </p>{' '}
          <button type="button" className="button" onClick={this.setTidslinje}>
            Tidslinje{' '}
          </button>{' '}
        </div>{' '}
        <div className="informationContainer">
          <h3> {contactBox} </h3>{' '}
          <div className="info">
            <p> {address} </p> <p> {mail} </p> <p> {telefone} </p>{' '}
          </div>{' '}
          <button
            type="button"
            className="button"
            onClick={this.setContactInformation}
          >
            Mer info{' '}
          </button>{' '}
        </div>{' '}
        <div className="informationContainer">
          <h3> {partnerBox} </h3> <p> {partnerText} </p>{' '}
          <button
            type="button"
            className="button"
            onClick={this.setContactInformation}
          >
            Bli partner{' '}
          </button>{' '}
        </div>{' '}
        <div className="informationContainer">
          <h3> {leieBox} </h3> <p> {leieText} </p>{' '}
          <button
            type="button"
            className="button"
            onClick={this.setFormContainer}
          >
            Leie{' '}
          </button>{' '}
        </div>{' '}
      </div>
    );
  }
}

export default withRouter(InformationContainers);
