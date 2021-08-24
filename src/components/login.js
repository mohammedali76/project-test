import React, { useState } from "react";
import Validate from "./validate";
import beach from "./image/beach.jpg";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [records, setRecords] = useState([]);
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validate(values));
    const details = {
      ...values,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, details]);
    console.log(records);
  };
  console.log(beach);

  return (
    <>
      <div className="container">
        <div className="beach">
          <img src={beach} alt="100" height="100%" width="100%" />
        </div>

        <div className="app">
          <div>
            <h2 className="title">Welcome Back</h2>
            <h3 className="titles">Please Login into Your Account</h3>
          </div>
          <form className="form-wrapper">
            <div className="email">
              <label className="label"> Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="password">
              <label className="label"> Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
              <button className="submit" onClick={handleFormSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        {records.map((latest) => {
          return (
            <div className="showDataStyle">
              <p>{latest.email}</p>
              <p>{latest.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Login;
