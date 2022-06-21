import {
    DELETE_EMPLOYEE,
    DELETE_EMPLOYEE_COMPLETE,
    DELETE_EMPLOYEE_FAILED,
  } from "./actions.constants";

  import {
    DeleteEmployeeRequest,
    DeleteEmployeeSuccess,
    DeleteEmployeeSuccessPayload,
    DeleteEmployeeFailure,
    DeleteEmployeeFailurePayload,
    DeleteEmployeeRequestPayload
  } from "./actions.types";
  
  export const deleteEmployeeRequest = (payload: DeleteEmployeeRequestPayload): DeleteEmployeeRequest => ({
    type: DELETE_EMPLOYEE,
    payload
  });
  
  export const deleteEmployeeSuccess = (
    payload: DeleteEmployeeSuccessPayload
  ): DeleteEmployeeSuccess => ({
    type: DELETE_EMPLOYEE_COMPLETE,
    payload,
  });
  
  export const deleteEmployeeFailure = (
    payload: DeleteEmployeeFailurePayload
  ): DeleteEmployeeFailure => ({
    type: DELETE_EMPLOYEE_FAILED,
    payload,
  });