import {
    FETCH_SENIORITY_RATINGS,
    FETCH_SENIORITY_RATINGS_COMPLETE,
    FETCH_SENIORITY_RATINGS_FAILED,
  } from "./actions.constants";

  export interface ISeniorityRating {
    id: string;
    title: string;
  }
  
  export interface SeniorityRatingsState {
    pending: boolean;
    seniority_ratings: ISeniorityRating[];
    error: string | null;
  }
  


  export interface FetchSeniorityRatingsSuccessPayload {
    seniority_ratings: ISeniorityRating[];
  }
  
  export interface FetchSeniorityRatingsFailurePayload {
    error: string;
  }
  
  export interface FetchSeniorityRatingsRequest {
    type: typeof FETCH_SENIORITY_RATINGS;
  }
  
  export type FetchSeniorityRatingsSuccess = {
    type: typeof FETCH_SENIORITY_RATINGS_COMPLETE;
    payload: FetchSeniorityRatingsSuccessPayload;
  };
  
  export type FetchSeniorityRatingsFailure = {
    type: typeof FETCH_SENIORITY_RATINGS_FAILED;
    payload: FetchSeniorityRatingsFailurePayload;
  };
  
  export type SeniorityRatingsActions =
    | FetchSeniorityRatingsRequest
    | FetchSeniorityRatingsSuccess
    | FetchSeniorityRatingsFailure;