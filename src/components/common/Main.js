import React from 'react';
import Footer from './Footer';

let { Component } = React;

class MainContent extends Component{
  renderContent() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child);
    });
  }

  render() {
    return (
      <main className="mdl-layout__content">
        {this.renderContent()}

        <Footer />
      </main>
    );
  }
}

MainContent.defaultProps = {
};

export default MainContent;
