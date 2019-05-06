import { searchRequest, searchSuccess, searchFailure } from '../actions';

const firstState = {
  loading: false,
  result: [],
  error: null
};

export default (state = firstState, action) => {
  switch (action.type) {
    case searchRequest.toString():
      return {
        ...state,
        loading: true,
        result: []
      };

    case searchSuccess.toString():
      return {
        ...state,
        loading: false,
        result: action.payload
      };

    case searchFailure.toString():
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
