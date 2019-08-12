import React, {Component} from 'react';

const EditEmployee = (props) => {
    return (
        <div>
            <h4>Edit Employee</h4>
            <form>
                <label>
                    Edit Name:
                    <input type="text" name="name" onChange={props.handleFormChange} value={props.employeeToEdit.name}/>
                </label>
                <label>
                    Edit Position:
                    <input type="text" name="position" onChange={props.handleFormChange} value={props.employeeToEdit.position}/>
                </label>
                <label>
                    Edit Department:
                    <input type="text" name="department" onChange={props.handleFormChange} value={props.employeeToEdit.department}/>
                </label>
                <label>
                    Edit Annual Salary:
                    <input type="text" name="annualSalary" onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary}/>
                </label>
            </form>
        </div>
    )
}

export default EditEmployee;