import React, { Component } from 'react';
import styles from '../../css/singleevent.module.css';
import partner from '../../images/partner.jpg';

class EventPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles['eventimage']}>
          <img
            className={styles['eventimg']}
            src={this.props.image}
            alt={this.props.imagealt}
          />{' '}
        </div>{' '}
        <div className={styles['event-description']}>
          <h1>
            {' '}
            Praktisk info om {this.props.title} {this.props.date}{' '}
          </h1>{' '}
          <p className={styles['p_generelinfo']}> {this.props.description} </p>{' '}
        </div>{' '}
        <div className={styles['event-container']}>
          <div className={styles['partner-container']}>
            <h2> Partnere </h2>{' '}
            <img
              className={styles['partner-logo']}
              src={partner}
              alt="Bildet er av partner logo"
            />
            <p className={styles['partner-info']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Sit
              amet nisl purus in mollis nunc.At augue eget arcu dictum varius
              duis.Maecenas volutpat blandit aliquam etiam erat velit
              scelerisque in dictum.Ultricies mi quis hendrerit dolor magna.Nisl
              pretium fusce id velit ut.Aliquam vestibulum morbi blandit cursus
              risus at.In fermentum et sollicitudin ac orci phasellus.Diam
              volutpat commodo sed egestas.Non enim praesent elementum
              facilisis.{' '}
            </p>
          </div>{' '}
          <div className={styles['ticket-container']}>
            <div className="ticker-buy">
              <h2>
                <div id="tickets"> Kjøp dine billetter </div>{' '}
              </h2>{' '}
            </div>
            <div className="container_form">
              <form action="/action_page.php" />
              <div className={styles['inputs']}>
                <label for="fname"> Fullt navn * </label>{' '}
                <input
                  type="text"
                  className="fnavn"
                  name="fulltnavn"
                  placeholder="Ola Nordmann"
                />
                <label for="epost"> E - post * </label>{' '}
                <input
                  type="text"
                  className="epost"
                  name="epost"
                  placeholder="Din e-postadresse"
                />
                <label for="Telefonnummer"> Telefonnummer * </label>{' '}
                <input
                  type="text"
                  className="emne"
                  name="emne"
                  placeholder="Telefonnummer"
                />
                <label for="Antall voksne over 18 år *">
                  Antall voksne over 18 år *
                </label>{' '}
                <select className="Antall_voksne">
                  <option value="0"> 0 </option> <option value="1"> 1 </option>{' '}
                  <option value="2"> 2 </option> <option value="3"> 3 </option>{' '}
                  <option value="4"> 4 </option> <option value="5"> 5 </option>{' '}
                  <option value="6"> 6 </option> <option value="7"> 7 </option>{' '}
                </select>
                <label for="Antall voksne over 18 år *">
                  Antall barn under 18 år *
                </label>{' '}
                <select className="Antall_voksne">
                  <option value="0"> 0 </option> <option value="1"> 1 </option>{' '}
                  <option value="2"> 2 </option> <option value="3"> 3 </option>{' '}
                  <option value="4"> 4 </option> <option value="5"> 5 </option>{' '}
                  <option value="6"> 6 </option> <option value="7"> 7 </option>{' '}
                </select>
                <input type="submit" value="Gå til kassen" />
              </div>{' '}
              <form />
            </div>{' '}
          </div>
        </div>{' '}
      </React.Fragment>
    );
  }
}

export default EventPage;
