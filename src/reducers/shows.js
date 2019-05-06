import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { showsRequest, showsSuccess, showsFailure } from '../actions';

const loading = handleActions(
  {
    [showsRequest]: () => true,
    [showsSuccess]: () => false,
    [showsFailure]: () => false
  },
  false
);

const showData = handleActions(
  {
    [showsRequest]: () => [],
    [showsSuccess]: (state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [showsRequest]: () => null,
    [showsSuccess]: () => null,
    [showsFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  loading,
  showData,
  error
});
