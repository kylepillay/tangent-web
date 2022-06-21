import axios, { AxiosResponse } from 'axios';
import { IEmployee } from '../modules/Employees/Actions/FetchEmployee/actions.types';

export function fetchEmployees(): Promise<AxiosResponse> {
    return axios.get<IEmployee[]>('https://tangent.taskbeaver.co.za/api/v1/employees');
};

export function fetchEmployee(employeeId: number) {
    return axios.get<IEmployee>('https://tangent.taskbeaver.co.za/api/v1/employees/' + employeeId);
};

export function createEmployee(employeeId: number) {
    return axios.get<IEmployee>('https://tangent.taskbeaver.co.za/api/v1/employees/' + employeeId);
};

export function updateEmployee(employeeId: number) {
    return axios.get<IEmployee>('https://tangent.taskbeaver.co.za/api/v1/employees/' + employeeId);
};

export function deleteEmployee(employeeId: number) {
    return axios.get<IEmployee>('https://tangent.taskbeaver.co.za/api/v1/employees/' + employeeId);
};

