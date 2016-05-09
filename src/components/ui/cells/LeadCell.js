import React from 'react';
import Tags from './Tags';
import Contact from '../Contact';

let { Component } = React;

class LeadCell extends Component{
  render() {
    let imgSrc = '../../../' + this.props.item.img_src_lead;

    return (
      <div className="mdl-grid mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet
        mdl-card mdl-shadow--4dp">
          <div className="mdl-card__media mdl-cell mdl-cell--12-col-tablet
            lead-img"
               style={{backgroundImage: 'url('+imgSrc+')'}}>
          </div>
          <div className="mdl-cell mdl-cell--8-col">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--6-col">
                <h2 className="mdl-card__title-text lead-header-title">
                  {this.props.item.title}

                  <Tags tagsList={this.props.item.tags} />
                </h2>
              </div>

              <div className="mdl-cell mdl-cell--6-col lead-contact-container">
                <Contact />
              </div>
            </div>

            <div className="mdl-card__supporting-text padding-top">
              <div className="mdl-grid">
                <span>Latest project</span>
              </div>
            </div>

            <div className="mdl-card__supporting-text no-left-padding">
                <p>
                  {this.props.item.description}
                </p>

                <div className="lead-buttons mdl-grid">
                  <div className="mdl-cell mdl-cell--6-col">
                    <a className="mdl-button action-button"
                       href={this.props.item.url}
                       data-upgraded=",MaterialButton,MaterialRipple"
                       target="_blank">
                       Enter

                       <span className="mdl-button__ripple-container">
                         <span className="mdl-ripple"></span>
                       </span>
                    </a>
                  </div>

                  <div className="mdl-cell mdl-cell--6-col">
                    <a className="mdl-button mdl-button--colored action-button"
                       href="https://github.com/jDman"
                       data-upgraded=",MaterialButton,MaterialRipple"
                       target="_blank">
                       Github

                       <span className="devicons devicons-github"></span>

                       <span className="mdl-button__ripple-container">
                         <span className="mdl-ripple"></span>
                       </span>
                    </a>
                  </div>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

LeadCell.defaultProps = {

};

export default LeadCell;
