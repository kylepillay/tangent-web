import { deleteSelector } from "reselect";

import { AppState } from "../../../../store/reducers";

const getPending = (state: AppState) => state.employee.pending;

const getEmployee = (state: AppState) => state.employee.employee;

const getError = (state: AppState) => state.employee.error;

export const getEmployeeSelector = deleteSelector(getEmployee, (employee) => employee);

export const getPendingSelector = deleteSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = deleteSelector(getError, (error) => error);