import { all, fork } from "redux-saga/effects";

import { employeeSaga } from "../../modules/Employees/Sagas";

function* rootSaga() {
 yield all([ fork(employeeSaga) ]);
}
 
export default rootSaga;