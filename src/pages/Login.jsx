import React, { useState, useRef } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { axiosInstance } from "..";

const backend = process.env.REACT_APP_BACKEND;

export default function Login() {
  const textInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const [error,setError] = useState(null);

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    setError(null);
    try{
      console.log("Beginning of login")
      const {data} = await axiosInstance.post("/auth/login",
      {email:textInputRef.current.value,
         password:passwordInputRef.current.value},
         );
      console.log(data);
      navigate("/",{replace:true});
    }
    catch(err){
      console.log("here in error part");
      console.log(err.response.data);
      setError(err.response.data);
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
              <span>Email</span>
              <input type="email" ref={textInputRef}></input>
              <span>Password</span>
              <input type="password" ref={passwordInputRef}></input>
              <button type="submit">Sign in</button>
            </form>
            <div className={styles["login-right-part-item-4"]}>
            {error?   <Alert className={styles["error-box-login"]} status='error'>
                        <AlertIcon />
                        {error}
                      </Alert> 
                      :
                       null}
              <span className={styles["login-no-account-row"]}>
                No account ?
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/register", { replace: true });
                  }}
                  className={styles["login-change-page-button"]}
                >
                  {" Sign Up"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
