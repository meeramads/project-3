import React from 'react';

const Employees = (props) => {
    console.log(props, ' props in employeeList');

    const employeeList = props.employees.map((employee) => {
        return (
            <li key={employee._id}>
                <span>{employee.name}</span>
                <span>{employee.position}</span>
                <span>{employee.department}</span>
                <button>Delete</button>
                <button onClick={props.showModal.bind(null, employee)}>Edit</button>
            </li>
        )
    });

    return (
        <div>
            <h3>Employees</h3>
            <ul>
                {employeeList}
            </ul>
        </div>
    );
}

export default Employees;