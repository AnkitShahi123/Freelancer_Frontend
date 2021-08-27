import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
const axios = require("axios").default;

const css1 = {
  textAlign:"center",
  width:"100px"
};

const css2 = {
  marginRight:"0px"
};
export default class myApplied extends Component {
  state = {
    appliedworks: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };



  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:89/work/showMyApplied",
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        this.setState({
          appliedworks: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  deletework = (id) => {
    Swal.fire({
      title: "Delete this application?",
      icon: "warning",

      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            "http://localhost:89/work/deleteMyApplied/" + id,
            this.state.config
          )
          .then((response) => {
            console.log(response);
            //alert("Delete successfull")
            Swal.fire(
              "Deleted",
              "Your have successfully deleted this application.",
              "success"
            );
            window.location.reload();
          })
          .catch((err) => {
            //console.log(err.response)
            alert("Delete unsuccessfull");
          });
      }
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
            // data-background="assets/img/hero/about.jpg"
            >
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>Applied Jobs</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {/* // <!-- Hero Area End --> */}
          <div>
            <p></p>

            {
              // <div>
              //     <div class="py-5 service-22">
              //         <div class="container">

              //             <div class="row wrap-service-22">

              //                 <div class="col-lg-6">
              //                     <img src={`http://localhost:89/${work.workid.photo}`} class="rounded img-shadow img-fluid" alt="wrapkit" style={{ height: "400px" }} />
              //                 </div>

              //                 <div class="col-lg-6 mt-4 mt-md-0">
              //                     <div class="text-box">
              //                         <h4 class="font-weight-light mt-2 mb-4">work Title: <span class="text-megna">{work.workid.worktitle}</span></h4>
              //                         <h6 class="font-weight-light">work Type: <span class="text-megna">{work.workid.worktype}</span></h6>
              //                         <h6 class="font-weight-light">Description: </h6><p>{work.workid.workdescription}</p>

              //                         <h6 class="font-weight-light">Required Experience: <span class="text-megna">{work.workid.requiredexperience}</span></h6>
              //                         <h6 class="font-weight-light">work Price: <span class="text-megna">{work.workid.estimatedprice}</span></h6>
              //                         <h6 class="font-weight-light">Email of client: <span class="text-megna">{work.workid.creator.email}</span></h6>
              //                         <h6 class="font-weight-light">Client company name: <span class="text-megna">{work.workid.creator.company}</span></h6>
              //                         <h6 class="font-weight-light">My Bidding Price: <span class="text-megna">${work.myamount}</span></h6>
              //                         <h6 class="font-weight-light">My Video resume: <span class="text-megna">{work.video}</span></h6>
              //                         <h6 class="font-weight-light">Applied on: <span class="text-megna">{work.createdAt}</span></h6>

              //                         {
              //                             work.confirmStatus === "Confirmed"
              //                                 ? (<p><h1>Your work application has been confirmed by client.</h1></p>)
              //                                 : work.confirmStatus === "denied"
              //                                     ? (<p><h2>Your work application has been denied by the client.</h2> </p>)

              //                                     : (<p class=".text-primary"><h2>Your work application is not reviewed by client.</h2></p>)
              //                         }

              //                         <Button class="btn btn-info-gradiant btn-md text-white border-0" onClick={this.deletework.bind(this, work._id)}><span>Delete this application</span></Button>

              //                     </div>
              //                 </div>

              //             </div>
              //         </div>
              //     </div>
              // </div>
              
              // ------------------------------------------------------------

              // <section class="ftco-section">
              //   <div class="container">
              //     <div class="row justify-content-center">
              //       <div class="col-md-6 text-center mb-5"></div>
              //     </div>
              //     <div class="row">
              //       <div class="col-md-12">
              //         <div class="table-wrap">
              //           <table class="table table-responsive-xl">
              //             <thead>
              //               <tr>
              //                 <th>&nbsp;</th>
              //                 <th>Details</th>
              //                 <th>Company Name</th>
              //                 <th>Status</th>
              //                 <th>Actions</th>
              //                 <th>&nbsp;</th>
              //               </tr>
              //             </thead>
              //             {this.state.appliedworks.map((work) => {
              //               return (
              //                 <tbody>
              //                   <tr class="alert" role="alert">
              //                     <td>
              //                       <label class="checkbox-wrap checkbox-primary">
              //                         <input type="checkbox" checked />
              //                         <span class="checkmark"></span>
              //                       </label>
              //                     </td>
              //                     <td class="d-flex align-items-center">
              //                       <div class="col-lg-6">
              //                         <img
              //                           src={`http://localhost:89/${work.workid.photo}`}
              //                           class="rounded img-shadow img-fluid"
              //                           alt="wrapkit"
              //                           style={{ height: "70px" }}
              //                         />
              //                       </div>
              //                       <div class="pl-3 email">
              //                         <span><h4>{work.workid.worktitle}</h4></span>
              //                         <span>
              //                           Appilied Date: {work.createdAt}
              //                         </span>
              //                       </div>
              //                     </td>
              //                     <td>Company XYZ</td>
              //                     <td class="status">
                                  
                                  
              //                       {/* <button
              //                                               type="button"
              //                                               class="close"
              //                                               data-dismiss="alert"
              //                                               aria-label="Close"
              //                                           >
              //                                               <span aria-hidden="true">
              //                                               <i class="fa fa-close"></i>
              //                                               </span>
              //                                           </button> */}

              //                       {work.confirmStatus === "Confirmed" ? (
              //                         <p>
              //                           <h4>
              //                           <span class="active">Active</span>
              //                           </h4>
              //                         </p>
              //                       ) : work.confirmStatus === "denied" ? (
              //                         <p>
              //                           <h4>
              //                           <span class="active">Denied</span>
              //                           </h4>
              //                         </p>
              //                       ) : (
              //                         <p class=".text-primary">
              //                           <h4>
              //                           <span class="waiting">Pending</span>
              //                           </h4>
              //                         </p>
              //                       )}
              //                       <div class="row mb-3 px-3">
              //                         {" "}
              //                         <button
              //                           type="submit"
              //                           class="btn btn-blue text-center"
              //                           onClick={this.deletework.bind(
              //                             this,
              //                             work._id
              //                           )}
              //                         >
              //                           Delete
              //                         </button>{" "}
              //                       </div>
              //                     </td>
              //                   </tr>
              //                 </tbody>
              //               );
              //             })}
              //           </table>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </section>

            

             <div> 
              <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th><h5>Details</h5></th>
                    <th><h5>Email</h5></th>
                    <th><h5>Company Name</h5></th>
                    <th><h5>Status</h5></th>
                    <th style={css1}><h5>Actions</h5></th>
                  </tr>
                </thead>
                {this.state.appliedworks.map((work) => {
                            return (
                              <tbody>
                              <tr>
                                <td>1</td>
                                <td><span><h4>{work.workid.worktitle}</h4></span>
                                    <span>
                                        Appilied Date: {work.createdAt}
                                    </span></td>
                                <td>{work.workid.creator.email}Company Email Here!!!</td>
                                <td>Company XYZ</td>
                                <td> {work.confirmStatus === "Confirmed" ? (
                                      <p>
                                        <h6>
                                        <span class="active">Active</span>
                                        </h6>
                                      </p>
                                    ) : work.confirmStatus === "denied" ? (
                                      <p>
                                        <h6>
                                        <span class="active">Denied</span>
                                        </h6>
                                      </p>
                                    ) : (
                                      <p class=".text-primary">
                                        <h6>
                                        <span class="waiting">Pending</span>
                                        </h6>
                                      </p>
                                    )}</td>
                                <td>
                                  <button type="button" class="btn0 btn-danger btn-xs dt-delete">
                                    <span class="glyphicon glyphicon-remove" aria-hidden="true"   onClick={this.deletework.bind( this,work._id)}>Delete</span>
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
            }
            
          </div>
          <Col></Col>
          </div>
    );
  }
}
