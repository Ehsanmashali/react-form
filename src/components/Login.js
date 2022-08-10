import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Validate } from "./Validate";
import { notify } from "./toast";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [errors, seterrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    seterrors(Validate(data, "Login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const focusHanlder = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You Loged in successfully", "success");
      console.log(data);
    } else {
      notify("Invalid data!", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Login</h2>
        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHanlder}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHanlder}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/signUp">SignUp</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default Login;
