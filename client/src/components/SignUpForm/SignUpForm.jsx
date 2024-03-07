import React, { useState } from "react";
import "./SignUpForm.scss";
import {
  containsLowercase,
  containsUppercase,
  containsDigit,
  containsSpecialCharacter,
  isLengthValid,
} from "../../utils/PasswordUtils";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "confirmPassword") {
      setPasswordMatch(formData.password === value);
    }
    if (name === "password") {
      setPasswordValid(passwordRegex.test(value));
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const passwordEntered = formData.password.trim() !== "";

  return (
    <div className="SignUpContainer">
      <h2>Sign Up</h2>
      <form className="SignUpForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" required>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" required>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password" required>
            Password:
          </label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="password"
              className="password-toggle"
              onClick={toggleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </label>
          </div>
        </div>

        {passwordEntered && (
          <ul className="error-list">
            <li
              className={
                containsLowercase(formData.password) ? "valid" : "invalid"
              }
            >
              Must contain at least one lowercase letter
            </li>
            <li
              className={
                containsUppercase(formData.password) ? "valid" : "invalid"
              }
            >
              Must contain at least one uppercase letter
            </li>
            <li
              className={containsDigit(formData.password) ? "valid" : "invalid"}
            >
              Must contain at least one number
            </li>
            <li
              className={
                containsSpecialCharacter(formData.password)
                  ? "valid"
                  : "invalid"
              }
            >
              Must contain at least one symbol
            </li>
            <li
              className={isLengthValid(formData.password) ? "valid" : "invalid"}
            >
              Must be at least 8 characters long
            </li>
          </ul>
        )}
        <div>
          <label htmlFor="confirmPassword" required>
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {!passwordMatch && <div className="error">Passwords do not match</div>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
