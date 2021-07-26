import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

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
      .post("https://freelancerbackend.herokuapp.com/user/login", this.state)
      .then((response) => {
        this.setState({
          loginChk: true,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("firstname", response.data.firstname);
        localStorage.setItem("email", response.data.email);
        alert("Successfully logged in!!");
        if (localStorage.getItem("role") === "Client") {
          window.location.href = "/";
        } else if (localStorage.getItem("role") === "Freelancer") {
          window.location.href = "/";
        } else {
          window.location.href = "/adminpanel";
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    // if (this.state.loginChk === true) {
    //   return <Redirect to="/showAllJob" />;
    // }
    // if (localStorage.getItem("token")) {
    //   return <Redirect to="/showAllJob" />;
    // }
    return (
      // <div className="login">
      //   <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      //     <div class="card card0 border-0">
      //       <div class="row d-flex">
      //         <div class="col-lg-6">
      //           <div class="card1 pb-5">
      //             <div class="row">
      //               <div class="row px-5 justify-content-center mt-3 mb-5 border-line">
      //                 {" "}
      //                 <h1>LOGIN</h1>{" "}
      //               </div>
      //             </div>
      //             <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
      //               {" "}
      //               <figure>
      //                 <img src="image/signin-image.jpg" alt="sing up image" />
      //               </figure>
      //             </div>
      //           </div>
      //         </div>
      //         <div class="col-lg-6">
      //           <div class="card2 card border-0 px-4 py-5">
      //             <h2>ENTER YOUR DETAILS HERE</h2>
      //             <p></p>
      //             <p></p>
      //             <p></p>
      //             <p></p>
      //             <p></p>

      //             <div class="row px-3">
      //               {" "}
      //               <label class="mb-1">
      //                 <h6 class="mb-0 text-sm">Email Address</h6>
      //               </label>{" "}
      //               <input
      //                 class="mb-4"
      //                 type="text"
      //                 name="email"
      //                 class="form-rounded"
      //                 placeholder="Enter e-mail address"
      //                 value={this.state.email}
      //                 name="email"
      //                 onChange={this.inputHandler}
      //                 required
      //               />{" "}
      //             </div>
      //             <div class="row px-3">
      //               {" "}
      //               <label class="mb-1">
      //                 <h6 class="mb-0 text-sm">Password</h6>
      //               </label>{" "}
      //               <input
      //                 type="password"
      //                 name="password"
      //                 placeholder="Enter password"
      //                 class="form-rounded"
      //                 value={this.state.password}
      //                 name="password"
      //                 onChange={this.inputHandler}
      //                 required
      //               />{" "}
      //             </div>
      //             <div class="row px-3 mb-4"></div>
      //             <div class="row mb-3 px-3">
      //               {" "}
      //               <button
      //                 type="submit"
      //                 class="btn btn-blue text-center"
      //                 onClick={this.submitUser}
      //               >
      //                 Login
      //               </button>{" "}
      //             </div>
      //             <div class="row mb-4 px-3">
      //               {" "}
      //               <small class="font-weight-bold">
      //                 Don't have an account?{" "}
      //                 <a class="text-danger ">
      //                   <Link to="/signup">Register</Link>
      //                 </a>
      //               </small>{" "}
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      // ---login form
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            {/* <div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Login</h2>
				</div> */}
          </div>
          <div class="row justify-content-center">
            <div class="col-md-7 col-lg-5" style={{
                    marginTop: `-70px`,
                  }}>
              <div class="wrap">
                <div
                  class="img"
                  style={{
                    backgroundImage: `url("https://preview.colorlib.com/theme/bootstrap/login-form-15/images/xbg-1.jpg.pagespeed.ic.EtoN2PmO7Y.webp")`,
                  }}
                ></div>
                <div class="login-wrap p-4 p-md-5">
                  <div class="d-flex">
                    <div class="w-100">
                      <h3 class="mb-4">Login</h3>
                    </div>
                    <div class="w-100">
                      <p class="social-media d-flex justify-content-end">
                        <a
                          href="#"
                          class="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span class="fa fa-facebook"></span>
                        </a>
                        <a
                          href="#"
                          class="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span class="fa fa-twitter"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <form action="#" class="signin-form">
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        value={this.state.email}
                        name="email"
                        onChange={this.inputHandler}
                        required
                      />
                      <label class="form-control-placeholder" for="username">
                        Username
                      </label>
                    </div>
                    <div class="form-group">
                      <input
                        id="password-field"
                        type="password"
                        class="form-control"
                        value={this.state.password}
                        name="password"
                        onChange={this.inputHandler}
                        required
                      />
                      <label class="form-control-placeholder" for="password">
                        Password
                      </label>
                      <span
                        toggle="#password-field"
                        class="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="form-control btn btn-primary rounded submit px-3"
                        onClick={this.submitUser}
                      >
                        Sign In
                      </button>
                    </div>
                    <div class="form-group d-md-flex">
                      <div class="w-50 text-left">
                        <label class="checkbox-wrap checkbox-primary mb-0">
                          Remember Me
                          <input type="checkbox" checked />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="w-50 text-md-right">
                        <a href="#">Forgot Password</a>
                      </div>
                    </div>
                  </form>
                  <p class="text-center">
                    Not a member?{" "}
                    <a data-toggle="tab">
                      <Link to="/signup">Register</Link>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
