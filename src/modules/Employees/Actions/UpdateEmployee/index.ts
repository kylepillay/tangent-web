import {
    UPDATE_EMPLOYEE,
    UPDATE_EMPLOYEE_COMPLETE,
    UPDATE_EMPLOYEE_FAILED,
  } from "./actions.constants";

  import {
    UpdateEmployeeRequest,
    UpdateEmployeeSuccess,
    UpdateEmployeeSuccessPayload,
    UpdateEmployeeFailure,
    UpdateEmployeeFailurePayload,
    UpdateEmployeeRequestPayload
  } from "./actions.types";
  
  export const updateEmployeeRequest = (payload: UpdateEmployeeRequestPayload): UpdateEmployeeRequest => ({
    type: UPDATE_EMPLOYEE,
    payload
  });
  
  export const updateEmployeeSuccess = (
    payload: UpdateEmployeeSuccessPayload
  ): UpdateEmployeeSuccess => ({
    type: UPDATE_EMPLOYEE_COMPLETE,
    payload,
  });
  
  export const updateEmployeeFailure = (
    payload: UpdateEmployeeFailurePayload
  ): UpdateEmployeeFailure => ({
    type: UPDATE_EMPLOYEE_FAILED,
    payload,
  });