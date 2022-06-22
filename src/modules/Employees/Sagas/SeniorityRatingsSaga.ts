import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchSeniorityRatings } from "../../../services/api";

import { fetchSeniorityRatingsFailure, fetchSeniorityRatingsSuccess } from "../Actions/FetchSeniorityRatings";
import { FETCH_SENIORITY_RATINGS } from "../Actions/FetchSeniorityRatings/actions.constants";

/*
  Worker Saga: Fired on FETCH_SENIORITY_RATINGS action
*/
function* fetchSeniorityRatingsSaga(): any {
  try {
    const response = yield call(fetchSeniorityRatings);
    yield put(
      fetchSeniorityRatingsSuccess({
        seniority_ratings: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchSeniorityRatingsFailure({
        error: e?.message,
      })
    );
  } finally {

  }
}

/*
  Starts worker saga on latest dispatched `FETCH_SENIORITY_RATINGS` action.
  Allows concurrent increments.
*/
function* seniorityRatingsSaga() {
  yield all([takeLatest(FETCH_SENIORITY_RATINGS, fetchSeniorityRatingsSaga)]);
}

export { seniorityRatingsSaga };