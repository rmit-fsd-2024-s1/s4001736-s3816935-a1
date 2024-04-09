import React, { useState } from "react";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
import { verifyUser, verifyLogin } from "../repository/credentials";
import { getUsers, getEmail, updateUsername, updatePassword, deleteUser, getJoiningDate } from "../repository/credentials";
import profilePic from "../icons/usericon.jpg"; 
import deleteButton from "../icons/deleteicon.png"; 
import editUsername from "../icons/editicon.png";
import changePassword from "../icons/editpw.png";

export default function MyProfile(props){
  const [euShown, setEUShown] = useState(false);
  const [cpShown, setCPShown] = useState(false); 
  const [usernameFields, setUsernameFields] = useState({username: "", password: ""}); 
  const [passwordFields, setPasswordFields] = useState({oldPassword: "", newPassword: "", repeatPassword: ""});
  const [users, setUsers] = useState(getUsers()); 
  const email = getEmail(props.username);
  const joiningDate = getJoiningDate(props.username); 
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); 

  const showEditUsername = () => {
    //event.preventDefault();
    setEUShown(true);
    setCPShown(false);
  }

  const hideEditUsername = () => {
    setEUShown(false);
  }

  const showChangePassword = () => {
    setCPShown(true);
    setEUShown(false);
  }

  const hideChangePassword = () => {
    setCPShown(false);
  }

  const hideEdits = () => {
    setEUShown(false);
    setCPShown(false);
  }

  const deleteAcc = (event) => {
    event.preventDefault();
    console.log(props.username);
    deleteUser(props.username);
    props.logoutUser();
    setUsers(getUsers());  
    
    navigate("/signup");
    alert("Your account has been deleted!"); 
  }

  // Generic change handler.
  const handleUsernameChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Copy usernameFields.
    const temp = { username: usernameFields.username, password: usernameFields.password };
    // OR use spread operator.
    // const temp = { ...usernameFields };

    // Update field and state.
    temp[name] = value;
    setUsernameFields(temp);
  }

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    // console.log(email);
    // console.log(usernameFields.username, usernameFields.password);
    //const verified = false;
    const verifyPassword = verifyLogin(email, usernameFields.password);   // Verifying password is basically same as login, checking email and password from localstorage

    if(verifyPassword === false) {   // If password is incorrect
      const temp = { ...usernameFields };
      temp.username = ""; 
      temp.password = "";
      setUsernameFields(temp);
    
      setErrorMessage("Password is incorrect.");

      return;
    }

    const verifyUsername = verifyUser(usernameFields.username, null);   // Only checking username, so set email to null to not return true

    if(verifyUsername !== false) {   // If username already exists
      const temp = { ...usernameFields };
      temp.username = ""; 
      temp.password = "";
      setUsernameFields(temp);
    
      setErrorMessage("Username already exists.");

      return;
    }

    updateUsername(email, usernameFields.username); 
    // props.logoutUser();
    props.loginUser(usernameFields.username);   // Login with the new username to update all the usernames on the pages

    const temp = { ...usernameFields };
    temp.username = ""; 
    temp.password = "";
    setUsernameFields(temp);

    // setEUShown(false);
    navigate("/profile");
    alert("Username changed successfully!");
    
  }

  const handlePasswordChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Copy Fields.
    const temp = { oldPassword: passwordFields.oldPassword, newPassword: passwordFields.newPassword, repeatPassword: passwordFields.repeatPassword };

    // Update field and state.
    temp[name] = value;
    setPasswordFields(temp);
  }

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    const verifyPassword = verifyLogin(email, passwordFields.oldPassword);   // Verifying password is basically same as login, checking email and password from localstorage

    if(verifyPassword === false) {   // If password is incorrect
      const temp = { ...passwordFields };
      temp.oldPassword = ""; 
      temp.newPassword = "";
      temp.repeatPassword = ""; 
      setPasswordFields(temp);
    
      setErrorMessage("Password is incorrect.");

      return;
    }

    if(passwordFields.newPassword !== passwordFields.repeatPassword) {
      const temp = { ...passwordFields };
      temp.oldPassword = ""; 
      temp.newPassword = "";
      temp.repeatPassword = ""; 
      setPasswordFields(temp);
    
      setErrorMessage("Repeat password does not match new password");

      return;
    }

    updatePassword(email, passwordFields.newPassword); 

    const temp = { ...passwordFields };
    temp.oldPassword = ""; 
    temp.newPassword = "";
    temp.repeatPassword = ""; 
    setPasswordFields(temp);

    alert("Password changed successfully!");

  }

  return (
    <div className="main">
      <h1>My Profile</h1>
      <img src={profilePic} className="profileicon" alt="profilepic"/>
      <h4><strong>{props.username}</strong></h4>
      <div>Email: {email}</div>
      <div>Date of Joining: {joiningDate}</div>
      <br/><button onClick={showEditUsername}><img src={editUsername} className="smallicon" alt="editUsername"/>Edit Username</button>
      <button onClick={showChangePassword}><img src={changePassword} className="smallicon" alt="changePassword"/>Change Password</button>
      <Popup trigger={
      <button onClick={hideEdits}><img src={deleteButton} className="smallicon" alt="delete"/>Delete Account</button>}>
        {
          close => (
            <div className="main">
              Are you sure you want to delete this account? 
              <button type="button" onClick={deleteAcc}>
                Yes
              </button>
              <button type="button" onClick={() => close()}>
                Cancel
              </button>
            </div>
          )
        }
      </Popup>
      {euShown &&
        <div className="form">
          <div className="col-md-5">
            <form onSubmit={handleUsernameSubmit}>
              <h1>Edit Username</h1>
              <div className="form-group">
                <label htmlFor="username" className="control-label">New Username</label>                            
                <input name="username" id="username" className="form-control"
                value={usernameFields.username} onChange={handleUsernameChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="control-label">Enter Password</label>                            
                <input type="password" name="password" id="password" className="form-control"
                value={usernameFields.password} onChange={handleUsernameChange} />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary mr-3" value="Submit" />
                <button className="btn btn-danger" onClick={hideEditUsername}>Cancel</button>
              </div>
              
              {errorMessage !== null &&
                <div className="form-group">
                  <span className="text-danger">{errorMessage}</span>
                </div>
              }      
            </form>
          </div>
        </div>
      }
      {cpShown &&
        <div className="form">
          <div className="col-md-5">
            <form onSubmit={handlePasswordSubmit}>
              <h1>Change Password</h1>
              <div className="form-group">
                <label htmlFor="oldPassword" className="control-label">Enter Current Password</label>                            
                <input type="password" name="oldPassword" id="oldPassword" className="form-control"
                value={passwordFields.oldPassword} onChange={handlePasswordChange} />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword" className="control-label">New Password</label>                            
                <input type="password" name="newPassword" id="newPassword" className="form-control"
                value={passwordFields.newPassword} onChange={handlePasswordChange} />
              </div>
              <div className="form-group">
                <label htmlFor="repeatPassword" className="control-label">Repeat Password</label>                            
                <input type="password" name="repeatPassword" id="repeatPassword" className="form-control"
                value={passwordFields.repeatPassword} onChange={handlePasswordChange} />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary mr-3" value="Submit" />
                <button className="btn btn-danger" onClick={hideChangePassword}>Cancel</button>
              </div>
              
              {errorMessage !== null &&
                <div className="form-group">
                  <span className="text-danger">{errorMessage}</span>
                </div>
              }      
            </form>
          </div>
        </div>
      }
      
    </div>
  );
}

