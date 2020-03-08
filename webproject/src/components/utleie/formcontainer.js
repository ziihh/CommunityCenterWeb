import React from 'react';
import Input from './forminput.js';
import UtleieInfo from './utleieinfo.js';
import styles from '../../css/utleie.module.css';
import HeaderBody from '../headerBody';
import ScrollTopButton from '../topbutton/topButton';
import Footer from '../footer/footer';
import community_center from '../../images/community_center.jpg';

class FormContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderBody />
        <div className={styles['bookingimage']}>
          {' '}
          <img src={community_center} height="250px" width="80%" />
        </div>
        <div className={styles['booking-container']}>
          <UtleieInfo />
          <Input />
        </div>{' '}
        <ScrollTopButton />
        <Footer />
      </React.Fragment>
    );
  }
}
export default FormContainer;
