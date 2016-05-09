import React from 'react';
import Contact from './Contact';

let { Component } = React;

class About extends Component{
  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">
                Please allow me to introduce myself...
              </h2>
          </div>

          <div className="about-title-image mdl-card__media">
            {
              //background image for about page title section
            }
          </div>

          <div className="mdl-grid portfolio-copy">
              <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">
                I am a man...
              </h3>

              <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text
                no-padding">
                <p>
                  ... who loves modular, maintainable code.
                </p>

                <p>
                  Blending the latest technologies to mold modern, snappy
                  user interfaces is the nature of my game.
                </p>

                <p>
                  I have been on the front-end scene for over 5 exciting years.
                  Seeing the landscape of web software development change.
                </p>

                <p>
                  Pleased to meet you!
                </p>
              </div>

              <div className="about-personal mdl-cell mdl-cell--4-col
                mdl-card__supporting-text no-padding">
                <div className="avatar-image mdl-cell mdl-cell--12-col
                  mdl-card__supporting-text no-padding">
                  {
                    //avatar image
                  }
                </div>

                <div className="mdl-cell mdl-cell--12-col
                  mdl-card__supporting-text no-padding content-center">
                  <Contact />
                </div>
              </div>

              <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">
                So what can I do for you exactly?
              </h3>

              <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text
                no-padding">
                  <p>
                    If you're looking to solve problems for your user interface
                    using the latest development tools, whether it's using a
                    javascript framework like AngularJS or build tools like
                    Gulp or Webpack, get in touch!
                  </p>

                  <h4>Skills</h4>
                    <ul className="about-skills">
                      <li>
                        <span className="devicons devicons-javascript"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-angular"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-backbone"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-bootstrap"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-sass"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-css3"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-html5"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-grunt"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-gulp"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-npm"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-bower"></span>
                      </li>

                      <li>
                        <span className="devicons devicons-jira"></span>
                      </li>

                      <li>
                        ... and more!
                      </li>
                    </ul>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

About.defaultProps = {
};

export default About;
