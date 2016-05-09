import React from 'react';
import LeadCell from './cells/LeadCell';
import Cell from './cells/Cell';

import AppStore from '../../stores/app-store';

let { Component } = React;

class Portfolio extends Component{
  constructor() {
    super();

    this.state = {
      projectList: AppStore.getProjects()
    }
  }

  componentWillMount() {
    AppStore.addChangeListener(this.handleState.bind(this));
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.handleState);
  }

  handleState() {
    this.setState({
      projectList: AppStore.getProjects()
    });
  }

  renderProjects(projects) {
    return projects.map(project => {
      return project.lead ?
        <LeadCell key={project.id} item={project} /> :
        <Cell key={project.id} item={project} />
    });
  }

  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
        {this.renderProjects(this.state.projectList)}
      </div>
    );
  }
}

Portfolio.defaultProps = {
};

export default Portfolio;
