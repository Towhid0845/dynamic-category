"use client";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import { useState, useEffect } from "react";


function Login() {
   const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  // Autofill password on page load if stored in localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    window.location.href = "/";
    console.log("Logging in with email:", email, "password:", password);
  };

  return (
    <>
      <Header />
      <section className="login-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-5 col-12 login-img"
              style={{ backgroundImage: "url(/images/login.jpg)" }}
            ></div>

            <div className="col-lg-5 col-12 bg-white d-flex p-0 shadow">
              <form
                className="login-form-wrap p-3 p-md-6 p-lg-6 w-100"
                onSubmit={handleSubmit}
              >
                <div className="text-center mb-4">
                  <Link href="/">
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      width={100}
                      height={30}
                    />
                  </Link>
                </div>
                <h4 className="mb-3">
                  Hey there!
                  <br />
                  Welcome to <span>Alzaf.com</span>
                </h4>
                <div className="d-flex flex-column gap-3">
                  <div className="input-field">
                    <label htmlFor="">Phone Number or Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Phone or Email"
                      className="auth-input"
                    />
                  </div>
                  <div className="input-field check-password">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Password"
                      className="auth-input"
                    />

                    <span className="eye eye-icon">
                      <i data-feather="eye-off"></i>
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label htmlFor="vehicle1"> Remember for 30 days</label>
                    </div>
                    <Link href="#" className="fs-sm">
                      Forgot Password
                    </Link>
                  </div>
                  <button type="submit" className="create-btn w-100">
                    Sign In
                  </button>
                  <span className="text-center">or</span>
                  <Link href="#" className="google-btn w-100">
                    <Image
                      src="/images/google.png"
                      alt="google"
                      className="me-2"
                      width={25}
                      height={25}
                    />
                    Sign In with Google
                  </Link>
                  <Link href="#" className="google-btn w-100">
                    <Image
                      src="/images/facebook.png"
                      alt="google"
                      width={25}
                      height={25}
                      className="me-2"
                    />
                    Sign In with Facebook
                  </Link>
                </div>
                <p className="mb-0 fs-xs mt-4">
                  Don&apos;t have an Account?{" "}
                  <Link href="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
