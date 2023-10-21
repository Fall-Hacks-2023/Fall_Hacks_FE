import React, { useState, useRef } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const textInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("In the login submit handler");
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
              <span>Email</span>
              <input type="email" ref={textInputRef}></input>
              <span>Password</span>
              <input type="password" ref={passwordInputRef}></input>
              <button type="submit">Sign in</button>
            </form>
            <div className={styles["login-right-part-item-4"]}>
            {/*error*/}
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
