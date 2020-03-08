import React, { Component } from 'react';
import styles from '../../../../css/partner.module.css';
class PartnerPreview extends Component {
  constructor(props) {
    super(props);
  }

  handleChange;

  render() {
    return (
      <React.Fragment>
        <h1> Forhåndsvisning av partner siden </h1>
        <div className="preview-box">
          <img src={this.props.image} />
        </div>
        <p id="textpartner">
          <span className="større"> {this.props.title} </span>&nbsp;
          {this.props.description}
        </p>
      </React.Fragment>
    );
  }
}

export default PartnerPreview;
