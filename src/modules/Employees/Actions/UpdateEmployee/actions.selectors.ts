import { createSelector } from "reselect";

import { AppState } from "../../../../store/reducers";

const updatePending = (state: AppState) => state.updateEmployee.pending;

const updateEmployee = (state: AppState) => state.updateEmployee.response;

const updateError = (state: AppState) => state.updateEmployee.error;

export const updateEmployeeSelector = createSelector(updateEmployee, (response) => response);

export const updatePendingSelector = createSelector(
  updatePending,
  (pending) => pending
);

export const updateErrorSelector = createSelector(updateError, (error) => error);