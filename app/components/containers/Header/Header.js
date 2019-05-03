import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../elements/Button/index';
import Field from '../../elements/Field/index';
import './style.scss';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/signup">
            Sign Up
          </Link>
          <Button />
          {/* <Field /> */}
        </div>
      </div>
    );
  }
}

export default Header;
