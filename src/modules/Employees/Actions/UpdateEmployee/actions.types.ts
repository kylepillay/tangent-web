import { IEmployee } from "../FetchEmployee/actions.types";
import {
    UPDATE_EMPLOYEE,
    UPDATE_EMPLOYEE_COMPLETE,
    UPDATE_EMPLOYEE_FAILED,
  } from "./actions.constants";

  export interface ISeniorityRating {
    title: string;
  }

  export interface ISkill {
    skill: string;
    years_experience: number
    seniority_rating: ISeniorityRating
  }
  
  export interface UpdateEmployeeState {
    pending: boolean;
    response: any;
    error: string | null;
  }
  
  export interface UpdateEmployeeRequestPayload {
    employeeId: number;
    employee: IEmployee
  }

  export interface UpdateEmployeeSuccessPayload {
    response: any;
  }
  
  export interface UpdateEmployeeFailurePayload {
    error: string;
  }
  
  export interface UpdateEmployeeRequest {
    type: typeof UPDATE_EMPLOYEE;
    payload: UpdateEmployeeRequestPayload;
  }
  
  export type UpdateEmployeeSuccess = {
    type: typeof UPDATE_EMPLOYEE_COMPLETE;
    payload: UpdateEmployeeSuccessPayload;
  };
  
  export type UpdateEmployeeFailure = {
    type: typeof UPDATE_EMPLOYEE_FAILED;
    payload: UpdateEmployeeFailurePayload;
  };
  
  export type UpdateEmployeeActions =
    | UpdateEmployeeRequest
    | UpdateEmployeeSuccess
    | UpdateEmployeeFailure;