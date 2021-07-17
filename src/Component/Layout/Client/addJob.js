import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const axios = require("axios").default;

class jobAdd extends Component {
  render() {
    return (
      <>
        <form>
          <div class="auth-inner-addform">
            <h1>POST JOB</h1>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label>Job Title</label>
                            <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Job Title"
                            ></input>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label>Job Type</label>
                            <select class="form-control custom-select">
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Intrnship</option>
                            <option>Freelance</option>
                            </select>
                        </div>
                    </div>
                </div>                
                
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Job Type</label>
                    <select class="form-control custom-select">
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Intrnship</option>
                      <option>Freelance</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Salary</label>
                    <input type="text" class="form-control" placeholder="Estimated Salary"></input>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                        <label>Job Description</label>
                        <input type="text" class="form-control" placeholder=""></input>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                        <label>Job Requirements</label>
                        <input type="text" class="form-control" placeholder=""></input>
                    </div>
                </div>

                <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Image</label>
                    <input type="file" class="form-control" placeholder=""></input>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Creator</label>
                    <input type="text" class="form-control" placeholder=""></input>
                  </div>
                </div>
              </div>

              <p>
                    <button variant="secondary" className="btn btn-primary btn-block">Submit</button>

                </p>

            </div>
          </div>
        </form>
      </>
    );
  }
}

export default jobAdd;