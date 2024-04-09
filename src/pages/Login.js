import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../repository/credentials";

export default function Login(props) {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  // Generic change handler.
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Copy fields.
    const temp = { email: fields.email, password: fields.password };
    // OR use spread operator.
    // const temp = { ...fields };

    // Update field and state.
    temp[name] = value;
    setFields(temp);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const verified = verifyLogin(fields.email, fields.password);

    // If verified login the user.
    if(verified !== false) {
      props.loginUser(verified);

      // Navigate to the home page.
      navigate("/profile");
      alert("Login successful!");
      return;
    }

    // Reset password field to blank.
    const temp = { ...fields };
    temp.password = "";
    setFields(temp);

    // Set error message.
    setErrorMessage("Email and / or password incorrect, please try again.");
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <div className="form">
        <div className="col-md-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="control-label">Email</label>                            
              <input name="email" id="email" className="form-control"
                value={fields.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="control-label">Password</label>
              <input type="password" name="password" id="password" className="form-control"
                value={fields.password} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
            {errorMessage !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage}</span>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

