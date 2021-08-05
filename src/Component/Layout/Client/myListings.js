import React, { Component, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Route, Link } from "react-router-dom";

const axios = require("axios").default;

class myListings extends Component {
  state = {
    works: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:89/work/showMyListings",
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        this.setState({
          works: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  deletework = (id) => {
    axios
      .delete("http://localhost:89/work/delete/" + id, this.state.config)
      .then((response) => {
        console.log(response);
        alert("Delete successfull");
        window.location.reload();
      })
      .catch((err) => {
        alert("Delete unsuccessfull");
      });
  };

  render() {
    return (
      <div>
        {/* // <!-- Hero Area Start--> */}
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
                    <h2>My Posting</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="ftco-section">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-6 text-center mb-5"></div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="table-wrap">
                  <table class="table table-responsive-xl">
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th>Email</th>
                        <th>Company Name</th>
                        <th>Actions</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>

                    {this.state.works.map((work) => {
                      return (
                        <tbody>
                          <tr class="alert" role="alert">
                            <td>
                              <label class="checkbox-wrap checkbox-primary">
                                <input type="checkbox" checked />
                                <span class="checkmark"></span>
                              </label>
                            </td>
                            <td class="d-flex align-items-center">
                              <div
                                class="img"
                                style={{
                                  backgroundImage: "url(images/person_1.jpg)",
                                }}
                              ></div>
                              <div class="pl-3 email">
                                <span>{work.worktitle}</span>
                                <span>Appilied Date: {work.createdAt}</span>
                              </div>
                            </td>
                            <td>Markotto89</td>

                            <td>
                              {/* <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">
                                  <i class="fa fa-close"></i>
                                </span>
                              </button> */}
                              {/* <div class="row">
                                <div class="col-md-4">
                                  {" "} */}
                                  {/* <button
                                    type="submit"
                                    class="btn btn-blue text-center"
                                    onClick={this.deletework.bind(
                                      this,
                                      work._id
                                    )}
                                  >
                                    Delete this.
                                  </button>{" "} */}
                                   
                                {/* </div>
                                <div class="col-md-4">
                                  <Link to={"/updatework/" + work._id}>
                                    <div class="row mb-4 px-3">
                                      <button
                                        type="submit"
                                        class="btn btn-blue text-center"
                                      >
                                        Update
                                      </button>{" "}
                                    </div>
                                  </Link>
                                </div>
                                <div class="col-md-4">
                                  <Link to={"/applicantsList/" + work._id}>
                                    <div class="row mb-4 px-3">
                                      <button
                                        type="submit"
                                        class="btn btn-blue"
                                      >
                                        Applicants
                                      </button>{" "}
                                    </div>
                                  </Link>
                                </div> */}
                              {/* </div> */}
                              <td>
                                    <Button variant="info" onClick={() => this.props.editProduct()}>Edit</Button>
                                    &nbsp;<Button variant="danger" onClick={() => this.deleteProduct()}>Delete</Button>
                                  </td>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div>
            <p></p>
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
                                src={`http://localhost:89/${work.photo}`}
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
                              <h6 class="mb-0 text-sm">
                                {work.workdescription}
                              </h6>
                            </div>

                            <div class="row px-3 mb-4">
                              <h6 class="mb-0 text-sm">
                                Required Experience:{" "}
                              </h6>
                              <h6 class="mb-0 text-sm">
                                {work.requiredexperience}
                              </h6>
                            </div>
                            <div class="row px-3 mb-4">
                              <h6 class="mb-0 text-sm">work Salary: </h6>
                              <h6 class="mb-0 text-sm">${work.estimatedprice}</h6>
                            </div>
                            <div class="row px-3 mb-4">
                              <h6 class="mb-0 text-sm">Email: </h6>
                              <h6 class="mb-0 text-sm">{work.creator.email}</h6>
                            </div>
                            <div class="row px-3 mb-4">
                              <h6 class="mb-0 text-sm">Posted on: </h6>
                              <h6 class="mb-0 text-sm"> {work.createdAt}</h6>
                            </div>

                            <div class="row mb-3 px-3">back
                              {" "}
                              <button
                                type="submit"
                                class="btn btn-blue text-center"
                                onClick={this.deletework.bind(this, work._id)}
                              >
                                Delete this.
                              </button>{" "}
                            </div>
                            <Link to={"/updatework/" + work._id}>
                              <div class="row mb-4 px-3">
                                <button
                                  type="submit"
                                  class="btn btn-blue text-center"
                                >
                                  Update
                                </button>{" "}
                              </div>
                            </Link>
                            <Link to={"/applicantsList/" + work._id}>
                              <div class="row mb-4 px-3">
                                <button type="submit" class="btn btn-blue">
                                  Applicants
                                </button>{" "}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Col></Col> */}
      </div>
    );
  }
}

export default myListings;
