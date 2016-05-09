import React from 'react';

let { Component } = React;

class Contact extends Component{
  render() {
    return (
      <a href="mailto:jay@heliumdragon.com?subject=Getting in touch"
         className="mdl-button mdl-button--fab"
         title="Contact Jay via email">

         <i className="material-icons">email</i>
      </a>
    );
  }
}

Contact.defaultProps = {
};

export default Contact;
