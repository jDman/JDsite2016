import React from 'react';
import Contact from './Contact';

let { Component } = React;

class About extends Component{
  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">About</h2>
          </div>

          <div className="about-title-image mdl-card__media">
            {
              //background image for about page title section
            }
          </div>

          <div className="mdl-grid portfolio-copy">
              <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">
                An introduction
              </h3>

              <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text
                no-padding">
                <p>
                  My goal is to write elegant, semantic code that creates
                  beautiful web sites and applications. These are wonderfully
                  interactive and built with mobile first in mind.
                </p>

                <p>
                  With 5 years commercial experience in the web industry,
                  I have the knowledge to make modern websites that stand out,
                  whilst being compatable across multiple browsers and devices.
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
                Irure mollit est sit labore
              </h3>

              <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text
                no-padding ">
                  <p>
                      Excepteur reprehenderit sint exercitation ipsum consequat
                      qui sit id velit elit. Velit anim eiusmod labore sit amet.
                      Voluptate voluptate irure occaecat deserunt incididunt
                      esse in. Sunt velit aliquip sunt elit ex nulla
                      reprehenderit qui ut eiusmod ipsum do. Duis veniam
                      reprehenderit laborum occaecat id proident nulla veniam.
                      Duis enim deserunt voluptate aute veniam sint pariatur
                      exercitation. Irure mollit est sit labore est deserunt
                      pariatur duis aute laboris cupidatat. Consectetur consequat
                      esse est sit veniam adipisicing ipsum enim irure.
                  </p>
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
