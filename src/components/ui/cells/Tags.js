import React from 'react';

let { Component } = React;

class Tags extends Component{
  constructor() {
    super();
  }

  renderTags() {
    if (this.props.tagsList) {
      return this.props.tagsList.map( (tag, index) => {
        let classNme = "devicons devicons-"
          , lowerCasedTag = tag.toLowerCase();

        return (
            <span key={ 'tag' + index }
                  id={ (lowerCasedTag + index) }
                  className={ (classNme + lowerCasedTag) }>
            </span>
          );
      });
    }
  }

  render() {
    return (
      <div>
        {this.renderTags()}
      </div>
    );
  }
}

Tags.defaultProps = {
};

export default Tags;
