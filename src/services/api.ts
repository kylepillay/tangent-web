import axios, { AxiosResponse } from 'axios';
import { IEmployee } from '../modules/Employees/Actions/actions.types';

export function fetchEmployee(employeeId: number) {
    return axios.get<IEmployee>('https://tangent.taskbeaver.co.za/api/v1/employees/' + employeeId);
};

export function fetchAllEmployees(): Promise<AxiosResponse> {
    return axios.get<IEmployee[]>('https://tangent.taskbeaver.co.za/api/v1/employees/');
};

