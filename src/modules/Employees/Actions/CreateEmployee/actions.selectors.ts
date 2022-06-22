import { createSelector } from "reselect";

import { AppState } from "../../../../store/reducers";

const createPending = (state: AppState) => state.createEmployee.pending;

const createEmployee = (state: AppState) => state.createEmployee.response;

const createError = (state: AppState) => state.createEmployee.error;

export const createEmployeeSelector = createSelector(createEmployee, (response) => response);

export const createPendingSelector = createSelector(
  createPending,
  (pending) => pending
);

export const createErrorSelector = createSelector(createError, (error) => error);