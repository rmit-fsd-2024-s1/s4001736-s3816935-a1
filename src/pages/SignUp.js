import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser, getUsers, addUser} from "../repository/credentials";
// import {validate} from "../data/validation";

export default function SignUp(props) {
    const [fields, setFields] = useState({ username: "", email: "", password: "" });
    const [users, setUsers] = useState(getUsers());
    const [errors, setErrors] = useState({email: "", password: "" });

    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const today = new Date().toDateString();

    // Generic change handler.
    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // Copy fields.
        const temp = { username: fields.username, email: fields.email, password: fields.password, joiningDate: today };
        // OR use spread operator.
        // const temp = { ...fields };

        // Update field and state.
        temp[name] = value;
        setFields(temp);
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if(!fields.username) {
            alert('Username is required');
            return;
        }

        if (!fields.email) {
            alert('Email address is required');
            return; 
          } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
            alert('Email address is invalid, please input correct email');
            return;
          }
        if (!fields.password) {
            alert('Password is required');
            return;
        }
        // else if (fields.password.length < 8) {
        else if (!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,32}$/.test(fields.password)) {
            alert('Password must be 8-32 characters, has at least 3 lower letters, at least 2 capital letters, at least 2 numbers, and 1 special character (!@#$&*). ');
            return;
          }

        const verified = verifyUser(fields.username, fields.email);
        if(verified === false) {
            const user = { ...fields };  // Copy fields from inputs.
                // console.log(user);
            //props.loginUser(fields.username);
            addUser(user);
            setUsers(getUsers());  // Update state.
            props.loginUser(fields.username);
      
            // Navigate to the home page.
            navigate("/profile");
            alert("Sign up successful!")
            return;
          }
      
        // Reset password field to blank.
        const temp = { ...fields };
        temp.password = "";
        setFields(temp);
      
        // Set error message.
        setErrorMessage("Name or Email already exists.");

        // console.log(errors);
        // // console.log(fields.username, fields.email, fields.password);
        // //const verified = false;

        // const values = { email: fields.email, password: fields.password };
        // // console.log(values.email); 
        // // console.log(values.password); 
        // // if (event) event.preventDefault();
        // setErrors(validate(values));
        // console.log(errors);

        // if(Object.keys(errors).length === 0) {
        //     const verified = verifyUser(fields.username, fields.email);
    
        //     // If user does not exist.
        //     if(verified === false) {
        //       const user = { ...fields };  // Copy fields from inputs.
        //           // console.log(user);
        //       //props.loginUser(fields.username);
        //       addUser(user);
        //       setUsers(getUsers());  // Update state.
        //       props.loginUser(fields.username);
        
        //       // Navigate to the home page.
        //       navigate("/");
        //       alert("Sign up successful!")
        //       return;
        //     }
        
        //     // Reset password field to blank.
        //     const temp = { ...fields };
        //     temp.password = "";
        //     setFields(temp);
        
        //     // Set error message.
        //     setErrorMessage("Name or Email already exists.");
        // }

        // const temp = { ...fields };
        // temp.password = "";
        // setFields(temp);
        
    }
    return (
        <>
            <h1>Sign Up</h1> 
            <div className="form">
                <div className="col-md-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username" className="control-label">Name</label>                            
                            <input name="username" id="username" className="form-control"
                            value={fields.username} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="control-label">Email</label>                            
                            <input name="email" id="email" className="form-control"
                            value={fields.email} onChange={handleInputChange} />
                            {errors.email && (
                                <p className="help is-danger">{errors.email}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="control-label">Password</label>
                            <input type="password" name="password" id="password" className="form-control"
                            value={fields.password} onChange={handleInputChange} />
                            {errors.password && (
                                <p className="help is-danger">{errors.password}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />
                        </div>
                        {errorMessage !== null &&
                            <div className="form-group">
                                <span className="text-danger">{errorMessage}</span>
                            </div>
                        }            
                    </form>
                </div>
            </div>
        </>
    );
}
 
// const Register = (props) => {
 
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState(null);
//     const navigate = useNavigate();
 
//     function onChangeUsername(e) {
//         setUsername(e.target.value)
//     }
//     function onChangePassword(e) {
//         setPassword(e.target.value)
//     }
 
//     function onSubmit(e) {
//         e.preventDefault()
//         const verified = verifyUser(username, password);
//         if (verified === false) {
//             props.loginUser(username);
//             addUser(username, password)
//             navigate("/");
//             return;
//         }

        

//         // Set error message.
//         setErrorMessage("User already exists.");

//         //localStorage.setItem('username', username);
//         //localStorage.setItem('password', password);
//         // const data = localStorage.getItem('users');
//         //localStorage.setItem('users', JSON.stringify([{username:username,password:password}]));
//     }
 
//     function getData() {
//         console.log(localStorage.getItem('username'));
//         console.log(localStorage.getItem('password'))
//     }
//     return (
//         <>
//             <div className="main">
//                 <h1>How to store form data in local storage using reactjs</h1>
 
//                 <div>
//                     <form onSubmit={onSubmit}>
//                         <div>
//                             <label>Username</label>
//                             <input type="text" value={username} onChange={onChangeUsername} />
//                         </div>
//                         <div>
//                             <label>Password</label>
//                             <input type="password" value={password} onChange={onChangePassword} />
//                         </div>
//                         <button type="submit">Submit</button>
//                         {errorMessage !== null &&
//                             <div className="form-group">
//                                 <span className="text-danger">{errorMessage}</span>
//                             </div>
//                         }
//                         <button type="button" onClick={getData}>Get Data</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };
 