import _ from 'lodash';
import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEES_COMPLETE,
    FETCH_EMPLOYEES_FAILED,
    SEARCH_EMPLOYEES,
  } from "../Actions/FetchEmployees/actions.constants";
  
  import { EmployeesActions, EmployeesState } from "../Actions/FetchEmployees/actions.types";
  
  const initialState: EmployeesState = {
    pending: false,
    employees: [],
    error: null,
  };
  
  export default (state = initialState, action: EmployeesActions): EmployeesState => {
    switch (action.type) {
      case SEARCH_EMPLOYEES:
        return {
          ...state,
          employees: _.filter(state.employees as any, function(o) { 
            return o[action.payload.filterValue].includes(action.payload.searchString); 
         }),
        };
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