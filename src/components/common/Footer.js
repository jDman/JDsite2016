import React from 'react';

let { Component } = React;

class Footer extends Component{
  render() {
    return (
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__right-section">
          <div className="mdl-logo">
            <a href="https://github.com/jDman"
               className="github-brand-icon mdl-button mdl-button--fab"
               target="_blank"
               title="Jay on Github">
              <img src='../../images/github-brand.png'
                   className="material-icons"
                   alt="free github icon from http://www.swifticons.com"/>
            </a>

            <a href="https://www.linkedin.com/in/JayDavisHD"
               className="linkedin-brand-icon mdl-button mdl-button--fab"
               target="_blank"
               title="Jay on linkedIn">
              <img src='../../images/linkedin-brand.png'
                   className="material-icons"
                   alt="free linkedin icon from http://www.swifticons.com"/>
            </a>

            <span className="copyright">Jay Davis &copy;2016</span>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.defaultProps = {
};

export default Footer;
