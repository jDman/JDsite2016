import React from 'react';

import { IndexLink, Link } from 'react-router';

let { Component } = React;

class Navigation extends Component{
  render() {
    return (
      <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
          <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
              <IndexLink className="mdl-navigation__link is-active" to="/">Portfolio</IndexLink>
              <Link className="mdl-navigation__link" to="/about">About</Link>
          </nav>
      </div>
    );
  }
}

Navigation.defaultProps = {
};

export default Navigation;
