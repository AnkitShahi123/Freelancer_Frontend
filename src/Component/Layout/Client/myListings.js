import React, { Component, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Route, Link } from "react-router-dom";

const axios = require("axios").default;

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
                                    src={`http://localhost:89/${work.photo}`}
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
                              <button type="button" class="btn0 btn-danger btn-xs dt-delete">
                                <span class="glyphicon glyphicon-remove" aria-hidden="true"   onClick={this.deletework.bind(this, work._id)}>Delete</span>
                              </button>
                            </td>
                            <td>
                              <button type="button" class="btn0 btn-danger btn-xs dt-delete">
                              <Link to={"/updatework/" + work._id}><span class="glyphicon glyphicon-remove" aria-hidden="true">Update</span></Link>
                              </button>
                            </td>
                            <td>
                              <button type="button" class="btn0 btn-danger btn-xs dt-delete">
                              <Link to={"/applicantsList/" + work._id}><span class="glyphicon glyphicon-remove" aria-hidden="true">Applicants</span></Link>
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
    //   <Container>
    //   <Row>
    //     <div>
    //       <p></p>
      
    //       {this.state.works.map((work) => {
    //         return (
    //           <div className="login">
    //             <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    //               <div class="card card0 border-0">
    //                 <div class="row d-flex">
    //                   <div class="col-lg-6">
    //                     <div class="card1 pb-5">
    //                       <div class="row">
    //                         <div class="row px-5 justify-content-center mt-3 mb-5 border-line">
    //                           {" "}
    //                           <h1>{work.worktitle}</h1>{" "}
    //                         </div>
    //                       </div>
    //                       <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
    //                         {" "}
    //                         <img
    //                           src={`http://localhost:89/${work.photo}`}
    //                           class="image"
    //                         />{" "}
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div class="col-lg-6">
    //                     <div class="card2 card border-0 px-4 py-5">
    //                       <h4>work Type: {work.worktype}</h4>
    //                       <p></p>
    //                       <p></p>
    //                       <p></p>
    //                       <p></p>
    //                       <p></p>
    //                       <div class="row px-3 mb-4">
    //                         <h6 class="mb-0 text-sm">work Description: </h6>
    //                         <h6 class="mb-0 text-sm">
    //                           {work.workdescription}
    //                         </h6>
    //                       </div>
    //                       <div class="row px-3 mb-4">
    //                         <h6 class="mb-0 text-sm">
    //                           Required Experience:{" "}
    //                         </h6>
    //                         <h6 class="mb-0 text-sm">
    //                           {work.requiredexperience}
    //                         </h6>
    //                       </div>
    //                       <div class="row px-3 mb-4">
    //                         <h6 class="mb-0 text-sm">work Salary: </h6>
    //                         <h6 class="mb-0 text-sm">${work.estimatedprice}</h6>
    //                       </div>
    //                       <div class="row px-3 mb-4">
    //                         <h6 class="mb-0 text-sm">Email: </h6>
    //                         <h6 class="mb-0 text-sm">{work.creator.email}</h6>
    //                       </div>
    //                       <div class="row px-3 mb-4">
    //                         <h6 class="mb-0 text-sm">Posted on: </h6>
    //                         <h6 class="mb-0 text-sm"> {work.createdAt}</h6>
    //                       </div>

    //                       <div class="row mb-3 px-3">
    //                         {" "}
    //                         <button
    //                           type="submit"
    //                           class="btn btn-blue text-center"
    //                           onClick={this.deletework.bind(this, work._id)}
    //                         >
    //                           Delete this.
    //                         </button>{" "}
    //                       </div>
    //                       <Link to={"/updatework/" + work._id}>
    //                         <div class="row mb-4 px-3">
    //                           <button
    //                             type="submit"
    //                             class="btn btn-blue text-center"
    //                           >
    //                             Update
    //                           </button>{" "}
    //                         </div>
    //                       </Link>
    //                       <Link to={"/applicantsList/" + work._id}>
    //                         <div class="row mb-4 px-3">
    //                           <button type="submit" class="btn btn-blue">
    //                             Applicants
    //                           </button>{" "}
    //                         </div>
    //                       </Link>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
          //   );
          // })}
    //     </div>
    //     <Col></Col>
    //   </Row>
    // </Container>
  );
}
}


export default myListings;
