import { combineReducers } from 'redux';
import employeeReducer from '../../modules/Employees/Reducers'

const rootReducer = combineReducers({
    employee: employeeReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;