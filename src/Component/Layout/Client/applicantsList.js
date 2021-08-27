import React, { Component, useState } from "react";
import { Container, Row, Col, Badge, Button, Alert } from "react-bootstrap";
import { Route, Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
const axios = require("axios").default;

export default class applicantsList extends Component {
  state = {
    applied: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
    id: this.props.match.params.id,
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    console.log("this is id: " + this.state.id);
    axios({
      method: "get",
      url: "http://localhost:89/work/showWhoApplied/" + this.state.id,
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        console.log(response);
        this.setState({
          applied: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        alert("Error. Please Login first");
      });
  }

  confirmMethod = (id) => {
    axios({
      method: "put",
      url: "http://localhost:89/work/approvework/" + id,
      data: { confirmStatus: "Confirmed" },
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        console.log("to update" + id);
        alert("Work has been confirmed");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response);
        alert("Error confirming work");
      });

    axios({
      method: "put",
      url: "http://localhost:89/work/startworktimer/" + id,
      data: { timerStatus: "Started" },
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        console.log("to update" + id);
        alert("Timer has been started");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response);
        alert("Error starting time");
      });
  };

  denyMethod = (id) => {
    axios({
      method: "put",
      url: "http://localhost:89/work/approvework/" + id,
      data: { confirmStatus: "denied" },
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        console.log(response);
        alert("work has been denied");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response);
        alert("Error denying work");
      });
  };

  render() {
    return (
      <Container>
        <Row>
          <div>
            <p></p>

            {this.state.applied.map((apply) => {
              return (
                <div>
                  <div class="py-5 service-22">
                    <div class="container">
                      <div class="row wrap-service-22">
                        <div class="col-lg-6">
                            <img
                              src={`http://localhost:89/${apply.workid.photo}`}
                              class="rounded img-shadow img-fluid"
                              alt="wrapkit"
                              style={{ height: "400px" }}
                            />
                            
                        </div>

                        <div class="col-lg-6 mt-4 mt-md-0">
                          <div class="text-box">
                            <small class="text-info font-weight-medium">
                              Applied for: {apply.workid.worktitle}{" "}
                            </small>
                            <h4 class="font-weight-light mt-2 mb-4">
                              Applicant name:{" "}
                              <span class="text-megna">
                                {apply.userid.firstname} {apply.userid.lastname}
                              </span>
                            </h4>
                            <h6 class="font-weight-light">
                              Applicant bio:{" "}
                              <span class="text-megna">
                                {apply.userid.userbio}
                              </span>
                            </h6>
                            <p>
                              <h6 class="font-weight-light">
                                Resume Link:
                                <a
                                  href={`http://localhost:89/${apply.userid.resume}`}
                                  target="_blank"
                                >
                                  Click to view the resume
                                </a>
                              </h6>
                            </p>
                            <p>
                              <h6 class="font-weight-light">
                                Video Resume Link:
                                <a
                                  href={`http://localhost:89/${apply.video}`}
                                  target="_blank"
                                >
                                  Click to view the video resume
                                </a>
                              </h6>
                            </p>
                            <h6 class="font-weight-light">
                              Experience:{" "}
                              <span class="text-megna">
                                {apply.userid.experience}
                              </span>
                            </h6>
                            <h6 class="font-weight-light">
                              Projects:{" "}
                              <span class="text-megna">
                                {apply.userid.projects}
                              </span>
                            </h6>
                            <h6 class="font-weight-light">
                              Email :{" "}
                              <span class="text-megna">
                                {apply.userid.email}
                              </span>
                            </h6>
                            <h6 class="font-weight-light">
                              PhoneNumber:{" "}
                              <span class="text-megna">
                                {apply.userid.phone}
                              </span>
                            </h6>

                            <p>
                              Current status for this applicant:{" "}
                              {apply.confirmStatus}
                            </p>
                            {apply.confirmStatus === "Confirmed" ? (
                              <div>
                                <a href={`mailto:${apply.userid.email}`}>
                                <Button
                                  disabled={true}
                                  onClick={this.confirmMethod.bind(
                                    this,
                                    apply._id
                                  )}
                                  variant="success"
                                >
                                  Confirm
                                </Button>{" "}</a>
                                
                                &nbsp;
                                <Button
                                  variant="danger"
                                  onClick={this.denyMethod.bind(
                                    this,
                                    apply._id
                                  )}
                                >
                                  Deny
                                </Button>
                              </div>
                            ) : apply.confirmStatus === "denied" ? (
                              <div>
                                <Button
                                  variant="success"
                                  onClick={this.confirmMethod.bind(
                                    this,
                                    apply._id
                                  )}
                                >
                                  Confirm
                                </Button>{" "}
                                &nbsp;
                                <Button
                                  disabled={true}
                                  variant="danger"
                                  onClick={this.denyMethod.bind(
                                    this,
                                    apply._id
                                  )}
                                >
                                  Deny
                                </Button>
                              </div>
                            ) : (
                              <div>
                                <Button
                                  variant="success"
                                  onClick={this.confirmMethod.bind(
                                    this,
                                    apply._id
                                  )}
                                >
                                  Confirm
                                </Button>
                                &nbsp;
                                <Button
                                  variant="danger"
                                  onClick={this.denyMethod.bind(
                                    this,
                                    apply._id
                                  )}
                                >
                                  Deny
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
