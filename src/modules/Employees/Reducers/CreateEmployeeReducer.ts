import {
    CREATE_EMPLOYEE,
    CREATE_EMPLOYEE_COMPLETE,
    CREATE_EMPLOYEE_FAILED,
  } from "../Actions/CreateEmployee/actions.constants";
  
  import { CreateEmployeeActions, CreateEmployeeState } from "../Actions/CreateEmployee/actions.types";
  
  const initialState: CreateEmployeeState = {
    pending: false,
    response: null,
    error: null,
  };
  
  export default (state = initialState, action: CreateEmployeeActions): CreateEmployeeState => {
    switch (action.type) {
      case CREATE_EMPLOYEE:
        return {
          ...state,
          pending: true,
        };
      case CREATE_EMPLOYEE_COMPLETE:
        return {
          ...state,
          pending: false,
          response: action.payload.response,
          error: null,
        };
      case CREATE_EMPLOYEE_FAILED:
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