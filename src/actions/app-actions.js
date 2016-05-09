import AppConstants from '../constants';
import { dispatch } from '../dispatcher/app-dispatcher';

export default {
  orderProject(project) {
    dispatch({
      actionType: AppConstants.ORDER_PROJECT, project
    });
  }
};
