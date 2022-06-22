import { IEmployee } from "../FetchEmployee/actions.types";
import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEES_COMPLETE,
    FETCH_EMPLOYEES_FAILED,
    SEARCH_EMPLOYEES,
    SEARCH_EMPLOYEES_COMPLETE
  } from "./actions.constants";
  
  export interface EmployeesState {
    pending: boolean;
    employees: IEmployee[];
    error: string | null;
  }
  

  export interface FetchEmployeesSuccessPayload {
    employees: IEmployee[];
  }

  export interface FilterEmployeesRequestPayload {
    filterValue: string;
    searchString: string
  }

  export interface FilterEmployeesSuccessPayload {
    employees: IEmployee[];
  }
  
  export interface FetchEmployeesFailurePayload {
    error: string;
  }
  
  export interface FetchEmployeesRequest {
    type: typeof FETCH_EMPLOYEES;
  }

  export interface FilterEmployeesRequest {
    type: typeof SEARCH_EMPLOYEES;
    payload: FilterEmployeesRequestPayload
  }
  
  export type FetchEmployeesSuccess = {
    type: typeof FETCH_EMPLOYEES_COMPLETE;
    payload: FetchEmployeesSuccessPayload;
  };

  export type FilterEmployeesSuccess = {
    type: typeof SEARCH_EMPLOYEES_COMPLETE;
    payload: FilterEmployeesSuccessPayload;
  };
  
  export type FetchEmployeesFailure = {
    type: typeof FETCH_EMPLOYEES_FAILED;
    payload: FetchEmployeesFailurePayload;
  };
  
  export type EmployeesActions =
    | FetchEmployeesRequest
    | FetchEmployeesSuccess
    | FetchEmployeesFailure
    | FilterEmployeesRequest