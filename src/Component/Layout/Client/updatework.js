import { Route, Link } from "react-router-dom";
import React, { Component, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
const axios = require("axios").default;

class updatework extends Component {
  state = {
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
    workid: "",
    worktitle: "",
    worktype: "",
    workdescription: "",
    requiredexperience: "",
    estimatedprice: "",
    skills: "",
    vacancy: "",
    photo: "",
    creator: "",
    createdAt: "",
    video: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    age: "",
    photo: "",
    role: "",
    projects: "",

    company: "",
    foundedin: "",
    userbio: "",

    id: this.props.match.params.id,
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  fileHandler = (e) => {
    this.setState({
      video: e.target.files[0],
    });
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:89/work/showSingle/" + this.state.id,
        this.state.config
      )
      .then((response) => {
        this.setState({
          config: {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
          workid: response.data._id,
          worktitle: response.data.worktitle,
          worktype: response.data.worktype,
          workdescription: response.data.workdescription,
          requiredexperience: response.data.requiredexperience,
          estimatedprice: response.data.estimatedprice,
          skills: response.data.skills,
          vacancy: response.data.vacancy,

          photo: response.data.photo,
          // creator:response.data.creator._id,
          createdAt: response.data.createdAt,

          video: response.data.video,
          firstname: response.data.creator.firstname,
          lastname: response.data.creator.lastname,
          email: response.data.creator.email,
          address: response.data.creator.address,
          phone: response.data.creator.phone,
          age: response.data.creator.age,
          photos: response.data.creator.photo,
          role: response.data.creator.role,
          projects: response.data.creator.projects,

          company: response.data.creator.company,
          foundedin: response.data.creator.foundedin,
          userbio: response.data.creator.userbio,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Error. Please Login first");
      });
  }
  updatework = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "update for "+this.state.worktitle +" now?",
      icon: "warning",

      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "put",
          url: "http://localhost:89/work/updatework/" + this.state.id,
          data: this.state,
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(this.state.config);
            console.log(err.response);
            alert("work update unsuccessfull");
          });

        Swal.fire(
          "Updated",
          "Your have successfully updated this work.",
          "success"
        );
      }
    });
  };

  render() {
    return (
      <main>
        {/* <!-- Hero Area Start--> */}
        <div class="slider-area ">
          <div
            class="single-slider section-overly slider-height2 d-flex align-items-center"
            style={{
              backgroundImage: `url("https://technext.github.io/jobfinderportal/assets/img/hero/about.jpg")`,
            }}
            // data-background="assets/img/hero/about.jpg"
          >
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div class="hero-cap text-center">
                    <h2>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.worktype}
                        name="worktype"
                        onChange={this.changeHandler}
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Hero Area End --> */}
        {/* <!-- job post company Start --> */}
        <div class="job-post-company pt-120 pb-120">
          <div class="container">
            <div class="row justify-content-between">
              {/* <!-- Left Content --> */}
              <div class="col-xl-7 col-lg-8">
                {/* <!-- job single --> */}
                <div class="single-job-items mb-50">
                  <div class="job-items">
                    <div class="company-img company-img-details">
                      <a href="#">
                        <img
                          src={`http://localhost:89/${this.state.photo}`}
                          alt=""
                          style={{ height: "80px" }}
                        />
                      </a>
                    </div>
                    <div class="job-tittle">
                      <a href="#">
                        <h4>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.worktitle}
                            name="worktitle"
                            onChange={this.changeHandler}
                          />
                        </h4>
                      </a>
                      <ul>
                        <li>{this.state.creator.company}</li>
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          {this.state.creator.address}
                        </li>
                        <li>
                          ${" "}
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.estimatedprice}
                            name="estimatedprice"
                            onChange={this.changeHandler}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- job single End --> */}

                <div class="job-post-details">
                  <div class="post-details1 mb-50">
                    {/* <!-- Small Section Tittle --> */}
                    <div class="small-section-tittle">
                      <h4>Work Description</h4>
                    </div>
                    <p><input type="text" 
                     className="form-control" 
                     value= {this.state.workdescription}
                     name="workdescription"
                     onChange={this.changeHandler}/></p>
                  </div>
                  <div class="post-details2  mb-50">
                    {/* <!-- Small Section Tittle --> */}
                    <div class="small-section-tittle">
                      <h4>Required Knowledge, Skills, and Abilities</h4>
                    </div>
                    <ul>
                      <li><input type="text" 
                     className="form-control" 
                     value= {this.state.skills}
                     name="skills"
                     onChange={this.changeHandler}/></li>
                    </ul>
                  </div>
                  <div class="post-details2  mb-50">
                    {/* <!-- Small Section Tittle --> */}
                    <div class="small-section-tittle">
                      <h4>Education + Experience</h4>
                    </div>
                    <ul>
                      <li><input type="text" 
                     className="form-control" 
                     value= {this.state.requiredexperience}
                     name="requiredexperience"
                     onChange={this.changeHandler}/></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Right Content --> */}
              <div class="col-xl-4 col-lg-4">
                <div class="post-details3  mb-50">
                  {/* <!-- Small Section Tittle --> */}
                  <div class="small-section-tittle">
                    <h4>Job Overview</h4>
                  </div>
                  <ul>
                    <li>
                      Posted date : <span>{this.state.createdAt}</span>
                    </li>
                    <li>
                      Location : <span>{this.state.creator.address}</span>
                    </li>
                    <li>
                      Vacancy : <span><input type="text" 
                     className="form-control" 
                     value= {this.state.vacancy}
                     name="vacancy"
                     onChange={this.changeHandler}/></span>
                    </li>
                    <li>
                      Estimated Salary Salary :{" "}
                      <span>$<input type="text" 
                     className="form-control" 
                     value= {this.state.estimatedprice}
                     name="estimatedprice"
                     onChange={this.changeHandler}/></span>
                    </li>
                  </ul>
                  <div class="small-section-tittle">
                    <h4>
                     Update your information?
                    </h4>
                  </div>

                  <div class="row mb-3 px-3">
                    {" "}
                    <Button type="submit" class="btn btn-blue text-center" onClick={this.updatework} >
                     Confirm Update?
                    </Button>{" "}
                  </div>
                </div>
                <div class="post-details4  mb-50">
                  {/* <!-- Small Section Tittle --> */}
                  <div class="small-section-tittle">
                    <h4>Company Information</h4>
                  </div>
                  <span>{this.state.creator.company}</span>

                  <ul>
                    <li>
                      Owner:{" "}
                      <span>
                        {this.state.creator.firstname}{" "}
                        {this.state.creator.lastname}{" "}
                      </span>
                    </li>
                    <li>
                      Phone : <span>{this.state.creator.phone}</span>
                    </li>
                    <li>
                      Email: <span>{this.state.creator.email}</span>
                    </li>
                    <li>
                      Formed in: <span>{this.state.creator.foundedin}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- work post company End --> */}
      </main>
    );
  }
}
export default updatework;
