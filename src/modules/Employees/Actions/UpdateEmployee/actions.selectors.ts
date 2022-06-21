import { updateSelector } from "reselect";

import { AppState } from "../../../../store/reducers";

const getPending = (state: AppState) => state.employee.pending;

const getEmployee = (state: AppState) => state.employee.employee;

const getError = (state: AppState) => state.employee.error;

export const getEmployeeSelector = updateSelector(getEmployee, (employee) => employee);

export const getPendingSelector = updateSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = updateSelector(getError, (error) => error);