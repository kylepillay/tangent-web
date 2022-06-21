import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchEmployee } from "../../../services/api";

import { fetchEmployeeFailure, fetchEmployeeSuccess } from "../Actions/FetchEmployee";
import { FETCH_EMPLOYEE } from "../Actions/FetchEmployee/actions.constants";
import { FetchEmployeeRequest } from "../Actions/FetchEmployee/actions.types";

/*
  Worker Saga: Fired on FETCH_EMPLOYEE action
*/
function* fetchEmployeeSaga(fetchEmployeeRequest: FetchEmployeeRequest): any {
  try {
    const response = yield call(fetchEmployee, fetchEmployeeRequest.payload.employeeId);
    yield put(
      fetchEmployeeSuccess({
        employee: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchEmployeeFailure({
        error: e?.message,
      })
    );
  } finally {

  }
}

/*
  Starts worker saga on latest dispatched `FETCH_EMPLOYEE` action.
  Allows concurrent increments.
*/
function* employeeSaga() {
  yield all([takeLatest(FETCH_EMPLOYEE, fetchEmployeeSaga)]);
}

export { employeeSaga };