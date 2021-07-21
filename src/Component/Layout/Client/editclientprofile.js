import React, { Component } from "react";
import { Button } from "react-bootstrap";
const axios = require("axios").default;

export default class editclientProfile extends Component {
  state = {
    firstname: "",
    lastname: "",
    age: "",
    address: "",
    phone: "",
    email: "",
    createdAt: "",
    projects: "",
    photo: "",
    role: "",
    userbio: "",
    company: "",
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
    id: this.props.match.params.id,
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  async componentDidMount() {
    await axios({
      method: "get",
      url: "https://freelancerbackend.herokuapp.com/clientProfile",
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        console.log("Data:" + response.data._id);
        this.setState({
        //  id: response.data._id,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          userbio: response.data.userbio,
          age: response.data.age,
          email: response.data.email,
          address: response.data.address,
          phone: response.data.phone,
          photo: response.data.photo,
          projects: response.data.projects,
          role: response.data.role,
          company: response.data.company,
          createdAt: response.data.createdAt,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }


  updateProfile= (e) => {
    e.preventDefault();
    alert(this.state.id);
    const data = new FormData();
    //data.append("id", this.state.id);
    data.append("firstname", this.state.firstname);
    data.append("lastname", this.state.lastname);
    data.append("userbio", this.state.userbio);
    data.append("age", this.state.age);
    data.append("address", this.state.address);
    data.append("phone", this.state.phone);
    data.append("projects", this.state.projects);
    data.append("company", this.state.company);

    axios({
      method: "put",
      url: "https://freelancerbackend.herokuapp.com/profile/editProfileClient/" + this.state.id,
      data: data,
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        console.log(response);
        alert("profile update successfull");
        window.location.href = "/profileClient";
      })
      .catch((err) => {
        console.log(err.response);
        console.log("not updated");
        alert("update unsuccessfull");
      });
  };

  render() {
    
      var menu = (
        <div>
          <div class="container">
            <div class="main-body">
              <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Admin"
                          class="rounded-circle"
                          width="150"
                        />
                        <div class="mt-3">
                          <h4>
                            {this.state.firstname} {this.state.lastname}
                          </h4>
                          <p class="text-secondary mb-1">{this.state.email}</p>
                          <p class="text-muted font-size-sm">
                            {this.state.address}
                          </p>
                          User Bio
                          <p class="text-muted font-size-sm">
                            <input
                              type="text"
                              value={this.state.userbio}
                              name="userbio"
                              className="form-control"
                              onChange={this.changeHandler}
                            ></input>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card mt-3">
                    <div class="panel">
                      <div class="panel-heading">
                        <span class="panel-icon">
                          <i class="fa fa-pencil"></i>
                        </span>
                        <span class="panel-title">About Me</span>
                      </div>
                      <div class="panel-body pb5">
                        <h6>Company</h6>

                        <h4>
                          <input
                            type="text"
                            value={this.state.company}
                            name="company"
                            className="form-control"
                            onChange={this.changeHandler}
                          ></input>
                        </h4>
                      

                        <hr class="short br-lighter"></hr>

                        <h6>Projects</h6>

                        <h4> </h4>
                        <p class="text-muted pb10">
                          <input
                            type="text"
                            value={this.state.projects}
                            name="projects"
                            className="form-control"
                            onChange={this.changeHandler}
                          ></input>
                        </p>
                      </div>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-globe mr-2 icon-inline"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                          Website
                        </h6>
                        <span class="text-secondary">
                          https://testfreelancer.com
                        </span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github mr-2 icon-inline"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          Github
                        </h6>
                        <span class="text-secondary">testfreelancer</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-twitter mr-2 icon-inline text-info"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                          Twitter
                        </h6>
                        <span class="text-secondary">@testfreelancer</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram mr-2 icon-inline text-danger"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                          Instagram
                        </h6>
                        <span class="text-secondary">testfreelancer</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-facebook mr-2 icon-inline text-primary"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                          Facebook
                        </h6>
                        <span class="text-secondary">testfreelancer</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input
                            type="text"
                            value={this.state.firstname}
                            name="firstname"
                            className="form-control"
                            onChange={this.changeHandler}
                          ></input>
                          <input
                            type="text"
                            value={this.state.lastname}
                            name="lastname"
                            className="form-control"
                            onChange={this.changeHandler}
                          ></input>
                        </div>
                      </div>
                      <hr></hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {this.state.email}
                        </div>
                      </div>
                      <hr></hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input
                            type="text"
                            value={this.state.phone}
                            name="phone"
                            className="form-control"
                            onChange={this.changeHandler}
                          ></input>
                        </div>
                      </div>
                      <hr></hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Role</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {this.state.role}
                        </div>
                      </div>
                      <hr></hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input
                            type="text"
                            value={this.state.address}
                            name="address"
                            className="form-control"
                            onChange={this.changeHandler}
                          ></input>
                        </div>
                      </div>

                      <hr></hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Joined in</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {this.state.createdAt}
                        </div>
                      </div>
                      <hr></hr>
                      <div class="row">
                        <div class="col-sm-12">
                          <Button variant="danger" onClick={this.updateProfile}>
                            Update Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  
    return <div>{menu}</div>;
  }
}
