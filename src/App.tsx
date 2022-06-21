import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getEmployeeSelector,
  getErrorSelector,
} from "./modules/Employees/Actions/actions.selectors";
import { fetchEmployeeRequest } from "./modules/Employees/Actions/index";

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const employee = useSelector(getEmployeeSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchEmployeeRequest({
      employeeId: 5
    }));
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : JSON.stringify(employee)}
    </div>
  );
};

export default App;