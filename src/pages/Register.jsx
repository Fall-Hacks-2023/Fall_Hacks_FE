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
      const {data} = await axiosInstance.post("/auth/signup",
      { firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        age: ageRef.current.value
        ,email:emailInputRef.current.value,
         password:passwordInputRef.current.value},
         );
         navigate("/",{replace:true});
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
              <h2>SFU LEAFS</h2>
            </div>
            <form
              className={styles["login-right-part-item-3"]}
              onSubmit={loginSubmitHandler}
            >
              <span>First name</span>
              <input type="text" ref={firstNameRef}></input>
              <span>First name</span>
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
