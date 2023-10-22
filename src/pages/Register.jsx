import React, { useState, useRef } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { axiosInstance } from "..";
import { passwordStrength } from 'check-password-strength';


export default function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const [error,setError] = useState(null);
  const navigate = useNavigate();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    setError(null);
    try{
      const firstName= firstNameRef.current.value;
      const lastName = lastNameRef.current.value;
      const age = ageRef.current.value;
      const email =emailInputRef.current.value
      const password =passwordInputRef.current.value;
      if (age <0 || age >100){
        setError("Invalid age");
        return;
      }
      if (passwordStrength(password).value < 2 ){
        setError("Weak Password");
        return;
      }
      if (firstName && lastName && age && email && password){
        const {data} = await axiosInstance.post("/auth/signup",
        { firstName,lastName,age,email,password},);
           navigate("/",{replace:true}); 
      }
      else{
        setError("Please fill all inputs");
      }
    }
    catch(err){
      console.log(err);
      setError(err);
    }
  };
  return (
      <div className={styles["login-page"]}>
        <div
          className={styles["login-container"]}
        >
          <div className={styles["login-left-part"]}>
          </div>
          <div className={styles["login-right-part"]}>
            <div className={styles["login-right-part-item-1"]}>
              <h2>Habit Leaf</h2>
            </div>
            <form
              className={styles["login-right-part-item-3"]}
              onSubmit={loginSubmitHandler}
            >
              <span>First name</span>
              <input type="text" ref={firstNameRef}></input>
              <span>Last name</span>
              <input type="text" ref={lastNameRef}></input>
              <span>Age</span>
              <input type="number" ref={ageRef}></input>
              <span>Email</span>
              <input type="email" ref={emailInputRef}></input>
              <span>Password</span>
              <input type="password" ref={passwordInputRef}></input>

              <button type="submit">Sign Up</button>
            </form>
            <div className={styles["login-right-part-item-4"]}>
            {error?   <Alert className={styles["error-box-login"]} status='error'>
                        <AlertIcon />
                        {error}
                      </Alert> 
                      :
                       null}
              <span className={styles["login-no-account-row"]}>
                Have an account ?
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login", { replace: true });
                  }}
                  className={styles["login-change-page-button"]}
                >
                  {" Sign In"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
