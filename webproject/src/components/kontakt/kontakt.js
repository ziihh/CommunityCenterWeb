import React, { Component } from 'react';
import contact from '../../images/contact.jpg';
import '../../css/kontakt.css';
import HeaderBody from '../headerBody';
import ScrollTopButton from '../topbutton/topButton';
import Footer from '../footer/footer';

class KontaktSide extends Component {
  render() {
    return (
      <div className="kontaktSide">
        <HeaderBody />
        <div class="sideMargin">
          <div class="wrapper">
            <img
              className="grid_img"
              src={contact}
              alt="Bildet er av den blinde ku sin logo"
              width="80%"
              height="250px"
            />
            <div id="kontaktOverskrift">
              <h1>
                Lurer du på noe ? Ta gjerne kontakt med oss, så svarer vi så
                fort som mulig!
              </h1>
              <p>
                <b> Ta gjerne turen innom : </b>
              </p>
              <p>
                Ødegårdvegen 126 <br /> 2121 Bergen
              </p>
              <p>
                <b>
                  Dersom du har spesielle spørsmål eller ønsker, send gjerne en
                  mail direkte til daglige ledere:
                </b>
              </p>
              <p>
                Lurom@ipsum.no <br />
                Lurom@ipsum.no
              </p>
            </div>
          </div>
          <div class="kontaktogKartOverskrift">
            <div>
              <h3> Daglig Drift </h3>
            </div>
            <div>
              <h3> Kart </h3>
            </div>
          </div>
          <div class="skjermaogKart">
            <div className="containerBox">
              <form action="/action_page.php" />
              <label for="fname"> Fullt navn * </label>
              <input
                type="text"
                id="fnavn"
                name="fulltnavn"
                placeholder="Ola Nordmann"
              />
              <label for="epost"> E - post * </label>
              <input
                type="text"
                id="epost"
                name="epost"
                placeholder="Din e-postadresse"
              />
              <label for="emne"> Emne * </label>
              <input type="text" id="emne" name="emne" placeholder="Emne" />
              <label for="melding"> Melding </label>
              <textarea
                id="melding"
                name="melding"
                placeholder="Skriv noe :) .."
                style={{
                  height: '200px',
                }}
              />
              <input type="submit" value="Send melding" />
              <form />
            </div>
            <div id="kart">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title="googlemaps"
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=snertingdale&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollTopButton />
        <Footer />
      </div>
    );
  }
}

export default KontaktSide;
