import { all, call, put, takeLatest } from "redux-saga/effects";
import { createEmployee } from "../../../services/api";

import { createEmployeeFailure, createEmployeeSuccess } from "../Actions/CreateEmployee";
import { CREATE_EMPLOYEE } from "../Actions/CreateEmployee/actions.constants";
import { CreateEmployeeRequest } from "../Actions/CreateEmployee/actions.types";

/*
  Worker Saga: Fired on CREATE_EMPLOYEE action
*/
function* createEmployeeSaga(createEmployeeRequest: CreateEmployeeRequest): any {
  try {
    const response = yield call(createEmployee, createEmployeeRequest.payload.employee);
    yield put(
      createEmployeeSuccess({
        response: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      createEmployeeFailure({
        error: e?.message,
      })
    );
  } finally {

  }
}

/*
  Starts worker saga on latest dispatched `CREATE_EMPLOYEE` action.
  Allows concurrent increments.
*/
function* createEmployeeSagaWatcher() {
  yield all([takeLatest(CREATE_EMPLOYEE, createEmployeeSaga)]);
}

export { createEmployeeSagaWatcher as createEmployeeSaga };