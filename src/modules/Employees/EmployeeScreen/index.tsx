import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getEmployeesSelector,
  getErrorSelector,
} from "../Actions/FetchEmployees/actions.selectors";
import { fetchEmployeesRequest } from "../Actions/FetchEmployees/index";

const Employee = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const employees = useSelector(getEmployeesSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchEmployeesRequest());
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : JSON.stringify(employees)}
    </div>
  );
};

export default Employee;