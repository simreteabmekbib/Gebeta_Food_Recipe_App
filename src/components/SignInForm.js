import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import "./SignUpForm.css";

function SignInForm() {
  const [user_name, setUName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mycontainer">
      <div className="center">
        <div className="login-box">
          <h1 className="sign-up">Sign In</h1>
          <form>
            <TextField onChange={e => setUName(e.target.value)} class="fas fa-user" placeholder="Username" />
            <TextField onChange={e => setPassword(e.target.value)} class="fas fa-user-lock" placeholder="Password" />
            
            <Button class="btn1" text="Login" onClick={ async() => {
                const user = {user_name,password};
                const response = await fetch('/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(user)
                })
                if (response.ok) {
                  //window.location.replace("/");
                  response.json().then(data => {
                    // do something with your data
                   localStorage.setItem("user_id", `${data.user_id}`)
                   localStorage.setItem("user_name", `${data.user_name}`)
                   localStorage.setItem("user_type", `${data.user_type}`)

                  });
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

export default SignInForm;
