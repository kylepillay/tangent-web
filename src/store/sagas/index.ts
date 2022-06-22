import { all, fork } from "redux-saga/effects";

import { 
    employeeSaga, 
    employeesSaga, 
    createEmployeeSaga, 
    updateEmployeeSaga, 
    deleteEmployeeSaga ,
    seniorityRatingsSaga
} from "../../modules/Employees/Sagas";

function* rootSaga() {
 yield all([ 
    fork(employeeSaga), 
    fork(employeesSaga), 
    fork(createEmployeeSaga), 
    fork(updateEmployeeSaga), 
    fork(deleteEmployeeSaga),
    fork(seniorityRatingsSaga)
]);
}
 
export default rootSaga;