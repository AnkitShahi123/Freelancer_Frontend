import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    loginChk: false,
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitUser = (e) => {
    e.preventDefault();

    axios
      .post("https://freelancernepal.netlify.app:89/user/login", this.state)
      .then((response) => {
        this.setState({
          loginChk: true,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("firstname", response.data.firstname);
        localStorage.setItem("email", response.data.email);
        if (localStorage.getItem("role") === "Client") {
          window.location.href = "/addJob";
        } else if (localStorage.getItem("role") === "Freelancer") {
          window.location.href = "/showAllJob";
        } else {
            window.location.href = "/adminpanel";
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    if (this.state.loginChk === true) {
      return <Redirect to="/addJob" />;
    }
    if (localStorage.getItem("token")) {
      return <Redirect to="/addJob" />;
    }
    return (
      <div className="login">
        <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
          <div class="card card0 border-0">
            <div class="row d-flex">
              <div class="col-lg-6">
                <div class="card1 pb-5">
                  <div class="row">
                    <div class="row px-5 justify-content-center mt-3 mb-5 border-line">
                      {" "}
                      <h1>LOGIN</h1>{" "}
                    </div>
                  </div>
                  <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                    {" "}
                    <figure>
                      <img src="image/signin-image.jpg" alt="sing up image" />
                    </figure>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                  <h2>ENTER YOUR DETAILS HERE</h2>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>

                  <div class="row px-3">
                    {" "}
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Email Address</h6>
                    </label>{" "}
                    <input
                      class="mb-4"
                      type="text"
                      name="email"
                      class="form-rounded"
                      placeholder="Enter e-mail address"
                      value={this.state.email}
                      name="email"
                      onChange={this.inputHandler}
                      required
                    />{" "}
                  </div>
                  <div class="row px-3">
                    {" "}
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Password</h6>
                    </label>{" "}
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      class="form-rounded"
                      value={this.state.password}
                      name="password"
                      onChange={this.inputHandler}
                      required
                    />{" "}
                  </div>
                  <div class="row px-3 mb-4"></div>
                  <div class="row mb-3 px-3">
                    {" "}
                    <button
                      type="submit"
                      class="btn btn-blue text-center"
                      onClick={this.submitUser}
                    >
                      Login
                    </button>{" "}
                  </div>
                  <div class="row mb-4 px-3">
                    {" "}
                    <small class="font-weight-bold">
                      Don't have an account?{" "}
                      <a class="text-danger ">
                        <Link to="/signup">Register</Link>
                      </a>
                    </small>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
