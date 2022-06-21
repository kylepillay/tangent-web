import { all, fork } from "redux-saga/effects";

import { 
    employeeSaga, 
    employeesSaga, 
    createEmployeeSaga, 
    updateEmployeeSaga, 
    deleteEmployeeSaga 
} from "../../modules/Employees/Sagas";

function* rootSaga() {
 yield all([ 
    fork(employeeSaga), 
    fork(employeesSaga), 
    fork(createEmployeeSaga), 
    fork(updateEmployeeSaga), 
    fork(deleteEmployeeSaga) 
]);
}
 
export default rootSaga;