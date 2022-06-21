import {
    DELETE_EMPLOYEE,
    DELETE_EMPLOYEE_COMPLETE,
    DELETE_EMPLOYEE_FAILED,
  } from "../Actions/DeleteEmployee/actions.constants";
  
  import { DeleteEmployeeActions, DeleteEmployeeState } from "../Actions/DeleteEmployee/actions.types";
  
  const initialState: DeleteEmployeeState = {
    pending: false,
    response: null,
    error: null,
  };
  
  export default (state = initialState, action: DeleteEmployeeActions): DeleteEmployeeState => {
    switch (action.type) {
      case DELETE_EMPLOYEE:
        return {
          ...state,
          pending: true,
        };
      case DELETE_EMPLOYEE_COMPLETE:
        return {
          ...state,
          pending: false,
          response: action.payload.response,
          error: null,
        };
      case DELETE_EMPLOYEE_FAILED:
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