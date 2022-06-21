import { combineReducers } from 'redux';
import { 
    employeeReducer, 
    employeesReducer, 
    createEmployeeReducer, 
    updateEmployeeReducer, 
    DeleteEmployeeReducer 
} from '../../modules/Employees/Reducers'

const rootReducer = combineReducers({
    employee: employeeReducer,
    employees: employeesReducer,
    createEmployee: createEmployeeReducer,
    updateEmployee: updateEmployeeReducer,
    deleteEmployee: DeleteEmployeeReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;