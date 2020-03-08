import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/utleie.module.css';

class UtleieInfo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles['bookingtext']}>
          <h2> Om kulturhuset </h2>{' '}
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Risus
            quis varius quam quisque id diam vel quam.Amet massa vitae tortor
            condimentum lacinia.Consectetur adipiscing elit pellentesque
            habitant morbi tristique.Ut diam quam nulla porttitor.Nec feugiat in
            fermentum posuere urna nec tincidunt.Quis hendrerit dolor magna eget
            est lorem.Nunc pulvinar sapien et ligula ullamcorper malesuada
            proin.Nulla aliquet enim tortor at.Mi tempus imperdiet nulla
            malesuada pellentesque.Blandit libero volutpat sed cras ornare arcu
            dui vivamus arcu.Eget sit amet tellus cras adipiscing enim eu
            turpis.Amet mauris commodo quis imperdiet.Neque ornare aenean
            euismod elementum nisi quis.Viverra nibh cras pulvinar mattis nunc
            sed blandit.Egestas tellus rutrum tellus pellentesque.Augue neque
            gravida in fermentum.Id donec ultrices tincidunt arcu non sodales.{' '}
          </p>{' '}
        </div>{' '}
      </React.Fragment>
    );
  }
}
export default UtleieInfo;
