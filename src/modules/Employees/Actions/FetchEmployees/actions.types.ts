import { IEmployee } from "../FetchEmployee/actions.types";
import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEES_COMPLETE,
    FETCH_EMPLOYEES_FAILED,
  } from "./actions.constants";
  
  export interface EmployeesState {
    pending: boolean;
    employees: IEmployee[];
    error: string | null;
  }
  

  export interface FetchEmployeesSuccessPayload {
    employees: IEmployee[];
  }
  
  export interface FetchEmployeesFailurePayload {
    error: string;
  }
  
  export interface FetchEmployeesRequest {
    type: typeof FETCH_EMPLOYEES;
  }
  
  export type FetchEmployeesSuccess = {
    type: typeof FETCH_EMPLOYEES_COMPLETE;
    payload: FetchEmployeesSuccessPayload;
  };
  
  export type FetchEmployeesFailure = {
    type: typeof FETCH_EMPLOYEES_FAILED;
    payload: FetchEmployeesFailurePayload;
  };
  
  export type EmployeesActions =
    | FetchEmployeesRequest
    | FetchEmployeesSuccess
    | FetchEmployeesFailure;