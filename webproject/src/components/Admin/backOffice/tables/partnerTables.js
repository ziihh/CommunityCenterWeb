import React, { Component } from 'react';
import styles from '../../../../css/backOfficeCSS/tablesCSS/partnertable.module.css';
import { postData } from '../../../../sendAPIRequest';
import PartnerPreview from './partnerpreview';
class PartnerTables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partnerId: '',
      title: '',
      image: '',
      description: '',
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.myFunction = this.myFunction.bind(this);
    this.setImageState = this.setImageState.bind(this);
  }

  myFunction() {
    var partnerTables = document.getElementById('partnerTables');
    partnerTables.style.display = 'none';
  }
  handleChange(partner) {
    this.setState({
      [partner.target.name]: partner.target.value,
    });
  }

  setImageState(blob) {
    this.setState({
      image: blob,
    });
  }

  onLoadEnded(callback, reader) {
    return function() {
      callback(reader.result);
    };
  }

  handleImageChange(callback) {
    var file = document.getElementById('partnerimage').files[0];
    var reader = new FileReader();

    reader.onloadend = this.onLoadEnded(callback, reader);
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleSubmit(data) {
    postData(data, 'addPartner');
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles['partnerTables']} id="partnerTables">
          <a
            href="javascript:void(0);"
            id="icon"
            className="closingIcon"
            onClick={this.myFunction}
          >
            <i className="fa fa-times" />
          </a>
          <h2 id={styles['partnerHeading']}>Oppdater Partner siden </h2>
          <div className={styles['inputs']}>
            <label htmlFor="fileToUpload"> Last opp et banner bilde </label>
            <input
              name="fileToUpload"
              id="fileToUpload"
              id="partnerimage"
              type="file"
              name="image"
              onChange={e => this.handleImageChange(this.setImageState)}
            />
            <label htmlFor="title"> Tittel </label>
            <input
              type="text"
              name="title"
              onChange={e => this.handleChange(e)}
            />
            <label htmlFor="description"> Om partneren </label>
            <textarea name="description" onChange={e => this.handleChange(e)} />
            <label htmlFor="submit" name="submit" />
            <input type="submit" onClick={e => this.handleSubmit(this.state)} />
          </div>
        </div>
        <PartnerPreview
          title={this.state.title}
          image={this.state.image}
          description={this.state.description}
        />
      </React.Fragment>
    );
  }
}

export default PartnerTables;
