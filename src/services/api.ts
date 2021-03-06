import axios, { AxiosResponse } from 'axios';
import { IEmployee, ISeniorityRating } from '../modules/Employees/Actions/FetchEmployee/actions.types';

export function fetchEmployees(): Promise<AxiosResponse> {
    return axios.get<IEmployee[]>('https://tangent.taskbeaver.co.za/api/v1/employees');
};

export function fetchEmployee(employeeId: number) {
    return axios.get<IEmployee>('https://tangent.taskbeaver.co.za/api/v1/employees/' + employeeId);
};

export function createEmployee(employee: IEmployee) {
    return axios.post<IEmployee>('https://tangent.taskbeaver.co.za/api/v1/employees/', employee);
};

export function updateEmployee(employeeId: number, employee: IEmployee) {
    return axios.put<IEmployee>('https://tangent.taskbeaver.co.za/api/v1/employees/' + employeeId, employee);
};

export function deleteEmployee(employeeId: number) {
    return axios.delete<IEmployee>('https://tangent.taskbeaver.co.za/api/v1/employees/' + employeeId);
};

export function fetchSeniorityRatings() {
    return axios.get<ISeniorityRating[]>('https://tangent.taskbeaver.co.za/api/v1/seniority_ratings/');
};