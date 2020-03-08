import React, { Component } from 'react';
import boss from '../../images/boss.jpg';
import '../../css/footerPartnerSide.css';
import styles from '../../css/partner.module.css';
import HeaderBody from '../headerBody';
import ScrollTopButton from '../topbutton/topButton';
import FooterPartnerSide from '../footer/footerPartnerSide';
import { getData } from '../../sendAPIRequest';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Partner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    return getData('partner')
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
        <HeaderBody />
        <div className="sideMargin">
          <div className="wrapper">
            <div className={styles['større']}>
              <div>
                {this.state.items.map(x => (
                  <div key={x.partnerId} className={styles['partner-box']}>
                    <img src={x.image} alt={x.imagealt} />
                  </div>
                ))}
              </div>
              <div>
                {this.state.items.map(x => (
                  <div key={x.partnerId} className={styles['textpartner']}>
                    <p id="textpartner">
                      <span className="større"> {x.title} </span>&nbsp;
                      {x.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p id="textpartner">
                <span className="større"> Vårt sammarbeid </span> morbi ac quam
                et mauris varius ultrices vitae vitae dui.Mauris sapien nibh,
                suscipit et molestie id, lacinia vitae odio.Maecenas vestibulum
                quam eu nisi commodo, ultrices porttitor elit congue.Nullam
                lacinia ligula sit amet arcu scelerisque rhoncus.Donec ac
                feugiat sem.Cras hendrerit lorem quis mi mollis
                ullamcorper.Phasellus auctor ligula ultricies nisl dapibus
                elementum vel quis magna.Vivamus urna sapien, venenatis a orci
                eu, facilisis aliquet ante.Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.Phasellus
                auctor lorem vitae libero ultrices, eu imperdiet risus
                venenatis.Ut sagittis ultricies velit et sagittis.Aliquam auctor
                efficitur dui sed laoreet.Integer justo metus, pretium id erat
                ac, congue mattis mauris.
              </p>
            </div>
            <div className="kontaktogBilde">
              <div>
                <p id="textpartner">
                  <span className="større"> Kontakt oss </span> <br />
                  <p>
                    Mail: service @LuromIpsum.no <br />
                    Tlf: xxx xxx xxx
                  </p>
                  <p>
                    Adresse:
                    <br />
                    Ødegårdvegen 126 <br />
                    2121 Bergen
                  </p>
                  <p>
                    Webside: www.kulturhuset.no
                    <br />
                    <a> </a>
                  </p>
                  <br />
                </p>
                <figure id="bilde">
                  <img
                    id="bilde"
                    src={boss}
                    alt="Bildet er av etablerer Inger Rosenfeld"
                    width="390"
                  />
                  <figcaption>Bildet er av etablerer sjefen </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <ScrollTopButton />
        <FooterPartnerSide />
      </React.Fragment>
    );
  }
}

export default Partner;
