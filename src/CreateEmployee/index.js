import React, {Component} from 'react';

class CreateEmployee extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            position: '',
            birthDate: '',
            department: '',
            annualSalary: ''
        }
    }

    updateEmployee = (e) => {

    }

    render(){
        return (
            <form>
                <label htmlFor="">Name:
                    <input type="text" name="name" onChange={this.updateEmployee} value={this.state.name}/>
                </label>

                <label htmlFor="">Position:
                    <input type="text" name="position" onChange={this.updateEmployee} value={this.state.position}/>
                </label>

                <label htmlFor="">Birthdate:
                    <input type="date" name="birthdate" onChange={this.updateEmployee}  value={this.state.birthDate}/>
                </label>

                <label htmlFor="">Department:
                    <input type="text" name="department" onChange={this.updateEmployee}  value={this.state.department}/>
                </label>

                <label htmlFor="">Annual Salary:
                    <input type="text" name="annualSalary" onChange={this.updateEmployee}  value={this.state.annualSalary}/>
                </label>
                
                <Button type ='submit'>
                    Create Employee
                </Button>
            </form>
        )
    }
}

export default CreateEmployee;