import React, {useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import "../assets/custom.css"

const Dashboard = (props) => {
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            window.location.href = '/'
        }
    }, []);
  return (
    <div className="text-center">
        <h2>Welcome To Bace Group</h2>
    </div>
  
  );
}

export default Dashboard;