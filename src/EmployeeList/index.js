import React from 'react';

const Employees = (props) => {
    console.log(props, ' props in employeeList');

    const employeeList = props.employees.map((employee) => {
        return (
            <li key={employee._id}>
                <span>{employee.name}</span>
                <span>{employee.position}</span>
            </li>
        )
    })
}