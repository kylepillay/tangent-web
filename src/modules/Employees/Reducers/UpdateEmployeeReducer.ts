import {
    UPDATE_EMPLOYEE,
    UPDATE_EMPLOYEE_COMPLETE,
    UPDATE_EMPLOYEE_FAILED,
  } from "../Actions/UpdateEmployee/actions.constants";
  
  import { UpdateEmployeeActions, UpdateEmployeeState } from "../Actions/UpdateEmployee/actions.types";
  
  const initialState: UpdateEmployeeState = {
    pending: false,
    response: null,
    error: null,
  };
  
  export default (state = initialState, action: UpdateEmployeeActions): UpdateEmployeeState => {
    switch (action.type) {
      case UPDATE_EMPLOYEE:
        return {
          ...state,
          pending: true,
        };
      case UPDATE_EMPLOYEE_COMPLETE:
        return {
          ...state,
          pending: false,
          response: action.payload.response,
          error: null,
        };
      case UPDATE_EMPLOYEE_FAILED:
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