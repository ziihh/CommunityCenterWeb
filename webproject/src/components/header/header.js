import React from 'react';
import logo from '../../images/logo.png';
import '../../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
