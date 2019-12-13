import {
  FETCH_ADVICE_START,
  FETCH_ADVICE_SUCCESS,
  FETCH_ADVICE_FAILURE
} from '../actions';

const initialState = {
  advice: null,
  isFetching: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADVICE_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_ADVICE_SUCCESS:
      return {
        ...state,
        advice: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_ADVICE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;