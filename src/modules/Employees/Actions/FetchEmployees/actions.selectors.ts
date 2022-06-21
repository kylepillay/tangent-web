import { createSelector } from "reselect";

import { AppState } from "../../../../store/reducers";

const getPending = (state: AppState) => state.employees.pending;

const getEmployees = (state: AppState) => state.employees.employees;

const getError = (state: AppState) => state.employees.error;

export const getEmployeesSelector = createSelector(getEmployees, (employees) => employees);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);