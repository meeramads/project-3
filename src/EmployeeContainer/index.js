import React, {Component} from 'react';

class EmployeeContainer extends Component {
    constructor(){
        super();
        this.state = {
            employees: []
        }
    }
    
    componentDidMount(){
        this.getEmployees();
    }

    getEmployees = async () => {
        try{
            const responseGetEmployees = await fetch('localhost/9000/api/v1/employee');

            if (responseGetEmployees.status !== 200){
                throw Error('404 from server');
            }

            const employeesResponse = await responseGetEmployees.json();
            console.log(employeesResponse, '_employeesResponse <')

            this.setState({
                employees: [...employeesResponse, ' employeesResponse']
            })
        } catch (err){
            console.log(err, 'getEmployees errors');
            return err;
        }
    }

    render(){
        return (
            <div>
                EmployeeContainer
            </div>
        )
    }
}

export default EmployeeContainer;