import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="background-container"></div>
      <div className="image-join">
        <img src="assets/coding.png" alt="Coding" width="240" height="180" />
      </div>
      <div className="form-container">
        <h1 className="title">Join Coders Now!</h1>
        <div className="col-3">
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>
        <div className="col-3">
          <input
            type="text"
            name="password"
            id="password"
            minLength="8"
            required
            placeholder="Password"
          />
        </div>
        <div className="col-4">
          <input type="submit" value="Sign In" />
          <p>
            New to CodeCLA? <a href="join-now.html">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
