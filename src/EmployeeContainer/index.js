import React, {Component} from 'react';
import CreateEmployee from '../CreateEmployee';
import EmployeeList from '../EmployeeList';
import EditEmployee from '../EditEmployee';

class EmployeeContainer extends Component {
    constructor(){
        super();
        this.state = {
            employees: [],
            showEditModal: false,
            employeeToEdit: {
                _id: null,
                name: '',
                position: '',
                department: '',
                annualSalary: ''
            }
        }
    }
    
    componentDidMount(){
        this.getEmployees();
    }

    addEmployee = async (employee, e) => {
        e.preventDefault();
        console.log(employee, e, ' inside of addEmployee');
        
        try{
            const createEmployee = await fetch('http://localhost/9000/api/v1/employee', {
                method: 'POST',
                body: JSON.stringify(employee),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(createEmployee.status !== 200){
                throw Error('Resource not found');
            }

            const createEmployeeResponse = await createEmployee.json();

            this.setState({
                employees: [...this.state.employees, createEmployeeResponse.data]
            })

            console.log(createEmployeeResponse, ' createEmployeeResponse')
        } catch (err) {
            console.log(err, ' addEmployee');
            return err;
        }
    }

    getEmployees = async () => {
        try{
            const responseGetEmployees = await fetch('localhost/9000/api/v1/employee');

            if (responseGetEmployees.status !== 200){
                throw Error('404 from server');
            }

            const employeesResponse = await responseGetEmployees.json();
            console.log(employeesResponse, ' employeesResponse <');

            this.setState({
                employees: [...employeesResponse, ' employeesResponse']
            })
        } catch (err){
            console.log(err, 'getEmployees errors');
            return err;
        }
    }

    handleFormChange = () => {

    }

    showModal = (employee) => {
        console.log(employee, ' employeeID in show Modal');
        this.setState({
            employeeToEdit: employee,
            showEditModal: !this.state.showEditModal
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <CreateEmployee addEmployee={this.addEmployee}/>
                <EmployeeList employees={this.state.employees} showModal={this.showModal}/>
                {this.state.showEditModal ? <EditEmployee employeeToEdit={this.state.employeeToEdit} handleFormChange={this.handleFormChange}/> : null}
            </div>
        )
    }
}

export default EmployeeContainer;