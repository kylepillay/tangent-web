import { all, call, put, takeLatest } from "redux-saga/effects";
import { deleteEmployee } from "../../../services/api";

import { deleteEmployeeFailure, deleteEmployeeSuccess } from "../Actions/DeleteEmployee";
import { DELETE_EMPLOYEE } from "../Actions/DeleteEmployee/actions.constants";
import { DeleteEmployeeRequest } from "../Actions/DeleteEmployee/actions.types";

/*
  Worker Saga: Fired on DELETE_EMPLOYEE action
*/
function* deleteEmployeeSaga(deleteEmployeeRequest: DeleteEmployeeRequest): any {
  try {
    const response = yield call(deleteEmployee, deleteEmployeeRequest.payload.employeeId);
    yield put(
      deleteEmployeeSuccess({
        response: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      deleteEmployeeFailure({
        error: e?.message,
      })
    );
  } finally {

  }
}

/*
  Starts worker saga on latest dispatched `DELETE_EMPLOYEE` action.
  Allows concurrent increments.
*/
function* deleteEmployeeSagaWatcher() {
  yield all([takeLatest(DELETE_EMPLOYEE, deleteEmployeeSaga)]);
}

export { deleteEmployeeSagaWatcher as deleteEmployeeSaga };