import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEES_COMPLETE,
    FETCH_EMPLOYEES_FAILED,
  } from "./actions.constants";

  import {
    FetchEmployeesRequest,
    FetchEmployeesSuccess,
    FetchEmployeesSuccessPayload,
    FetchEmployeesFailure,
    FetchEmployeesFailurePayload,
  } from "./actions.types";
  
  export const fetchEmployeesRequest = (): FetchEmployeesRequest => ({
    type: FETCH_EMPLOYEES
  });
  
  export const fetchEmployeesSuccess = (
    payload: FetchEmployeesSuccessPayload
  ): FetchEmployeesSuccess => ({
    type: FETCH_EMPLOYEES_COMPLETE,
    payload,
  });
  
  export const fetchEmployeesFailure = (
    payload: FetchEmployeesFailurePayload
  ): FetchEmployeesFailure => ({
    type: FETCH_EMPLOYEES_FAILED,
    payload,
  });