// Реализуйте саги

import { put, call, spawn, takeEvery, select } from 'redux-saga/effects';
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';
import { getPhotos } from './api';
import { getApiKey } from '../Auth';
import { getRover } from '../RoverPhotos/RoverPhotos';

function* fetchPhotosWorker(action) {
  const apiKey = yield select(getApiKey);
  try {
    const result = yield call(
      getPhotos,
      apiKey,
      action.payload.name,
      action.payload.sol
    );
    yield put(
      fetchPhotosSuccess({
        name: action.payload.name,
        sol: action.payload.sol,
        photos: result
      })
    );
  } catch (error) {
    console.log('fetchPhotosWorker error', error);
    yield put(
      fetchPhotosFailure({
        name: action.payload.name,
        sol: action.payload.sol,
        error: error.message
      })
    );
  }
}

function* fetchPhotosWatcher() {
  yield takeEvery(fetchPhotosRequest, fetchPhotosWorker);
}

function* changeSolWorker(action) {
  const rover = yield select(getRover);

  if (!Object.keys(rover('curiosity')).includes(`${action.payload}`)) {
    yield put(fetchPhotosRequest({ name: 'curiosity', sol: action.payload }));
  }
  if (!Object.keys(rover('opportunity')).includes(`${action.payload}`)) {
    yield put(fetchPhotosRequest({ name: 'opportunity', sol: action.payload }));
  }
  if (!Object.keys(rover('spirit')).includes(`${action.payload}`)) {
    yield put(fetchPhotosRequest({ name: 'spirit', sol: action.payload }));
  }
}

function* changeSolsWatcher() {
  yield takeEvery(changeSol, changeSolWorker);
}

function* rootSaga() {
  yield spawn(changeSolsWatcher);
  yield spawn(fetchPhotosWatcher);
}

export default rootSaga;
