import {
    FETCH_SENIORITY_RATINGS,
    FETCH_SENIORITY_RATINGS_COMPLETE,
    FETCH_SENIORITY_RATINGS_FAILED,
  } from "./actions.constants";

  import {
    FetchSeniorityRatingsRequest,
    FetchSeniorityRatingsSuccess,
    FetchSeniorityRatingsSuccessPayload,
    FetchSeniorityRatingsFailure,
    FetchSeniorityRatingsFailurePayload
  } from "./actions.types";
  
  export const fetchSeniorityRatingsRequest = (): FetchSeniorityRatingsRequest => ({
    type: FETCH_SENIORITY_RATINGS
  });
  
  export const fetchSeniorityRatingsSuccess = (
    payload: FetchSeniorityRatingsSuccessPayload
  ): FetchSeniorityRatingsSuccess => ({
    type: FETCH_SENIORITY_RATINGS_COMPLETE,
    payload,
  });
  
  export const fetchSeniorityRatingsFailure = (
    payload: FetchSeniorityRatingsFailurePayload
  ): FetchSeniorityRatingsFailure => ({
    type: FETCH_SENIORITY_RATINGS_FAILED,
    payload,
  });