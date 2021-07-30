import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const axios = require("axios").default;

class jobAdd extends Component {
  state = {
    worktitle: "",
    worktype: "",
    workdescription: "",
    requiredexperience: "",
    estimatedprice: "",
    vacancy: "",
    skills: "",
    photo: "",
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  fileHandler = (e) => {
    this.setState({
      photo: e.target.files[0],
    });
  };

  workAddMethod = (e) => {
    e.preventDefault();
    const data = new FormData(); // new line
    var image = this.refs.photo.files[0];
    data.append("worktitle", this.state.worktitle);
    data.append("worktype", this.state.worktype);
    data.append("workdescription", this.state.workdescription);
    data.append("requiredexperience", this.state.requiredexperience);
    data.append("estimatedprice", this.state.estimatedprice);
    data.append("vacancy", this.state.vacancy);
    data.append("skills", this.state.skills);
    data.append("photo", image);

    axios({
      method: "post",
      url: "https://freelancerbackend.herokuapp.com/work/add",
      data: data,
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        console.log(response);
        alert("work has been added");
      })
      .catch((err) => {
        console.log(err.response);
        alert("Error adding work");
      });
  };
  render() {
    return (
      <>
        <form>
          <div class="auth-inner-addform">
            <h1>POST work</h1>
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label>work Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Work Title"
                      value={this.state.worktitle}
                      name="worktitle"
                      onChange={this.inputHandler}
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Work Type</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Job type"
                      value={this.state.worktype}
                      name="worktype"
                      onChange={this.inputHandler}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Estimated Price</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter estimated price"
                      value={this.state.estimatedprice}
                      name="estimatedprice"
                      onChange={this.inputHandler}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Vacancy</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Vacancy"
                      value={this.state.vacancy}
                      name="vacancy"
                      onChange={this.inputHandler}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Skills</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skills"
                      value={this.state.skills}
                      name="skills"
                      onChange={this.inputHandler}
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <label>Work Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter work description"
                    value={this.state.workdescription}
                    name="workdescription"
                    onChange={this.inputHandler}
                  />
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <label>Required experience</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter required experience"
                    value={this.state.requiredexperience}
                    name="requiredexperience"
                    onChange={this.inputHandler}
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Image</label>
                    <input type="file" name="photo" ref="photo"/>
                  </div>
                </div>
              </div>

              <p>
                <button
                  variant="secondary"
                  className="btn btn-primary btn-block"
                  onClick={this.workAddMethod}
                >
                  Submit
                </button>
              </p>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default jobAdd;
