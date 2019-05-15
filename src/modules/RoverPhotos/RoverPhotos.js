// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом

import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import path from 'ramda/src/path';

import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';

const sol = handleActions(
  {
    [changeSol]: (state, action) => ({ ...state, current: action.payload })
  },
  {
    current: 1,
    min: 1,
    max: 100
  }
);

const photos = handleActions(
  {
    [fetchPhotosRequest]: (state, action) => {
      const rover = state[action.payload.name];
      return {
        ...state,
        [action.payload.name]: {
          ...rover,
          [action.payload.sol]: {
            isLoading: true,
            isLoaded: false,
            photos: []
          }
        }
      };
    },

    [fetchPhotosSuccess]: (state, action) => {
      const rover = state[action.payload.name];
      return {
        ...state,
        [action.payload.name]: {
          ...rover,
          [action.payload.sol]: {
            isLoading: false,
            isLoaded: true,
            photos: []
          }
        }
      };
    },

    [fetchPhotosFailure]: (state, action) => {
      const rover = state[action.payload.name];
      return {
        ...state,
        [action.payload.name]: {
          ...rover,
          [action.payload.sol]: {
            isLoading: false,
            isLoaded: true,
            error: action.payload.error
          }
        }
      };
    }
  },
  {
    curiosity: {},
    opportunity: {},
    spirit: {}
  }
);

export default combineReducers({
  sol,
  photos
});

export const getSol = state => state.roverPhotos.sol;
export const getPhotos = state => state.roverPhotos.photos;
export const getRover = state => rover => state.roverPhotos.photos[rover];

export const getErrorCurry = state => rover => sol =>
  path([rover, `${sol}`, 'error']);
export const getIsLoadedCurry = state => rover => sol =>
  path([rover, `${sol}`, 'isLoaded']);
