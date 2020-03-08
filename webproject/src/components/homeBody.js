import React from 'react';
import community from '../images/community.jpg';
import AboutUs from './home/aboutUs.js';
import InformationContainers from './home/infoContainers.js';
import ScrollTopButton from './topbutton/topButton.js';
import HeaderBody from './headerBody.js';
import KommendeEvents from './kommendeEvents/kommendeEvents.js';
import Footer from './footer/footer';

class HomeBody extends React.Component {
  render() {
    return (
      <div className="homeBody">
        <HeaderBody />
        <div className="homePageBanner">
          <img src={community} id="homeBanner" alt="prestgarn house." />
        </div>
        <AboutUs />
        <InformationContainers />
        <KommendeEvents />
        <ScrollTopButton />
        <Footer />
      </div>
    );
  }
}

export default HomeBody;
