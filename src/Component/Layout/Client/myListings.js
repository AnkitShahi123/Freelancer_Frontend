import React, { Component, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Route, Link } from "react-router-dom";

const axios = require("axios").default;

const Deletecss = {
  height: "40px",
  width: "200px",
  marginTop: "40px",
  background: "#da2461",
  color: "rgb(255, 255, 255)",
  padding: "8px 20px",
  borderRadius: "2px",
  outline: "none",  
  fontFamily: "Barlow, sans-serif"
}
const Updatecss = {
  height: "40px",
  width: "200px",
  marginTop: "40px",
  background: "#fca903",
  color: "rgb(255, 255, 255)",
  padding: "8px 20px",
  borderRadius: "2px",
  outline: "none",  
  fontFamily: "Barlow, sans-serif"
}
const Applicant = {
  height: "40px",
  width: "200px",
  marginTop: "40px",
  background: "#01d28e",
  color: "rgb(255, 255, 255)",
  padding: "8px 20px",
  borderRadius: "2px",
  outline: "none",  
  fontFamily: "Barlow, sans-serif"
}

const css1 = {
  textAlign:"center",
  width:"100px"
};


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
      url: "https://freelancerbackend.herokuapp.com/work/showMyListings",
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
      .delete("https://freelancerbackend.herokuapp.com/work/delete/" + id, this.state.config)
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
      <div class="slider-area ">
            <div class="single-slider section-overly slider-height2 d-flex align-items-center" 
            style={{ 
                backgroundImage: `url("https://technext.github.io/jobfinderportal/assets/img/hero/about.jpg")` 
              }}
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

          <div> 
          <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
            <thead>
              <tr>
                
                <th><h5>Photo</h5></th>
                <th><h5>Work Title</h5></th>
                <th><h5>Required Experience</h5></th>
                <th><h5>Work Salary</h5></th>
                <th><h5>Email</h5></th>
                <th><h5>Posted on</h5></th>
                <th style={css1}><h5>Actions</h5></th>
                <th><h5></h5></th>
                <th><h5></h5></th>
              </tr>
            </thead>
            {this.state.works.map((work) => {
                        return (
                          <tbody>
                          <tr>
                          <td><img
                                    src={`https://freelancerbackend.herokuapp.com/${work.photo}`}
                                    alt="" style={{ height:100, width:120 }}
                                  /></td>
                            <td><span><h4>{work.worktitle}</h4></span>
                                <span>
                                    Work Type:  {work.worktype}
                                </span></td>
                            <td>{work.requiredexperience}</td>
                            <td>{work.estimatedprice}</td>
                            <td>{work.creator.email}</td>
                            <td>{work.createdAt}</td>
                            <td>
                              <button type="button" class="btn-xs dt-delete">
                                <span class="glyphicon glyphicon-remove" aria-hidden="true" style={Deletecss}  onClick={this.deletework.bind(this, work._id)}>Delete</span>
                              </button>
                            </td>
                            <td>
                              <button type="button" class="btn-xs dt-delete">
                              <Link to={"/updatework/" + work._id}><span class="glyphicon glyphicon-remove" style={Updatecss} aria-hidden="true">Update</span></Link>
                              </button>
                            </td>
                            <td>
                              <button type="button" class="btn-xs dt-delete">
                              <Link to={"/applicantsList/" + work._id}><span class="glyphicon glyphicon-remove" style={Applicant} aria-hidden="true">Applicants</span></Link>
                              </button>
                            </td>
                          </tr>
                        </tbody>  
                        );
                    })}
          </table>

          {/* // <!-- Modal --> */}
          <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

              {/* <!-- Modal content--> */}
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Row information</h4>
                </div>
                <div class="modal-body">
                  
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn0 btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div>
          </div>
          </div>
  );
}
}


export default myListings;
