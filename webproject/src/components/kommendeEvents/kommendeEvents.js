import React, { Component } from 'react';
import '../../css/sommerfest.css';

import advent from '../../images/advent.jpg';
import artist from '../../images/artist.jpg';

class KommendeEvents extends Component {
  render() {
    return (
      <div className="kommende_events">
        <h2 className="arrangementer"> Kommende arrangementer </h2>{' '}
        <div className="grid_upcommingevent">
          <div className="container_event">
            <div className="event1">
              <img
                className="eventbilde"
                src={artist}
                alt="Bildet viser artist"
              />
              <h3 className="info_event"> Musikker på kulturhuset </h3>{' '}
              <p className="info_event">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut at
                tristique nibh.Vestibulum vel erat vehicula, dapibus est sed,
                eleifend felis.Morbi vel semper dolor, et luctus felis.Cras
                malesuada mattis metus id ornare.Phasellus auctor ligula
                ultricies nisl dapibus elementum vel quis magna.Vivamus urna
                sapien, venenatis a orci eu, facilisis aliquet ante.Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.Phasellus auctor lorem vitae libero ultrices, eu
                imperdiet risus venenatis.Ut sagittis ultricies velit et
                sagittis.Aliquam auctor efficitur dui sed laoreet.Integer justo
                metus, pretium id erat ac, congue mattis mauris.{' '}
              </p>{' '}
              <h4 className="info_event"> Torsdag 22. november kl .12 .00 </h4>{' '}
              <div className="info-button">
                <button type="button" className="button_event">
                  Mer informasjon{' '}
                </button>{' '}
              </div>{' '}
            </div>{' '}
          </div>
          <div className="container_event">
            <div className="event2">
              <img
                className="eventbilde"
                src={advent}
                alt="Bildet er av præstgar'n på vinterstid"
              />
              <h3 className="info_event"> Advent og søndagskos </h3>{' '}
              <p className="info_event">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut at
                tristique nibh.Vestibulum vel erat vehicula, dapibus est sed,
                eleifend felis.Morbi vel semper dolor, et luctus felis.Cras
                malesuada mattis metus id ornare.Phasellus auctor ligula
                ultricies nisl dapibus elementum vel quis magna.Vivamus urna
                sapien, venenatis a orci eu, facilisis aliquet ante.Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.Phasellus auctor lorem vitae libero ultrices, eu
                imperdiet risus venenatis.Ut sagittis ultricies velit et
                sagittis.Aliquam auctor efficitur dui sed laoreet.Integer justo
                metus, pretium id erat ac, congue mattis mauris.{' '}
              </p>
              <h4 className="info_event"> Søndag 2. desember kl .13: 00 </h4>{' '}
              <div className="info-button">
                <button type="button" className="button_event">
                  Mer informasjon{' '}
                </button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>
    );
  }
}

export default KommendeEvents;
