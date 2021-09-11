import React, { Component, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import Swal from "sweetalert2";
const axios = require("axios").default;
const css = {
    height: "40px",
    width: "200px",
    marginTop: "40px",
    background: "rgb(251, 36, 106)",
    color: "rgb(255, 255, 255)",
    padding: "8px 20px",
    borderRadius: "2px",
    outline: "none",  
    fontFamily: "Barlow, sans-serif"
}

class showAllforAdmin extends Component {
  state = {
    works: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
    typed: "",
  };

  componentDidMount() {
    axios
      .get("https://freelancerbackend.herokuapp.com/work/showall")
      .then((response) => {
        console.log(response.data);
        console.log(response.data.worktitle);
        this.setState({
          works: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Error. Please Login first");
      });
  }

  // componentDidMount() {

  // }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  search = (e) => {
    e.preventDefault();

    axios
      .get("https://freelancerbackend.herokuapp.com/work/search/" + this.state.typed)
      .then((response) => {
        this.setState({
          works: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Error. Please Login first");
      });
  };

  applywork = (id) => {
    // alert(this.state.config.headers.authorization)
    
  };


  reportwork = (id) => {
    
    Swal.fire({
      title: "Delete this work?",
      icon: "warning",

      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        
            axios
              .delete("https://freelancerbackend.herokuapp.com/work/delete/" + id, this.state.config)
              .then((response) => {
                console.log(response);
                
                window.location.reload();
              })
              .catch((err) => {
                alert("Delete unsuccessfull");
              });
          
        Swal.fire(
          "Applied",
          "Your have successfully reported this work.",
          "success"
        );
      }
    });
  };

  render() {
    var showStatus = (
      <div>
        {this.state.works.map((work) => {
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
                            <h1>{work.worktitle}</h1>{" "}
                          </div>
                        </div>
                        <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                          {" "}
                          <img
                            src={`https://freelancerbackend.herokuapp.com/${work.photo}`}
                            class="image"
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="card2 card border-0 px-4 py-5">
                        <h4>work Type: {work.worktype}</h4>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <div class="row px-3 mb-4">
                          <h6 class="mb-0 text-sm">work Description: </h6>
                          <h6 class="mb-0 text-sm">{work.workdescription}</h6>
                        </div>

                        <div class="row px-3 mb-4">
                          <h6 class="mb-0 text-sm">Required Experience: </h6>
                          <h6 class="mb-0 text-sm">
                            {work.requiredexperience}
                          </h6>
                        </div>
                        <div class="row px-3 mb-4">
                          <h6 class="mb-0 text-sm">Estimated Price: </h6>
                          <h6 class="mb-0 text-sm">{work.estimatedprice}</h6>
                        </div>
                        <div class="row px-3 mb-4">
                          <h6 class="mb-0 text-sm">Company Name : </h6>
                          <h6 class="mb-0 text-sm">{work.creator.company}</h6>
                        </div>
                        <div class="row px-3 mb-4">
                          <h6 class="mb-0 text-sm">Email: </h6>
                          <h6 class="mb-0 text-sm">{work.creator.email}</h6>
                        </div>
                        <div class="row px-3 mb-4">
                          <h6 class="mb-0 text-sm">Posted on: </h6>
                          <h6 class="mb-0 text-sm"> {work.createdAt}</h6>
                        </div>

                        <div class="row mb-3 px-3">
                          {" "}
                          {/* <button
                            type="submit"
                            class="btn btn-blue text-center"
                            onClick={this.applywork.bind(this, work._id)}
                          >
                            Apply for work.
                          </button>{" "} */}
                          <Button>
                            <Link to={"/jobDetails/" + work._id}>
                              {" "}
                              <button
                                class="btn btn-info-gradiant btn-md text-white border-0"
                                href="#f20"
                              >
                                <span>Apply</span>
                              </button>
                            </Link>{" "}
                            &nbsp; &nbsp; &nbsp;
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );

    var newdesign = (
      <div>
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
                      <h1>
                        <div class="row">
                          <div class="col-xl-8">
                            <input
                              type="text"
                              value={this.state.typed}
                              name="typed"
                              className="search-bar form-control"
                              onChange={this.changeHandler}
                              placeholder="Type Something"
                              required
                            ></input>
                          </div>
                          <div class="col-xl-3"> 
                          <button
                          type="submit"
                          class="btn_search btn-blue text-center"
                          onClick={this.search}
                        >
                          Search
                        </button>
                          </div>
                        </div>
                        &nbsp; &nbsp;
                        <a href="/showAllJob" class="clear-data">Clear Search</a>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Hero Area End --> */}
          {/* <!-- Job List Area Start --> */}
          <div class="job-listing-area pt-120 pb-120">
            <div class="container">
              <div class="row">
                {/* <!-- Left content --> */}
                <div class="col-xl-3 col-lg-3 col-md-4">
                  <div class="row">
                    <div class="col-12">
                      <div class="small-section-tittle2 mb-45">
                        <div class="ion">
                          {/* <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20px" height="12px">
                                    <path fill-rule="evenodd"  fill="rgb(27, 207, 107)"
                                        d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"/>
                                    </svg> */}
                        </div>
                        <h4>Filter Jobs</h4>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Job Category Listing start --> */}
                  <div class="job-category-listing mb-50">
                    {/* <!-- single one --> */}
                    <div class="single-listing">
                      <div class="small-section-tittle2">
                        <h4>Job Category</h4>
                      </div>
                      {/* <!-- Select job items start --> */}
                      <div class="select-job-items2">
                        <select name="select">
                          <option value="">All Category</option>
                          <option value="">Startup</option>
                          <option value="">Data Analytics</option>
                          <option value="">Designer</option>
                          <option value="">Programmer</option>
                        </select>
                      </div>
                      {/* <!--  Select job items End--> */}
                      {/* <!-- select-Categories start --> */}
                      <div class="select-Categories pt-80 pb-50">
                        <div class="small-section-tittle2">
                          <h4>Job Type</h4>
                        </div>
                        <label class="container">
                          Full Time
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          Part Time
                          <input type="checkbox" checked="checked active" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          Remote
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          Freelance
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      {/* <!-- select-Categories End --> */}
                    </div>
                    {/* <!-- single two --> */}
                    <div class="single-listing">
                      <div class="small-section-tittle2">
                        <h4>Job Location</h4>
                      </div>
                      {/* <!-- Select job items start --> */}
                      <div class="select-job-items2">
                        <select name="select">
                          <option value="">Anywhere</option>
                          <option value="">Category 1</option>
                          <option value="">Category 2</option>
                          <option value="">Category 3</option>
                          <option value="">Category 4</option>
                        </select>
                      </div>
                      {/* <!--  Select job items End--> */}
                      {/* <!-- select-Categories start --> */}
                      <div class="select-Categories pt-80 pb-50">
                        <div class="small-section-tittle2">
                          <h4>Experience</h4>
                        </div>
                        <label class="container">
                          1-2 Years
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          2-3 Years
                          <input type="checkbox" checked="checked active" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          3-6 Years
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          6-more..
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      {/* <!-- select-Categories End --> */}
                    </div>
                    {/* <!-- single three --> */}
                    <div class="single-listing">
                      {/* <!-- select-Categories start --> */}
                      <div class="select-Categories pb-50">
                        <div class="small-section-tittle2">
                          <h4>Posted Within</h4>
                        </div>
                        <label class="container">
                          Any
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          Today
                          <input type="checkbox" checked="checked active" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          Last 2 days
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          Last 3 days
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          Last 5 days
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">
                          Last 10 days
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      {/* <!-- select-Categories End --> */}
                    </div>
                    <div class="single-listing">
                      {/* <!-- Range Slider Start --> */}
                      <aside class="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                        <div class="small-section-tittle2">
                          <h4>Filter Jobs</h4>
                        </div>
                        <div class="widgets_inner">
                          <div class="range_item">
                            <div id="slider-range"></div>
                            <input
                              type="text"
                              class="js-range-slider"
                              value=""
                            />
                            <div class="d-flex align-items-center">
                              <div class="price_text">
                                <p>Price :</p>
                              </div>
                              <div class="price_value d-flex justify-content-center">
                                <input
                                  type="text"
                                  class="js-input-from"
                                  id="amount"
                                  readonly
                                />
                                <span>to</span>
                                <input
                                  type="text"
                                  class="js-input-to"
                                  id="amount"
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </aside>
                      {/* <!-- Range Slider End --> */}
                    </div>
                  </div>
                  {/* <!-- Job Category Listing End --> */}
                </div>
                {/* <!-- Right content --> */}
                <div class="col-xl-9 col-lg-9 col-md-8">
                  {/* <!-- Featured_job_start --> */}
                  <section class="featured-job-area">
                    <div class="container">
                      {/* <!-- Count of Job list Start --> */}
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="count-job mb-35">
                            <span>39, 782 Jobs found</span>
                            {/* <!-- Select job items start --> */}
                            <div class="select-job-items">
                              <span>Sort by</span>
                              <select name="select">
                                <option value="">None</option>
                                <option value="">job list</option>
                                <option value="">job list</option>
                                <option value="">job list</option>
                              </select>
                            </div>
                            {/* <!--  Select job items End--> */}
                          </div>
                        </div>
                      </div>
                      {/* <!-- Count of Job list End --> */}

                      {/* <!-- single-job-content --> */}

                      {this.state.works.map((work) => {
                        return (
                          <div class="single-job-items mb-30">
                            <div class="job-items">
                              <div class="company-img">
                                <a>
                                  <img
                                    src={`https://freelancerbackend.herokuapp.com/${work.photo}`}
                                    alt="" style={{ height:100, width:120 }}
                                  />
                                </a>
                              </div>
                              <div class="job-tittle job-tittle2">
                                
                              <h4>{work.worktitle}</h4>
                                
                                <ul>
                                <i class="fas fa-briefcase"></i>      <li>{work.creator.company}</li>
                                  <li>
                                    <i class="fas fa-map-marker-alt"></i>{work.creator.address}
                                  </li>
                                  <li>${work.estimatedprice}</li>
                                </ul>
                              </div>
                            </div>
                            <button
                              type="submit"
                              class="btn btn-blue text-center"
                              onClick={this.reportwork.bind(this, work._id)}
                              style={css}
                            >
                             Delete this work
                            </button>
                            {/* <div class="items-link items-link2 f-right">
                              <Link to={"/jobDetailsForAdmin/" + work._id}>
                                See more
                              </Link>
                              
                              <div>{work.createdAt}</div>
                            </div> */}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                  {/* <!-- Featured_job_end --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Job List Area End --> */}
          {/* <!--Pagination Start  --> */}
          <div class="pagination-area pb-115 text-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div class="single-wrap d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-start">
                        <li class="page-item active">
                          <a class="page-link" href="#">
                            01
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            02
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            03
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            <span class="ti-angle-right"></span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
    return (
      <div>
        <Row>{newdesign}</Row>
      </div>
    );
  }
}

export default showAllforAdmin;
