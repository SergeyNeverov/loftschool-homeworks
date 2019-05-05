// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import { show } from '../api';
import { showsRequest, showsSuccess, showsFailure } from '../actions';

const showMiddleware = store => next => action => {
  if (action.type === showsRequest.toString()) {
    show(action.payload)
      .then(result => {
        store.dispatch(showsSuccess(result));
      })
      .catch(error => {
        store.dispatch(showsFailure(error));
      });
  }
  return next(action);
};

export default showMiddleware;
