import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmedPasswordValid, setIsConfirmedPasswordValid] =
    useState(false);

  function signingUp(event) {
    event.preventDefault();
    if (isEmailValid && isPasswordValid && isConfirmedPasswordValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Form cannot be submitted!");
    }
  }

  function emailValidity(event) {
    setEmail(event.target.value);
    setIsEmailValid(
      event.target.value.indexOf("@") > 0 &&
        event.target.value.indexOf(".") > 2 &&
        event.target.value.indexOf(".") < event.target.value.length - 1
    );
  }

  function passwordValidity(event) {
    setPassword(event.target.value);
    setIsPasswordValid(event.target.value.length >= 8);
    setIsConfirmedPasswordValid(
      confirmedPassword !== "" &&
        confirmedPassword.length >= 8 &&
        confirmedPassword === event.target.value
    );
  }

  function passwordsMatching(event) {
    setConfirmedPassword(event.target.value);
    setIsConfirmedPasswordValid(
      event.target.value !== "" &&
        event.target.value.length >= 8 &&
        event.target.value === password
    );
  }
  if (document.getElementById("email")) {
    if (isEmailValid) {
      document.getElementById("email").classList.add("valid");
    } else {
      document.getElementById("email").classList.remove("valid");
    }
  }

  if (document.getElementById("password")) {
    if (isPasswordValid) {
      document.getElementById("password").classList.add("valid");
    } else {
      document.getElementById("password").classList.remove("valid");
    }
  }

  if (document.getElementById("confirm-password")) {
    if (isConfirmedPasswordValid) {
      document.getElementById("confirm-password").classList.add("valid");
    } else {
      document.getElementById("confirm-password").classList.remove("valid");
    }
  }

  return (
    <form onSubmit={signingUp}>
      <label htmlFor="email">Email :</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={emailValidity}
      />
      {!isEmailValid && <p>Invalid email format</p>}

      <label htmlFor="password">Password :</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={passwordValidity}
      />
      {!isPasswordValid && <p>Password must be atleast 8 characters</p>}
      <label htmlFor="confirm-password">Confirm Password :</label>
      <input
        id="confirm-password"
        type="password"
        placeholder="Enter your password again"
        value={confirmedPassword}
        onChange={passwordsMatching}
      />
      {!isConfirmedPasswordValid && <p>Passwords do not match</p>}
      <button>Sign Up</button>
    </form>
  );
}

export default App;
