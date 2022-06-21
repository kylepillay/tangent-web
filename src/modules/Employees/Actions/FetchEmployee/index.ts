import {
    FETCH_EMPLOYEE,
    FETCH_EMPLOYEE_COMPLETE,
    FETCH_EMPLOYEE_FAILED,
  } from "./actions.constants";

  import {
    FetchEmployeeRequest,
    FetchEmployeeSuccess,
    FetchEmployeeSuccessPayload,
    FetchEmployeeFailure,
    FetchEmployeeFailurePayload,
    FetchEmployeeRequestPayload
  } from "./actions.types";
  
  export const fetchEmployeeRequest = (payload: FetchEmployeeRequestPayload): FetchEmployeeRequest => ({
    type: FETCH_EMPLOYEE,
    payload
  });
  
  export const fetchEmployeeSuccess = (
    payload: FetchEmployeeSuccessPayload
  ): FetchEmployeeSuccess => ({
    type: FETCH_EMPLOYEE_COMPLETE,
    payload,
  });
  
  export const fetchEmployeeFailure = (
    payload: FetchEmployeeFailurePayload
  ): FetchEmployeeFailure => ({
    type: FETCH_EMPLOYEE_FAILED,
    payload,
  });