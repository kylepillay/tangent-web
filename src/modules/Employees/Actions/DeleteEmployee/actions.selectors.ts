import { createSelector } from "reselect";

import { AppState } from "../../../../store/reducers";

const deletePending = (state: AppState) => state.deleteEmployee.pending;

const deleteEmployee = (state: AppState) => state.deleteEmployee.response;

const deleteError = (state: AppState) => state.deleteEmployee.error;

export const deleteEmployeeSelector = createSelector(deleteEmployee, (employee) => employee);

export const deletePendingSelector = createSelector(
  deletePending,
  (pending) => pending
);

export const deleteErrorSelector = createSelector(deleteError, (error) => error);