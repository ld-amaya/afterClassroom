import React, {useState, useEffect} from 'react';
import Navbar from './routes/Navbar';
import Router from './routes/Router';
import UserContext from './context/UserContext';
import afterClassroomAPI from './api';
import { decodeToken } from 'react-jwt';
import './App.css';


function App() {
  const [token, setToken] = useState(null);
  const [topics, setTopics] = useState([]);
  const [user, setUser] = useState(null);
  const [isTeacher, setIsTeacher] = useState(false);

  useEffect(() => {
    async function getUser() {
      if (token) {
        afterClassroomAPI.token = token
        const { username, is_teacher } = decodeToken(token)
        setUser(username);
        setIsTeacher(is_teacher);
      }
    }
    getUser()
  }, [token])
  
  useEffect(() => {
      async function getTopics() {
          const t = await afterClassroomAPI.topics();
          setTopics(t);
      }
      getTopics();
  }, [token]);
  
  async function login(credentails) {
    try {
      let tok = await afterClassroomAPI.login(credentails);
      setToken(tok)
      return ({success: true})
    } catch (err) {
      return ({success: false, err: err})
    } 
  }

  const logout = () => {
    setUser(null);
  }

  async function signup(credentials) {
    try {
      const tok = await afterClassroomAPI.signup(credentials);
      setToken(tok)
      return {success:true}
    } catch (err) {
      return {success:false, err}
    }
  }

  return (
    <div className="App">
      <UserContext.Provider
        value = {{topics, setTopics, user, isTeacher, login, logout, signup}}>
        <Navbar />
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;
