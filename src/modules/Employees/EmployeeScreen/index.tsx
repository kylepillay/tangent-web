import { Content } from "antd/lib/layout/layout";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, Col, Row, Input, Select, Button, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/lib/table';
import { GetComponentProps } from "rc-table/lib/interface";
import {
  getPendingSelector as getEmployeesPendingSelector,
  getEmployeesSelector,
  getErrorSelector as getEmployeesErrorSelector,
} from "../Actions/FetchEmployees/actions.selectors";
import {
  createPendingSelector,
  createEmployeeSelector,
  createErrorSelector
} from "../Actions/CreateEmployee/actions.selectors";
import {
 updatePendingSelector,
 updateEmployeeSelector,
 updateErrorSelector
} from "../Actions/UpdateEmployee/actions.selectors";
import {
  deletePendingSelector,
  deleteEmployeeSelector,
  deleteErrorSelector
 } from "../Actions/DeleteEmployee/actions.selectors";
import { fetchEmployeesRequest } from "../Actions/FetchEmployees/index";
import { IEmployee } from "../Actions/FetchEmployee/actions.types";
import FormModal from "./FormModal";
import { getSeniorityRatingsSelector } from "../Actions/FetchSeniorityRatings/actions.selectors";
import { fetchSeniorityRatingsRequest } from "../Actions/FetchSeniorityRatings";


const { Option } = Select;

const employeeInitialState = {
  id: 0,
  employee_id: '',
  first_name: '',
  last_name: '',
  contact_number: '',
  email_address: '',
  date_of_birth: '',
  street_address: '',
  city: '',
  postal_code: '',
  country: '',
  skills: []
}

const Employee = () => {

  const columns: ColumnsType<IEmployee> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <div>{text}</div>,
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      render: text => <div>{text}</div>,
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Contact Number',
      dataIndex: 'contact_number',
      key: 'contact_number',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={showModal}>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const dispatch = useDispatch();
  const getEmployeesPending = useSelector(getEmployeesPendingSelector);
  const employees = useSelector(getEmployeesSelector);
  const getEmployeesError = useSelector(getEmployeesErrorSelector);

  const createEmployeePending = useSelector(createPendingSelector);
  const createEmployeeCompleted = useSelector(createEmployeeSelector);
  const createEmployError = useSelector(createErrorSelector);

  const updateEmployeePending = useSelector(updatePendingSelector);
  const updateEmployeeCompleted = useSelector(updateEmployeeSelector);
  const updateEmployError = useSelector(updateErrorSelector);

  const deleteEmployeePending = useSelector(deletePendingSelector);
  const deleteEmployeeCompleted = useSelector(deleteEmployeeSelector);
  const deleteEmployError = useSelector(deleteErrorSelector);

  const seniorityRatings = useSelector(getSeniorityRatingsSelector);

  const [visible, setVisible] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [currentEmployee, setCurrentEmployee] = useState<IEmployee>(employeeInitialState);

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setCurrentEmployee(employeeInitialState)
    setVisible(false);
  }, [employeeInitialState]);

  useEffect(() => {
    if (createEmployeeCompleted || updateEmployeeCompleted) {
        setCurrentEmployee(employeeInitialState)
        setVisible(false);
        dispatch(fetchEmployeesRequest());
    }
}, [createEmployeeCompleted, updateEmployeeCompleted])

  useEffect(() => {
    dispatch(fetchEmployeesRequest());
    dispatch(fetchSeniorityRatingsRequest());
  }, []);

  const handleChangeFilter = useCallback((value: string) => {
    setFilterValue(value);
  }, [])

  const handleRowClick = useCallback<GetComponentProps<IEmployee>>((employee: IEmployee, rowIndex: any) => {
    return {
      onClick: event => 
      {
        setCurrentEmployee(employee)
        showModal()
      },
    };
  }, [])

  return (
    <>
      <div className="bg-zinc-900">
        <Content className="flex flex-1 justify-center align-middle">
          {
            getEmployeesPending ? (
              <div>Loading...</div>
            ) : getEmployeesError ? (
              <div>Error</div>
            ) : <div>
              <Row className="text-white h-16">
                <Col span={6} className="flex flex-col align-middle justify-center">
                  <div className="font-extrabold text-sm">
                    Employees
                  </div>
                  <div className="font-light">
                    There are {employees.length} employees.
                  </div>
                </Col>
                <Col span={9} className="flex flex-col align-middle justify-center">
                  <Input placeholder="Search" />
                </Col>
                <Col span={4} className="flex flex-col align-middle justify-center pl-2">
                  <Select defaultValue="first_name" style={{ width: 120 }} onChange={handleChangeFilter}>
                    <Option value="first_name">First Name</Option>
                    <Option value="last_name">Last Name</Option>
                    <Option value="email">Email</Option>
                  </Select>
                </Col>
                <Col span={5} className="flex flex-col justify-center pl-2">
                  <Button onClick={showModal} style={{ backgroundColor: '#7030A0', border: 'none' }} className="text-white ml-2 text-xs" shape="round" icon={<PlusCircleOutlined />} size="middle">
                    Add Employee
                  </Button>
                </Col>
              </Row>
              <Table rowKey={'id'} columns={columns} dataSource={employees} onRow={handleRowClick} />
            </div>
          }
        </Content>
      </div>
      <Modal
        title={currentEmployee?.first_name}
        visible={visible}
        footer={null}
        confirmLoading={createEmployeePending || updateEmployeePending}
        onCancel={handleCancel}
      >
        <div><FormModal employee={currentEmployee} seniorityRatings={seniorityRatings} /></div>
      </Modal>
    </>
  );
};

export default Employee;