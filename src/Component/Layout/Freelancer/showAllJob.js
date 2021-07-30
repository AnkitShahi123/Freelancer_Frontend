import React, { Component, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import Swal from "sweetalert2";
const axios = require("axios").default;

class showAllJob extends Component {
  state = {
    works: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
    typed: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:89/work/showall")
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
      .get("http://localhost:89/work/search/" + this.state.typed)
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
    Swal.fire({
      title: "Apply in this work?",
      icon: "warning",

      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Apply",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "post",
          url: "http://localhost:89/work/applywork/" + id,

          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
          .then((response) => {
            console.log(response);

            //    alert("work apply successfull");
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
                            <Link
                              to={"/jobDetails/" + work._id}
                            >
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
    return (
      <Container>
        &nbsp; &nbsp;
        <h1>
          <input
            type="text"
            value={this.state.typed}
            name="typed"
            className="form-control"
            onChange={this.changeHandler}
            placeholder="Type something"
            required
          ></input>
          <Button
            type="submit"
            class="btn btn-blue text-center"
            onClick={this.search}
          >
            Search
          </Button>
          &nbsp; &nbsp;
          <a href="/showAllJob">Clear Search</a>
        </h1>
        <Row>{showStatus}</Row>
      </Container>
    );
  }
}

export default showAllJob;
