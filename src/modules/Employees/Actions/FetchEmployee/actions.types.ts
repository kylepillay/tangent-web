import {
    FETCH_EMPLOYEE,
    FETCH_EMPLOYEE_COMPLETE,
    FETCH_EMPLOYEE_FAILED,
  } from "./actions.constants";

  export interface ISeniorityRating {
    title: string;
  }

  export interface ISkill {
    skill: string;
    years_experience: number
    seniority_rating: ISeniorityRating
  }
  
  export interface IEmployee {
    first_name: string;
    last_name: string;
    contact_number: string;
    email_address: string;
    date_of_birth: Date;
    street_address: String;
    city: String;
    postal_code: String;
    country: string
    skills?: ISkill[]
  }
  
  export interface EmployeeState {
    pending: boolean;
    employee: IEmployee;
    error: string | null;
  }
  
  export interface FetchEmployeeRequestPayload {
    employeeId: number;
  }

  export interface FetchEmployeeSuccessPayload {
    employee: IEmployee;
  }
  
  export interface FetchEmployeeFailurePayload {
    error: string;
  }
  
  export interface FetchEmployeeRequest {
    type: typeof FETCH_EMPLOYEE;
    payload: FetchEmployeeRequestPayload;
  }
  
  export type FetchEmployeeSuccess = {
    type: typeof FETCH_EMPLOYEE_COMPLETE;
    payload: FetchEmployeeSuccessPayload;
  };
  
  export type FetchEmployeeFailure = {
    type: typeof FETCH_EMPLOYEE_FAILED;
    payload: FetchEmployeeFailurePayload;
  };
  
  export type EmployeeActions =
    | FetchEmployeeRequest
    | FetchEmployeeSuccess
    | FetchEmployeeFailure;