import React from 'react';
import Navigation from './Navigation';

let { Component } = React;

class Header extends Component{
  render() {
    return (
      <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
        <div aria-expanded="false"
             role="button"
             tabindex="0"
             className="mdl-layout__drawer-button mdl-layout--small-screen-only">
          <i className="material-icons"></i></div>

        <div className="mdl-layout__header-row portfolio-logo-row">
            <span className="mdl-layout__title">
                <div className="portfolio-logo"></div>

                <span className="mdl-layout__title">Jay's portfolio website</span>
            </span>
        </div>

        <Navigation />
      </header>
    );
  }
}

Header.defaultProps = {
};

export default Header;
