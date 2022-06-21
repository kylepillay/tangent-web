import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchEmployees } from "../../../services/api";

import { fetchEmployeesFailure, fetchEmployeesSuccess } from "../Actions/FetchEmployees";
import { FETCH_EMPLOYEES } from "../Actions/FetchEmployees/actions.constants";

/*
  Worker Saga: Fired on FETCH_EMPLOYEES action
*/
function* fetchEmployeesSaga(): any {
  try {
    const response = yield call(fetchEmployees);

    yield put(
      fetchEmployeesSuccess({
        employees: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchEmployeesFailure({
        error: e?.message,
      })
    );
  } finally {

  }
}

/*
  Starts worker saga on latest dispatched `FETCH_EMPLOYEES` action.
  Allows concurrent increments.
*/
function* employeesSaga() {
  yield all([takeLatest(FETCH_EMPLOYEES, fetchEmployeesSaga)]);
}

export { employeesSaga };