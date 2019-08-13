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
            const createEmployee = await fetch('http://localhost:9000/api/v1/employee', {
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

    handleFormChange = (e) => {
        this.setState({
            employeeToEdit: {
                ...this.state.employeeToEdit,
                [e.target.name]: e.target.value
            }
        })
    }

    showModal = (employee) => {
        console.log(employee, ' employeeID in show Modal');
        this.setState({
            employeeToEdit: employee,
            showEditModal: !this.state.showEditModal
        })
    }

    closeAndEdit = async (e) => {
        e.preventDefault();
        
        try{
            const editRequest = await fetch('http://localhost:9000/api/v1/employee/' + this.state.employeeToEdit._id, {
                method: 'PUT',
                body: JSON.stringify(this.state.employeeToEdit),
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            
            if (editRequest.status !== 200){
                throw Error('editRequest not working');
            }

            const editResponse = await editRequest.json();

            const editedEmployeeArray = this.state.employees.map((employee) => {
                if(employee._id === editResponse.data._id){
                    employee = editResponse.data;
                }
                
                return employee;
            });

            this.setState({
                employees: editedEmployeeArray,
                showEditModal: false
            })

            console.log(editResponse, ' editResponse');
        } catch (err) {
            console.log(err, 'error closeAndEdit');
            return err;
        }
    }

    deleteEmployee = async (id) => {
        console.log(id, ' delete employee ID');

        try{
            const deleteEmployee = await fetch('http://localhost:9000/api/v1/employee/' + id, {
                method: 'DELETE'
            });

            if(deleteEmployee.status !== 200){
                throw Error('Error with delete');
            }

            const deleteEmployeeJson = await deleteEmployee.json();

            this.setState({
                employees: this.state.employees.filter((employee) => employee._id !== id)
            });
        } catch (err){
            console.log(err);
            return err;
        }
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <CreateEmployee addEmployee={this.addEmployee}/>
                <EmployeeList employees={this.state.employees} showModal={this.showModal} deleteEmployee={this.deleteEmployee}/>
                {this.state.showEditModal ? <EditEmployee closeAndEdit={this.closeAndEdit} employeeToEdit={this.state.employeeToEdit} handleFormChange={this.handleFormChange}/> : null}
            </div>
        )
    }
}

export default EmployeeContainer;