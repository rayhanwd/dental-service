import React, { useState,useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import LoginBg from './../../images/Group 140.png';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from './../../App';

const Login = () => {
    document.title = 'Log in';

    const [newUser, setnewUser] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      newUser: false,
      name: '',
      email: '',
      password: '',
      photo: ''
  
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    const history = useHistory();
  
    const location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
  
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleChange = (e) => {
  
      let isFieldValid = true;
  
      if (e.target.name === 'email') {
  
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
  
      }
      if (e.target.name === 'password') {
        const ispasswordvalid = e.target.value.length > 6;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFieldValid = ispasswordvalid && passwordHasNumber;
      }
      if (isFieldValid) {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
    }
  
    const handleSubmit = (e) => {
  
      if (newUser && user.email && user.password) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            history.replace(from);
          })
          .catch((error) => {
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
  
            setUser(newUserInfo);
  
          });
      }
  
      if (!newUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            history.replace(from);
          })
          .catch((error) => {
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
  
            setUser(newUserInfo);
          });
      }
  
      e.preventDefault();
    }
  
    const handleGoogleSignIn = () => {

        const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth()
          .signInWithPopup(GoogleProvider)
          .then((result) => {
    
            const { email, displayName, photoURL } = result.user;
            const signInUser =
            {
              isSignIn: true,
              name: displayName,
              email: email,
              // password:'',
              photo: photoURL
            };
            setLoggedInUser(signInUser);
            history.replace(from);
          }).catch((error) => {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            // The email of the user's account used.
            //var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            //var credential = error.credential;
            // ...
          });
      }

    return (
        <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
    );
};

export default Login;