import React, { useCallback, useEffect, useState } from 'react';
import { DatePicker, Input, Form, Space, Button, Select, message } from 'antd';
import moment from 'moment';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { IEmployee } from '../Actions/FetchEmployee/actions.types';
import { ISeniorityRating } from '../Actions/FetchSeniorityRatings/actions.types';
import { DefaultOptionType } from 'antd/lib/select';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployeeRequest } from '../Actions/CreateEmployee/index'
import {
    createEmployeeSelector,
    createErrorSelector
} from "../Actions/CreateEmployee/actions.selectors";
import {
    updateEmployeeSelector,
    updateErrorSelector
} from "../Actions/UpdateEmployee/actions.selectors";
import { fetchEmployeesRequest } from '../Actions/FetchEmployees';
import { updateEmployeeRequest } from '../Actions/UpdateEmployee';

interface IFormModalProps {
    employee?: IEmployee,
    seniorityRatings: ISeniorityRating[],
}

const FormModal: React.FC<IFormModalProps> = ({ employee, seniorityRatings }: IFormModalProps) => {

    const dispatch = useDispatch();
    const [form] = Form.useForm()
    const [mappedRatings, setMappedRatings] = useState<DefaultOptionType[] | undefined>()

    const createEmployeeCompleted = useSelector(createEmployeeSelector);
    const updateEmployeeCompleted = useSelector(updateEmployeeSelector);

    useEffect(() => {
        const tempMappedRatings = seniorityRatings.map(
            (seniorityRating) => {
                return {
                    value: seniorityRating.id,
                    label: seniorityRating.title
                }
            })
        setMappedRatings(tempMappedRatings);
    }, [])

    useEffect(() => {
        form.setFieldsValue({ ...employee, date_of_birth: employee?.id ? moment(employee?.date_of_birth) : moment() })
    }, [form, employee, mappedRatings])

    const onFinish = useCallback((values: IEmployee) => {
        if (employee?.id) {
            dispatch(updateEmployeeRequest({
                employeeId: employee.id, 
                employee: { ...values, date_of_birth: moment(values.date_of_birth).format('YYYY-MM-DD')}
            }));
        } else {
            dispatch(createEmployeeRequest({
                employee: { ...values, date_of_birth: moment(values.date_of_birth).format('YYYY-MM-DD') }
            }));
        }

        form.resetFields();
        
    }, [employee]);

    useEffect(() => {
        if (createEmployeeCompleted || updateEmployeeCompleted) {
            dispatch(fetchEmployeesRequest());
            message.success(`Employee ${createEmployeeCompleted ? 'created' : 'updated'} successfully.`) 
        }
    }, [createEmployeeCompleted, updateEmployeeCompleted])

    const onFinishFailed = (errorInfo: any) => {
        form.resetFields();
        message.error('Whoops, something went wrong')
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ ...employee, date_of_birth: moment(employee?.date_of_birth) }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            title={employee?.first_name}
        >
            <Form.Item
                label="First Name"
                name="first_name"
                rules={[{ required: true, message: 'First Name' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Last Name"
                name="last_name"
                rules={[{ required: true, message: 'Last Name' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Contact Number"
                name="contact_number"
                rules={[{ required: true, message: 'Contact Number' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email Address"
                name="email_address"
                rules={[{ required: true, message: 'Email Address' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Date of Birth"
                name="date_of_birth"
                rules={[{ required: true, message: 'Date of Birth' }]}
            >
                <DatePicker format="YYYY/MM/DD" />
            </Form.Item>
            <Form.Item
                label="Street Address"
                name="street_address"
                rules={[{ required: true, message: 'Street Address' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: 'City' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Postal Code"
                name="postal_code"
                rules={[{ required: true, message: 'Postal Code' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Country"
                name="country"
                rules={[{ required: true, message: 'Country' }]}
            >
                <Input />
            </Form.Item>
            <Form.List name="skills">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 4 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'skill']}
                                    rules={[{ required: true, message: 'Missing Skill' }]}
                                >
                                    <Input placeholder="Skill" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'years_experience']}
                                    rules={[{ required: true, message: 'Years Experience' }]}
                                >
                                    <Input placeholder="Years Experience" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'seniority_rating_id']}
                                    rules={[{ required: true, message: 'Missing Seniority Rating' }]}>
                                    <Select style={{ width: 130 }} placeholder="Seniority Rating" options={mappedRatings} />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Skill
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="bg-purple-900 border-purple-900">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormModal;