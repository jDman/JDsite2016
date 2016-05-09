import React from 'react';
import Tags from './Tags';

let { Component } = React;

class Cell extends Component{
  render() {
    let imgSrc = '../../../' + this.props.item.img_src;

    return (
      <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
        <div className="mdl-card__media">
          <img className="article-image" src={imgSrc} border="0" alt="" />
        </div>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">
            {this.props.item.title}
          </h2>

          <Tags tagsList={this.props.item.tags}/>
        </div>

        <div className="mdl-card__supporting-text">
          {this.props.item.description}
        </div>

        <div className="mdl-card__actions mdl-card--border">
          <div className="mdl-grid">
            <div className="cell-buttons mdl-cell mdl-cell--6-col">
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
    );
  }
}

Cell.defaultProps = {
};

export default Cell;
