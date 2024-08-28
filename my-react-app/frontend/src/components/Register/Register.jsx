import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Form submitted", formData);
  };

  return (
    <div className="background-container">
      <div className="image-join">
        <img src="assets/coding.png" alt="Coding" width="240" height="180" />
      </div>
      <div className="form-container">
        <h1 className="title">Join Coders Now!</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="col">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              minlength="8"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Sign Up" />
          </div>
          <div className="login-text">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
