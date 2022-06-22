import {
    FETCH_SENIORITY_RATINGS,
    FETCH_SENIORITY_RATINGS_COMPLETE,
    FETCH_SENIORITY_RATINGS_FAILED,
  } from "../Actions/FetchSeniorityRatings/actions.constants";
  
  import { SeniorityRatingsActions, SeniorityRatingsState } from "../Actions/FetchSeniorityRatings/actions.types";
  
  const initialState: SeniorityRatingsState = {
    pending: false,
    seniority_ratings: [],
    error: null,
  };
  
  export default (state = initialState, action: SeniorityRatingsActions): SeniorityRatingsState => {
    switch (action.type) {
      case FETCH_SENIORITY_RATINGS:
        return {
          ...state,
          pending: true,
        };
      case FETCH_SENIORITY_RATINGS_COMPLETE:
        return {
          ...state,
          pending: false,
          seniority_ratings: action.payload.seniority_ratings,
          error: null,
        };
      case FETCH_SENIORITY_RATINGS_FAILED:
        return {
          ...state,
          pending: false,
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };