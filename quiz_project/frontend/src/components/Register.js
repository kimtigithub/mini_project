import React, {useState, useEffect} from 'react';
import{Link} from "react-router-dom";
//import './App.css'
import axios from 'axios';

function Register(){
//const initialValues= {name:"", gender:"",contact:"",email:"",password:"",retypeNewPass:""};
//const[formValues,setFormValues] = useState(initialValues);
//const[formErrors,setFormErrors] = useState({});
//const[isSubmit,setIsSubmit] = useState(false);

const [values, setValues] = useState({
    name: '',
    gender:'',
    contact:'',
    email:'',
    password:'',
    retypeNewPass:''
})


/*const handleChange =(e) =>{
    const { name, value } = e.target;
    setFormValues({...formValues, [name]:value});
    };*/

    const handleSubmit = (event) =>{
        e.preventDefault();
        axios.post('')
        //setFormErrors(validate(formValues));
        //setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues);
}
    },[formErrors]);

    const validate = (values) =>{
    const errors = {};
    const regex= /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if(!values.name){
        errors.name = "name is required";
    }
    if(!values.gender){
        errors.gender = "gender is required";
    }
    if(!values.contact){
        errors.contact= "contact is required";
    }
    if(!values.password){
        errors.password = "password is required";
    }
    if(!values.retypeNewPass){
        errors.retypeNewPass = "retypenewpassword is required";
    }
    return errors;

    }

return (
    <div className="app">
     <div className="auth-form-container">
            <div className="image-container">
                <img src="/assets/d0333051d24ff9adba8cc63b100016a9.png" height="100px" width="100px" />
            </div>
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <form className="register-form" onSubmit={handleSubmit}>
               
            <p>{formErrors.name}</p>
                <div className="field">
                <label >Full name</label>
                <input type="text" 
                name="name"
                 placeholder="name" 
                 value={formValues.name}
                 onChange={handleChange} />
                 </div>
                 
                 <p>{formErrors.gender}</p>
                 <div className="field">
                <label>Gender</label>
                <input type="text"
                 name="gender" 
                 value={formValues.gender} 
                 onChange={handleChange} />
                 </div>

                 <p>{formErrors.contact}</p>
                <div className="field">
                <label >Contact No</label>
                <input type="text" 
                name="contact" 
                id="contact" 
                value={formValues.contact}
                onChange={handleChange}/>
                </div>

                <p>{formErrors.email}</p>
                <div className="field">
                 <label >Email</label>
                <input type="email"
                  name="email"
                  placeholder="youemail@gmail.com"
                  value={formValues.email}
                  onChange={handleChange} />
                  </div>

                  <p>{formErrors.password}</p>
                  <div className="field">
                <label>Password</label>
                <input type="password" 
                 name="password" 
                 placeholder="********"
                 value={formValues.password}
                 onChange={handleChange}/>
                 </div>

                 <p>{formErrors.retypeNewPass}</p>
                 <div className="field">
                <label > Retype New Password</label>
                <input type="retypeNewPass"
                  name="retypeNewPass"
                  placeholder="********"
                  value={formValues.retypeNewPass}
                  onChange={handleChange} />
                  </div>

                <Link to={"/Login"}>
      <button className="button1">Register</button>
    </Link>
            </form>
        </div>
  </div>
);
};
export default Register;


