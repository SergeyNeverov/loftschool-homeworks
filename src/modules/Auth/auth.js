// Реализуйте редьюсер

import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { addKey } from './actions';

const apiKey = handleActions(
  {
    [addKey]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  apiKey
});

export const getIsAuthorized = state => state.auth.apiKey !== null;
export const getApiKey = state => state.auth.apiKey;
