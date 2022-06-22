import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEES_COMPLETE,
    FETCH_EMPLOYEES_FAILED,
    SEARCH_EMPLOYEES,
    SEARCH_EMPLOYEES_COMPLETE
  } from "./actions.constants";

  import {
    FetchEmployeesRequest,
    FetchEmployeesSuccess,
    FetchEmployeesSuccessPayload,
    FetchEmployeesFailure,
    FetchEmployeesFailurePayload,
    FilterEmployeesRequest,
    FilterEmployeesRequestPayload,
    FilterEmployeesSuccessPayload,
    FilterEmployeesSuccess
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

  export const filterEmployeesRequest = (
    payload: FilterEmployeesRequestPayload
  ): FilterEmployeesRequest => ({
    type: SEARCH_EMPLOYEES,
    payload,
  });

  export const filterEmployeesSuccess = (
    payload: FilterEmployeesSuccessPayload
  ): FilterEmployeesSuccess => ({
    type: SEARCH_EMPLOYEES_COMPLETE,
    payload,
  });
  
  export const fetchEmployeesFailure = (
    payload: FetchEmployeesFailurePayload
  ): FetchEmployeesFailure => ({
    type: FETCH_EMPLOYEES_FAILED,
    payload,
  });