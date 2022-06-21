import { all, call, put, takeLatest } from "redux-saga/effects";
import { updateEmployee } from "../../../services/api";

import { updateEmployeeFailure, updateEmployeeSuccess } from "../Actions/UpdateEmployee";
import { UPDATE_EMPLOYEE } from "../Actions/UpdateEmployee/actions.constants";
import { UpdateEmployeeRequest } from "../Actions/UpdateEmployee/actions.types";

/*
  Worker Saga: Fired on UPDATE_EMPLOYEE action
*/
function* updateEmployeeSaga(updateEmployeeRequest: UpdateEmployeeRequest): any {
  try {
    const response = yield call(updateEmployee, updateEmployeeRequest.payload.employeeId);
    yield put(
      updateEmployeeSuccess({
        response: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      updateEmployeeFailure({
        error: e?.message,
      })
    );
  } finally {

  }
}

/*
  Starts worker saga on latest dispatched `UPDATE_EMPLOYEE` action.
  Allows concurrent increments.
*/
function* updateEmployeeSagaWatcher() {
  yield all([takeLatest(UPDATE_EMPLOYEE, updateEmployeeSaga)]);
}

export { updateEmployeeSagaWatcher as updateEmployeeSaga };