
"use client";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import { useState, useEffect } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    minLength: false,
    uppercase: false,
    digit: false,
    specialChar: false,
    confirmPassword: "",
  });


  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Check password criteria and update errors
    setErrors((prevErrors) => ({
      ...prevErrors,
      minLength: value.length < 8,
      uppercase: !/[A-Z]/.test(value),
      digit: !/\d/.test(value),
      specialChar: !/[@$!%*?&]/.test(value),
    }));

    // Check confirm password match
    if (confirmPassword && confirmPassword !== value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "",
      }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    // Check confirm password match
    if (value !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !errors.minLength &&
      !errors.uppercase &&
      !errors.digit &&
      !errors.specialChar &&
      !errors.confirmPassword
    ) {
      // Proceed with form submission
      console.log("Form submitted");
       localStorage.setItem("userEmail", email);
       localStorage.setItem("userPassword", password);
      window.location.href = "/login";
      // if (isClient) { 
      //   router.push("/login"); // Redirect to login page
      // }
    } else {
      console.log("Invalid password or confirm password mismatch");
    }
  };

  return (
    <>
      <Header />
      <section className="login-section">
        <div className="container">
          <div className="row justify-content-center bg-white shadow py-5">
            <div className="col-lg-5 col-12">
              <h4 className="mb-3">Welcome to Alzaf.com</h4>
              <form
                className="login-form-wrap px-3 w-100"
                onSubmit={handleSubmit}
              >
                <div className="d-flex flex-column gap-3">
                  <div className="input-field">
                    <label htmlFor="">Full name</label>
                    <input
                      type="text"
                      placeholder="KhHumayun Kabir"
                      className="auth-input"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="">Phone Number or Email</label>
                    <input
                      type="text"
                      placeholder="Phone or Email"
                      className="auth-input"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-field check-password">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="auth-input"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                    <span className="eye eye-icon">
                      <i data-feather="eye-off"></i>
                    </span>
                  </div>

                  <div className="error-messages">
                    {errors.minLength && (
                      <p className="error-message">
                        Password must be at least 8 characters long.
                      </p>
                    )}
                    {errors.uppercase && (
                      <p className="error-message">
                        Password must contain at least one uppercase letter.
                      </p>
                    )}
                    {errors.digit && (
                      <p className="error-message">
                        Password must contain at least one digit.
                      </p>
                    )}
                    {errors.specialChar && (
                      <p className="error-message">
                        Password must contain at least one special character.
                      </p>
                    )}
                  </div>

                  <div className="input-field check-password">
                    <label htmlFor="">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="auth-input"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      required
                    />
                    <span className="eye eye-icon">
                      <i data-feather="eye"></i>
                    </span>
                  </div>
                  {errors.confirmPassword && (
                    <p className="error-message">{errors.confirmPassword}</p>
                  )}
                  <button type="submit" className="create-btn w-100">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-5 col-12">
              <h4 className="mb-3 text-end mt-5 mt-lg-0">
                <Link href="login">Login</Link>
              </h4>
              <form className="login-form-wrap px-3  w-100">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex align-items-start gap-1">
                      <div className="d-flex flex-column">
                        <label htmlFor="">Birthday</label>
                        <div>
                          <select id="dobday"></select>
                          <select id="dobmonth"></select>
                          <select id="dobyear"></select>
                        </div>
                      </div>
                      <div className="input-field d-flex flex-column">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender">
                          <option defaultValue="gender">Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Others</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="custome_checkbox"
                      />
                      <label htmlFor="vehicle1">
                        {" "}
                        I’d like to receive exclusive offers and promotions via
                        SMS.
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="create-btn w-100">
                    Sign Up
                  </button>
                  <span className="text-center">or</span>
                  <Link href="#" className="google-btn w-100">
                    <Image
                      src="/images/google.png"
                      alt="google"
                      width={25}
                      height={25}
                      className="me-2"
                    />
                    Sign Up with Google
                  </Link>
                  <Link href="#" className="google-btn w-100">
                    <Image
                      src="/images/facebook.png"
                      alt="google"
                      width={25}
                      height={25}
                      className="me-2"
                    />
                    Sign Up with Facebook
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
