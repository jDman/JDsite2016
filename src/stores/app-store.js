import { register } from '../dispatcher/app-dispatcher';

import AppConstants from '../constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _projects = require("json!../sources/source.json");

// const _findProject = project => {
//   return _projects.find(item => item.id === project.id);
// };

const _getProjects = () => _projects;

const _orderProject = projectList => {
  if (!projectList) return;

  projectList.forEach(project => {
    let index = _projects.indexOf(project)
      , reposition = _projects.splice(index, 1);

    reposition.map(project => {
      _projects.unshift(project);
    });
  });
};

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getProjects() {
    return _projects;
  },

  dispatcherIndex: register(function(action) {
    switch(action.actionType) {
      case AppConstants.GET_PROJECT:
        _getProjects();
        break;
      case AppConstants.ORDER_PROJECT:
        _orderProject(action.project);
    }

    AppStore.emitChange()
  })
});

export default AppStore;
