import React, { Component } from 'react';

import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';

class FooterPartnerSide extends Component {
  render() {
    return (
      <div className="FooterPartnere">
        <div class="grid_footer2 ">
          <div id="map">
            <div className="maps">
              <div className="googlemaps_canvas">
                <iframe
                  title="googlemaps"
                  height="250"
                  width="300"
                  id="googlemaps_canvas"
                  src="https://maps.google.com/maps?q=snertingdale&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </div>
            </div>
          </div>
          <div class="grid_kontakt">
            <h4 class="kontakt_footer"> Kontakt </h4>
            <p class="p_footer"> Lurer du på noe om kulturhuset ? </p>
            <p class="p_footer"> Send mail til dagligleder @kulturhuset.no </p>
            <h4 class="kontakt_footer"> Besøksadresse </h4>
            <p class="p_footer"> Ødegårdvegen 126 </p>
            <p class="p_footer"> 2121 Bergen </p>
          </div>
          <div class="grid_social">
            <a>
              <img
                id="instagram"
                src={instagram}
                alt="Bilde er logo til instagram"
              />
            </a>
            <br />
            <a>
              <img
                ClassName="facebook"
                src={facebook}
                alt="Bildet er logo til facebook"
              />
            </a>
          </div>
        </div>
        <div className="p_copyright">
          <p>
            <a href="/hvemharLaget">
              <span className="span_copyright_white"> Utviklet av </span> @ 2019
              NTNU studenter
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default FooterPartnerSide;
