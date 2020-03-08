import React, { Component } from 'react';
import '../../css/footer.css';
import styles from '../../css/footer.module.css';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import partner from '../../images/partner.jpg';
import HvemharLaget from '../hvemharLaget/hvemharLaget';
import { getData } from '../../sendAPIRequest';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    return getData('footer')
      .then(result => {
        if (result.statuscode === 200) {
          return result.data;
        }
      })
      .then(data => {
        this.setState({
          items: data,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="FooterPartnere">
          <h3 className="HeaderPartnere"> Partnere </h3>
          <div className="grid_footer">
            <div className="container_partnerLogo">
              <a href="/partner">
                <img
                  id="partnerLogo"
                  src={partner}
                  alt="Den blinde ku sin logo."
                />
              </a>{' '}
            </div>{' '}
            <div className="container_partnerLogo">
              <a href="/partner">
                <img
                  id="partnerLogo"
                  src={partner}
                  alt="Den blinde ku sin logo."
                />
              </a>{' '}
            </div>{' '}
            <div className="container_partnerLogo">
              <a href="/partner">
                <img
                  id="partnerLogo"
                  src={partner}
                  alt="Den blinde ku sin logo."
                />
              </a>{' '}
            </div>{' '}
            <div className="container_partnerLogo">
              <a href="/partner">
                <img
                  id="partnerLogo"
                  src={partner}
                  alt="Den blinde ku sin logo."
                />
              </a>{' '}
            </div>{' '}
            <div className="container_partnerLogo">
              <a href="/partner">
                <img
                  id="partnerLogo"
                  src={partner}
                  alt="Den blinde ku sin logo."
                />
              </a>{' '}
            </div>{' '}
            <div className="container_partnerLogo">
              <a href="/partner">
                <img
                  id="partnerLogo"
                  src={partner}
                  alt="Den blinde ku sin logo."
                />
              </a>{' '}
            </div>{' '}
            <div className="container_partnerLogo">
              <a href="/partner">
                <img
                  id="partnerLogo"
                  src={partner}
                  alt="Den blinde ku sin logo."
                />
              </a>{' '}
            </div>{' '}
            <div className="container_partnerLogo">
              <a href="/partner">
                <img
                  id="partnerLogo"
                  src={partner}
                  alt="Den blinde ku sin logo."
                />
              </a>{' '}
            </div>{' '}
          </div>
          <button type="button" className="button_footer">
            Bli partner ?
          </button>
          <div className="grid_footer2 ">
            <div className="grid_social">
              <div ClassName="grid_imgfooter">
                <a href="https://www.instagram.com/praestgarden/">
                  <img
                    id="instagram"
                    src={instagram}
                    alt="Bilde er logo til instagram"
                  />
                </a>{' '}
              </div>{' '}
              <div ClassName="grid_imgfooter">
                <a href="https://www.facebook.com/snertingdalprestegaard/">
                  <img
                    ClassName="facebook"
                    src={facebook}
                    alt="Bildet er logo til facebook"
                  />
                </a>{' '}
              </div>{' '}
            </div>{' '}
            <div className="grid_kontakt">
              <div>
                {' '}
                {this.state.items.map(x => (
                  <div key={x.footerId} className={styles['textfooter2']}>
                    <p id="textfooter2">
                      <h3> {x.title} </h3>{' '}
                    </p>{' '}
                    <p id="textfooter2"> {x.description} </p>{' '}
                  </div>
                ))}{' '}
              </div>{' '}
            </div>{' '}
            <div className="map">
              <div className="maps">
                <div className="googlemaps_canvas">
                  <iframe
                    title="googlemaps"
                    height="250"
                    width="300"
                    id="googlemaps_canvas"
                    src="https://maps.google.com/maps?q=snertingdale&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  />
                </div>{' '}
              </div>

              <div />
            </div>{' '}
          </div>
          <div className="p_copyright">
            <p>
              <a href="/hvemharLaget">
                <span className="span_copyright_white"> Utviklet av </span> @
                2019 NTNU studenter{' '}
              </a>{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </React.Fragment>
    );
  }
}

export default Footer;
