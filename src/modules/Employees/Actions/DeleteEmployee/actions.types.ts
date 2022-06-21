import {
    DELETE_EMPLOYEE,
    DELETE_EMPLOYEE_COMPLETE,
    DELETE_EMPLOYEE_FAILED,
  } from "./actions.constants";

  export interface ISeniorityRating {
    title: string;
  }

  export interface ISkill {
    skill: string;
    years_experience: number
    seniority_rating: ISeniorityRating
  }
  
  export interface DeleteEmployeeState {
    pending: boolean;
    response: any;
    error: string | null;
  }
  
  export interface DeleteEmployeeRequestPayload {
    employeeId: number;
  }

  export interface DeleteEmployeeSuccessPayload {
    response: any;
  }
  
  export interface DeleteEmployeeFailurePayload {
    error: string;
  }
  
  export interface DeleteEmployeeRequest {
    type: typeof DELETE_EMPLOYEE;
    payload: DeleteEmployeeRequestPayload;
  }
  
  export type DeleteEmployeeSuccess = {
    type: typeof DELETE_EMPLOYEE_COMPLETE;
    payload: DeleteEmployeeSuccessPayload;
  };
  
  export type DeleteEmployeeFailure = {
    type: typeof DELETE_EMPLOYEE_FAILED;
    payload: DeleteEmployeeFailurePayload;
  };
  
  export type DeleteEmployeeActions =
    | DeleteEmployeeRequest
    | DeleteEmployeeSuccess
    | DeleteEmployeeFailure;