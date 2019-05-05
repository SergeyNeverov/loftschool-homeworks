import { createAction } from 'redux-actions';

export const showsRequest = createAction('SHOWS_REQUEST');
export const showsSuccess = createAction('SHOWS_SUCCESS');
export const showsFailure = createAction('SHOWS_FAILURE');

export const searchRequest = createAction('SEARCH_REQUEST');
export const searchSuccess = createAction('SEARCH_SUCCESS');
export const searchFailure = createAction('SEARCH_FAILURE');
