import { combineReducers } from 'redux';
import { 
    employeeReducer, 
    employeesReducer, 
    createEmployeeReducer, 
    updateEmployeeReducer, 
    DeleteEmployeeReducer,
    SeniorirtyRatingsReducer
} from '../../modules/Employees/Reducers'

const rootReducer = combineReducers({
    employee: employeeReducer,
    employees: employeesReducer,
    createEmployee: createEmployeeReducer,
    updateEmployee: updateEmployeeReducer,
    deleteEmployee: DeleteEmployeeReducer,
    seniorityRatings: SeniorirtyRatingsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;