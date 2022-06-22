import {
    FETCH_EMPLOYEE,
    FETCH_EMPLOYEE_COMPLETE,
    FETCH_EMPLOYEE_FAILED,
  } from "../Actions/FetchEmployee/actions.constants";
  
  import { EmployeeActions, EmployeeState } from "../Actions/FetchEmployee/actions.types";
  
  const initialState: EmployeeState = {
    pending: false,
    employee: {
        id: 0,
        employee_id: '',
        first_name:'',
        last_name: '',
        contact_number: '',
        email_address: '',
        date_of_birth: '',
        street_address: '',
        city: '',
        postal_code: '',
        country: '',
        skills: []
    },
    error: null,
  };
  
  export default (state = initialState, action: EmployeeActions): EmployeeState => {
    switch (action.type) {
      case FETCH_EMPLOYEE:
        return {
          ...state,
          pending: true,
        };
      case FETCH_EMPLOYEE_COMPLETE:
        return {
          ...state,
          pending: false,
          employee: action.payload.employee,
          error: null,
        };
      case FETCH_EMPLOYEE_FAILED:
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