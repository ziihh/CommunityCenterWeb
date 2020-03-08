import React, { Component } from 'react';
import '../../css/backOfficeCSS/login.css';
import logo from '../../images/logo.png';
import { postData } from '../../sendAPIRequest';
import ComponentTables from './backOffice/componentsTables';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };

    this.login = this.login.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);

    this.username = '';
    this.password = '';
  }

  /**
   * Sets the username.
   *
   * @param      {Event}  e is the event that got triggered.
   */
  setUsername(e) {
    this.username = e.target.value;
  }

  /**
   * Sets the password.
   *
   * @param      {Event}  e is the event that got triggered.
   */
  setPassword(e) {
    this.password = e.target.value;
  }

  /**
   * Sends the request to API and based upon statusCode redirects to a meningsfull page.
   */
  login() {
    postData(
      {
        username: this.username,
        password: this.password,
      },
      'login'
    ).then(result => {
      if (typeof result !== 'undefined' && result.statusCode == 200) {
        this.setState({
          redirect: true,
        });
      } else if (result.status == 400) {
        alert('Please write username and password.');
      } else if (result.status == 401) {
        alert('Wrong username or password, please check it.');
      }
    });
  }

  render() {
    if (this.state.redirect) {
      window.location = '/backOffice';
    }
    return (
      <div className="login_page">
        <div className="head">
          <img src={logo} alt="it's præstgarn logo" id="logo" />
        </div>
        <div className="form_fields" id="Body">
          <h1 id="form_heading"> Login </h1>
          <label htmlFor="username"> Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.setUsername}
            placeholder="Enter Username"
            required
          />
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.setPassword}
            placeholder="Enter Password"
            minLength="8"
            required
          />
          <input
            type="submit"
            value="login"
            className="loginButton"
            onClick={this.login}
          />
        </div>
      </div>
    );
  }
}

export default Login;
