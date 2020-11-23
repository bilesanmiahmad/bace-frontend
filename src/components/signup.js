import axios from 'axios';
import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import "../assets/custom.css"

const SignUp = (props) => {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "", 
        confirmPassword: "",
        errorMessage: ""
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

   const submitSignup = (e) => {
       e.preventDefault();
    const {username, email, password, confirmPassword} = state;
    
    axios.post('http://localhost:5000/api/auth/signup', {
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
       if(response.status === 200){
         window.location.href = "/"
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
          <form className="form-signin" onSubmit={submitSignup}>
        {/* <img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width={72} height={72} /> */}
        <h1 className="h3 mb-3 font-weight-normal">Bace Group</h1>
         <h4>{state.errorMessage !== "" ? state.errorMessage : ""}</h4>
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        <input type="text" id="inputUsername" className="form-control" placeholder="Username" required 
            value={state.username}
            name="username"
            onChange={handleChange}
        />
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" 
        required
        value={state.email}
        name="email"
        onChange={handleChange} />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
        value={state.password}
        name="password"
        onChange={handleChange}
        />
        <label htmlFor="inputConfirmPassword" className="sr-only">Confirm Password</label>
        <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" required
        value={state.confirmPassword}
        name="confirmPassword"
        onChange={handleChange}
        />
        <div className="checkbox mb-3">
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
      </form>
      </div>
  
  );
}

export default SignUp;