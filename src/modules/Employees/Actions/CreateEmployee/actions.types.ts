import { IEmployee } from "../FetchEmployee/actions.types";
import {
    CREATE_EMPLOYEE,
    CREATE_EMPLOYEE_COMPLETE,
    CREATE_EMPLOYEE_FAILED,
  } from "./actions.constants";

  export interface ISeniorityRating {
    title: string;
  }

  export interface ISkill {
    skill: string;
    years_experience: number
    seniority_rating: ISeniorityRating
  }
  
  export interface CreateEmployeeState {
    pending: boolean;
    response: any;
    error: string | null;
  }
  
  export interface CreateEmployeeRequestPayload {
    employee: IEmployee
  }

  export interface CreateEmployeeSuccessPayload {
    response: any;
  }
  
  export interface CreateEmployeeFailurePayload {
    error: string;
  }
  
  export interface CreateEmployeeRequest {
    type: typeof CREATE_EMPLOYEE;
    payload: CreateEmployeeRequestPayload;
  }
  
  export type CreateEmployeeSuccess = {
    type: typeof CREATE_EMPLOYEE_COMPLETE;
    payload: CreateEmployeeSuccessPayload;
  };
  
  export type CreateEmployeeFailure = {
    type: typeof CREATE_EMPLOYEE_FAILED;
    payload: CreateEmployeeFailurePayload;
  };
  
  export type CreateEmployeeActions =
    | CreateEmployeeRequest
    | CreateEmployeeSuccess
    | CreateEmployeeFailure;