import React, { useState } from "react";
const USERS_KEY = "users";
const USER_KEY = "user";

// Initialise local storage "users" with data, if the data is already set this function returns immediately.
function initUsers() {

  // const [users, setUsers] = useState([]);

  // Stop if data is already initialised.
  if(localStorage.getItem(USERS_KEY) !== null)
    return;

  const users = [
    {
      username: "1", 
      email: "1@gmail.com", 
      password: "2", 
      joiningDate: ""
    }
  ];

  //setUser({});  // Empty.

  // Set data into local storage.
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function addUser(oneUser) {
  console.log(oneUser);
  const users = getUsers();  // Old users. 
    const length = users.length;
    console.log(length);
    users[length] = oneUser;  // Add one user.

  setUsers(users);  // New users.
}

function updateUsername(email, newUsername) {
  const users = getUsers(); 
  for(const user of users) {
    if(email === user.email) {
      user.username = newUsername; 
    }
  }
  setUsers(users); 
}

function updatePassword(email, newPassword) {
  const users = getUsers(); 
  for(const user of users) {
    if(email === user.email) {
      user.password = newPassword; 
    }
  }
  setUsers(users);
}

function deleteUser(oneUserName) {
  
  const users = getUsers();  // Old users. 
  console.log(users);
  const newUsers = users.filter((item) => item.username !== oneUserName);
  // delete users[oneUserName];
  console.log(newUsers);
  setUsers(newUsers);  // New users.
}

function getUsers() {
  // Extract user data from local storage.
  const data = localStorage.getItem(USERS_KEY);
  console.log(data);
  // Convert data to objects.
  return JSON.parse(data);
}

function getEmail(username) {
  const users = getUsers();
  for(const user of users) {
    if(username === user.username)
    {
      return user.email;
    }
  }
}

function setUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function verifyUser(username, email) {
  console.log(username); 
  console.log(email); 
  const users = getUsers();
  for(const user of users) {
    if(username === user.username)
    {
      // setUser(username);
      return true;
    }
    if(email === user.email)
    {
      return true;
    }
  }
  return false;
}

function getJoiningDate(username) {
  const users = getUsers();
  for(const user of users) {
    if(username === user.username)
    {
      return user.joiningDate;
    }
  }
}

function verifyLogin(email, password) {
  const users = getUsers();
  console.log(email);
  console.log(password);
  for(const user of users) {
    if(email === user.email && password === user.password)
    {
      // setUser(username);
      return user.username;
    }
  }
  return false;
}

// function verifyUser(username, email, password) {
//   const users = getUsers();
//   for(const user of users) {
//     if(username === user.username && email === user.email && password === user.password)
//     {
//       setUser(username);
//       return true;
//     }
//   }

//   return false;
// }

function setUser(username) {
  localStorage.setItem(USER_KEY, username);
}

function getUser() {
  return localStorage.getItem(USER_KEY);
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

export {
  initUsers,
  addUser,
  updateUsername,
  updatePassword, 
  deleteUser,
  getUsers, 
  getEmail,
  setUsers,
  verifyUser,
  getJoiningDate, 
  verifyLogin,
  getUser,
  removeUser
}
