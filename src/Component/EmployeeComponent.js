import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Service/EmployeeService'
import { useNavigate ,useParams} from 'react-router-dom'

export const EmployeeComponent = () => {
    const[firstname,setFirstName] = useState('')
    const[lastname,setLastName] = useState('')
    const[email,setEmail]=useState('')
    const{id}= useParams();
    
    const [errors, SetErrors]=useState({
        firstname:'',
        lastname:'',
        email:''
    })

    const navigator = useNavigate();
useEffect(() => {

    if(id){
        getEmployee(id).then((response)=>{
            setFirstName(response.data.firstname);
            setLastName(response.data.lastname);
            setEmail(response.data.email);
        }).catch(error=>{
            console.error(error);
        })    

        }
    
    },[id])

    
    function handleFirstName(e){
        setFirstName(e.target.value);
    }


    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function saveOrUpdateEmployee(e){
        e.preventDefault();
        if(validateForm()){
            const employee ={firstname,lastname,email}
            console.log(employee)

            if(id){
                updateEmployee(id,employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error =>{
                    console.error(error);
                })
            }else{
                createEmployee(employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error => {
                    console.error(error);
                })
            }
           
    
           
        }

        
    }

    function validateForm(){
        let valid = true;
        const errorsCopy = {...errors}

        if(firstname.trim()){
            errorsCopy.firstname = '';
        }else{
            errorsCopy.firstname = 'first name is required';
            valid = false;
        }

        if(lastname.trim()){
            errorsCopy.lastname = '';
        }else{
            errorsCopy.lastname = 'last name is required';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email ='';
        }else{
            errorsCopy.email='Email is required'
        }

        SetErrors(errorsCopy);

        return valid;

        
    }
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
  return (
    <div className='container'> 
    <br/><br/>
        <div className='row'>
            <div className='card col-md-6  offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                {/* <h2 className='text-center'>Add Employee</h2> */}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>first Name:</label>
                            <input
                                type='text'
                                placeholder='Enter your firstName'
                                name='firstname'
                                value={firstname}
                                className={`form-control ${errors.firstname ? 'is-invalid':'' }`}
                                onChange={handleFirstName}
                            >

                            </input>
                            {errors.firstname && <div className='invalid-feedback'>{errors.firstname}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input
                                type='text'
                                placeholder='Enter your LasttName'
                                name='lastname'
                                value={lastname}
                                className={`form-control ${errors.lastname ? 'is-invalid':'' }`}
                                onChange={handleLastName}
                            >

                            </input>
                            {errors.lastname && <div className='invalid-feedback'>{errors.lastname}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Enter your Email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid':'' }`}
                                onChange={handleEmail}
                            >

                            </input>
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <button type = 'submit' className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}
