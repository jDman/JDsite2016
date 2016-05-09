require('styles/App.css');

import React from 'react';
import Header from './common/Header';
import Main from './common/Main';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header has-drawer is-upgraded">
        <Header />

        <div className="mdl-layout__drawer mdl-layout--small-screen-only" aria-hidden="true">
          <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
              <a className="mdl-navigation__link is-active" href="/">Portfolio</a>
              <a className="mdl-navigation__link" href="/about">About</a>
          </nav>
        </div>

        <Main children={this.props.children} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
