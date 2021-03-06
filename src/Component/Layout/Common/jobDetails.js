import { Route, Link } from "react-router-dom";
import React, { Component, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
const axios = require("axios").default;
const css = {
    height: "40px",
    width: "200px",
    marginTop: "10px",
    background: "#01d28e",
    color: "rgb(255, 255, 255)",
    padding: "8px 20px",
    borderRadius: "2px",
    outline: "none",  
    fontFamily: "Barlow, sans-serif"
}

class findDetails extends Component {
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
    approval: "",
    company: "",
    foundedin: "",
    userbio: "",
    myamount: "",
    video: "",
    id: this.props.match.params.id,
  };
  inputHandler = (e) => {
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
      .get("https://freelancerbackend.herokuapp.com/work/showSingle/" + this.state.id)
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
          approval: response.data.approval,
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

  savework = (id) => {
    

    axios({
      method: "post",
      url: "https://freelancerbackend.herokuapp.com/work/savework/" + id,
      data: this.state,
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        Swal.fire("Good job!", "You Saved this job for future!", "success");
      })
      .catch((err) => {
        console.log(this.state.config);
        console.log(err.response);
        Swal.fire("Oh NOO", "Saving failed!", "failed");
      });
  };

  applywork = (id,e) => {
    // alert(this.state.config.headers.authorization)
    Swal.fire({
      title: "Apply for " + this.state.worktitle + " now?",
      icon: "warning",

      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Apply",
    }).then((result) => {
      if (result.isConfirmed) {

        e.preventDefault();
    const datas = new FormData(); // new line
    var video = this.refs.video.files[0];
    datas.append("userid", this.state.userid);
    datas.append("workid", this.state.workid);
    datas.append("myamount", this.state.myamount);
    datas.append("video", video);
    axios({
          method: "post",
          url: "https://freelancerbackend.herokuapp.com/work/applywork/" + id,
          data: datas,
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(this.state.config);
            console.log(err.response);
            alert("work apply unsuccessfull");
          });

        Swal.fire(
          "Applied",
          "Your have successfully applied to this work.",
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
                    <h2>{this.state.worktype}</h2>
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
                          src={`https://freelancerbackend.herokuapp.com/${this.state.photo}`}
                          alt=""
                          style={{ height: "200px" }}
                        />
                      </a>
                    </div>
                    <div class="job-tittle">
                      <a href="#">
                        <h4>{this.state.worktitle}</h4>
                      </a>
                      <ul>
                        <li>{this.state.company}</li>
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          {this.state.address}
                        </li>
                        <li>$ {this.state.estimatedprice}</li>
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
                    <p>{this.state.workdescription}</p>
                  </div>
                  <div class="post-details2  mb-50">
                    {/* <!-- Small Section Tittle --> */}
                    <div class="small-section-tittle">
                      <h4>Required Knowledge, Skills, and Abilities</h4>
                    </div>
                    <ul>
                      <li>{this.state.skills}</li>
                    </ul>
                  </div>
                  <div class="post-details2  mb-50">
                    {/* <!-- Small Section Tittle --> */}
                    <div class="small-section-tittle">
                      <h4>Education + Experience</h4>
                    </div>
                    <ul>
                      <li>{this.state.requiredexperience}</li>
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
                      Location : <span>{this.state.address}</span>
                    </li>
                    <li>
                      Vacancy : <span>{this.state.vacancy}</span>
                    </li>
                    <li>
                      Estimated Price :{" "}
                      <span>${this.state.estimatedprice}</span>
                    </li>
                  </ul>
                  <div class="small-section-tittle">
                    <h4>
                      To apply enter your biiding amount and upload a video and
                      press on apply now.
                    </h4>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.myamount}
                    name="myamount"
                    onChange={this.inputHandler}
                    required
                  />
                  <input
                    type="file"
                    name="video"
                    class="form-rounded"
                    ref="video"
                    style={{ marginTop: 10}}
                  />
                  <div class="row mb-3 px-3">
                    {" "}
                    <button
                      type="submit"
                      class="btn btn-blue text-center"
                      style={css}
                      onClick={this.applywork.bind(this, this.state.workid)}
                    >
                      Apply for work.
                    </button>{" "}
                  </div>
                  <div class="row mb-3 px-3">
                    {" "}
                    <button
                      type="submit"
                      class="btn btn-blue text-center"
                      style={css}
                      onClick={this.savework.bind(this, this.state.workid)}
                    >
                      Save this work
                    </button>{" "}
                  </div>
                </div>
                <div class="post-details4  mb-50">
                  {/* <!-- Small Section Tittle --> */}
                  <div class="small-section-tittle">
                    <h4>Company Information</h4>
                  </div>
                  <span>{this.state.company}</span>

                  <ul>
                    <li>
                      Owner:{" "}
                      <span>
                        {this.state.firstname}{" "}
                        {this.state.lastname}{" "}
                      </span>
                    </li>
                    <li>
                      Phone : <span>{this.state.phone}</span>
                    </li>
                    <li>
                      Email: <span>{this.state.email}</span>
                    </li>
                    <li>
                      Formed in: <span>{this.state.createdAt}</span>
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
export default findDetails;
