import axios from 'axios';
import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import "../assets/custom.css"

const SignIn = (props) => {
    const [state, setState] = useState({
        email: "",
        password: "", 
        errorMessage: ""
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

   const submitSignin = (e) => {
       e.preventDefault();
    const {email, password} = state;
    
    axios.post('http://localhost:5000/api/auth/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
       if(response.status === 200){
           const {token} = response.data
           localStorage.setItem('token', token);
        window.location.href = "/dashboard"
        console.log(response)
       }
      })
      .catch(function (error) {
        setState({
            ...state, 
            errorMessage: error.message
        })
      });
   } 
   console.log(state, 'stat')
  return (
    <div className="text-center">
          <form className="form-signin" onSubmit={submitSignin}>
        {/* <img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width={72} height={72} /> */}
        <h1 className="h3 mb-3 font-weight-normal">Welcome to Bace Group</h1>
        <h4>{state.errorMessage !== "" ? state.errorMessage : ""}</h4>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required 
        autoFocus onChange={handleChange} value={state.email} name="email" />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
        value={state.password} onChange={handleChange} name="password" />
        <div className="checkbox mb-3">
          
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        
      </form>
      </div>
  
  );
}

export default SignIn;