import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import "./SignUpForm.css";
import Dropdown from "./Dropdown";

function SignUpForm(props) {
  const [full_name, setFullName] = useState("");
  const [user_name, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUType] = useState("");

  return (

    <div className="mycontainer">
      <div className="center">
        <div className="login-box">
          <h1 className="sign-up">Sign Up</h1>
          <form>
            <TextField onChange={e => setFullName(e.target.value)} class="fas fa-user" placeholder="Full name" />
            <TextField onChange={e => setUName(e.target.value)} class="fas fa-user" placeholder="User name" />
            <TextField onChange={e => setEmail(e.target.value)} class="fas fa-envelope" placeholder="Email" />
            <TextField onChange={e => setPassword(e.target.value)} class="fas fa-user-lock" placeholder="Password" />
            <Dropdown onChange={e => setUType(e.target.value)} />
            <Button 
              onClick={ async() => {
                const user = {full_name,user_name,email,password,user_type};
                const response = await fetch('/register', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(user)
                })
                if (response.ok) {
                  console.log("response worked!")
                }
              }
              } 
              class="btn1"
              text="register"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
