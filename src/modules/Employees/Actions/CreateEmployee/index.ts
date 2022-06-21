import {
    CREATE_EMPLOYEE,
    CREATE_EMPLOYEE_COMPLETE,
    CREATE_EMPLOYEE_FAILED,
  } from "./actions.constants";

  import {
    CreateEmployeeRequest,
    CreateEmployeeSuccess,
    CreateEmployeeSuccessPayload,
    CreateEmployeeFailure,
    CreateEmployeeFailurePayload,
    CreateEmployeeRequestPayload
  } from "./actions.types";
  
  export const createEmployeeRequest = (payload: CreateEmployeeRequestPayload): CreateEmployeeRequest => ({
    type: CREATE_EMPLOYEE,
    payload
  });
  
  export const createEmployeeSuccess = (
    payload: CreateEmployeeSuccessPayload
  ): CreateEmployeeSuccess => ({
    type: CREATE_EMPLOYEE_COMPLETE,
    payload,
  });
  
  export const createEmployeeFailure = (
    payload: CreateEmployeeFailurePayload
  ): CreateEmployeeFailure => ({
    type: CREATE_EMPLOYEE_FAILED,
    payload,
  });