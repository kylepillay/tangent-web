import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEES_COMPLETE,
    FETCH_EMPLOYEES_FAILED,
  } from "../Actions/FetchEmployees/actions.constants";
  
  import { EmployeesActions, EmployeesState } from "../Actions/FetchEmployees/actions.types";
  
  const initialState: EmployeesState = {
    pending: false,
    employees: [],
    error: null,
  };
  
  export default (state = initialState, action: EmployeesActions): EmployeesState => {
    switch (action.type) {
      case FETCH_EMPLOYEES:
        return {
          ...state,
          pending: true,
        };
      case FETCH_EMPLOYEES_COMPLETE:
        return {
          ...state,
          pending: false,
          employees: action.payload.employees,
          error: null,
        };
      case FETCH_EMPLOYEES_FAILED:
        return {
          ...state,
          pending: false,
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };