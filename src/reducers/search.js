import { searchRequest, searchSuccess, searchFailure } from '../actions';

const firstState = {
  load: false,
  result: [],
  error: null
};

export default (state = firstState, action) => {
  switch (action.type) {
    case searchRequest.toString():
      return {
        ...state,
        load: true,
        result: []
      };

    case searchSuccess.toString():
      return {
        ...state,
        load: false,
        result: action.payload
      };

    case searchFailure.toString():
      return {
        ...state,
        load: false,
        error: action.payload
      };

    default:
      return state;
  }
};
