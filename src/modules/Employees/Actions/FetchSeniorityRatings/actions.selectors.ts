import { createSelector } from "reselect";

import { AppState } from "../../../../store/reducers";

const getPending = (state: AppState) => state.seniorityRatings.pending;

const getSeniorityRatings = (state: AppState) => state.seniorityRatings.seniority_ratings;

const getError = (state: AppState) => state.seniorityRatings.error;

export const getSeniorityRatingsSelector = createSelector(getSeniorityRatings, (seniorityRatings) => seniorityRatings);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);