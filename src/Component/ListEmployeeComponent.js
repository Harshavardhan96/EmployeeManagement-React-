import React, {useEffect, useState} from 'react'
import { DeleteEmployee, ListEmployee } from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'

export const ListEmployeeComponent = () => {

      const [employees,setEmployees] = useState([])
      const navigator = useNavigate();
      useEffect(()=>{
       getAllEmployees();
        
      },[])

      function getAllEmployees(){
        ListEmployee().then((response)=> {
            setEmployees(response.data);
        }).catch(error =>{
            console.error(error);
        })
      }

      function addNewEmployee(){
            navigator('/add-employee')
      }
      function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
      }

      function removeEmployee(id){
        console.log(id);

        DeleteEmployee(id).then((response)=>{
                getAllEmployees();
        }).catch(error =>{
            console.error(error);
        })
      }
      
    // const dummyData = [
    //     {
    //         "id":1,
    //         "firstName":"Harsha",
    //         "lastName" :"sai",
    //         "email" : "harsha@gmail.com"
    //     },
    //     {
    //         "id":2,
    //         "firstName":"hari",
    //         "lastName" :"nath",
    //         "email" : "hari@gmail.com"
    //     },
    //     {
    //         "id":3,
    //         "firstName":"sachin",
    //         "lastName" :"tendulkar",
    //         "email" : "sachin@gmail.com"
    //     },

    // ]
  return (
    <div class="container">
        <h2 class = "text-center">List of Employees</h2>
        <button  classname= 'btn btn-primary' onClick={addNewEmployee}>Add Employee</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=> updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=> removeEmployee(employee.id)} style={{marginLeft: '10px'}}>Delete</button>
                            </td>

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
