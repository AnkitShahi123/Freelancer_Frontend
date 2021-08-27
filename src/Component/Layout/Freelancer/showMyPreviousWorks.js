import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
const axios = require('axios').default;

const css1 = {
    textAlign:"center",
    width:"100px"
  };

export default class showMyPreviousWorks extends Component {
    state = {
        savedworks: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:89/work/showMyStopped',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {

                this.setState({
                    savedworks: response.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }


    deletework = (id) => {



        Swal.fire({
            title: 'Delete this saved work?',
            icon: 'warning',
      
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete'
          }).then((result) => {
            if (result.isConfirmed) {
      
                axios.delete('http://localhost:89/work/showMyPreviousWorks/' + id, this.state.config)
                .then((response) => {
                    console.log(response)
                    //alert("Delete successfull")
                    Swal.fire(
                        'Deleted',
                        'Your have successfully deleted this saved work.',
                        'success'
                      )
                    window.location.reload()
                })
                .catch((err) => {
                    //console.log(err.response)
                    alert("Delete unsuccessfull")
                })
              
            }
      
          })
    }




    render() {

    

        return (
            // <Container>
            //     <Row>

            //         <div>
            //             <p></p>

            //             {
            //                 this.state.savedworks.map((work) => {
            //                     return (<div>
            //                         <div class="py-5 service-22">
            //                             <div class="container">

            //                                 <div class="row wrap-service-22">

            //                                     <div class="col-lg-6">
            //                                         <img src={`http://localhost:89/${work.workid.photo}`} class="rounded img-shadow img-fluid" alt="wrapkit" style={{ height: "400px" }} />
            //                                     </div>

            //                                     <div class="col-lg-6 mt-4 mt-md-0">
            //                                         <div class="text-box">
            //                                             <h4 class="font-weight-light mt-2 mb-4">work Title: <span class="text-megna">{work.workid.worktitle}</span></h4>
            //                                             <h6 class="font-weight-light">work Type: <span class="text-megna">{work.workid.worktype}</span></h6>
            //                                             <h6 class="font-weight-light">Description: </h6><p>{work.workid.workdescription}</p>

            //                                             <h6 class="font-weight-light">Required Experience: <span class="text-megna">{work.workid.requiredexperience}</span></h6>
            //                                             <h6 class="font-weight-light">work Price: <span class="text-megna">{work.workid.estimatedprice}</span></h6>
            //                                             {/* <h6 class="font-weight-light">Email of client: <span class="text-megna">{work.workid.creator.email}</span></h6> */}
            //                                             {/* <h6 class="font-weight-light">Client company name: <span class="text-megna">{work.workid.creator.company}</span></h6> */}
                                                    
                                                        
            //                                             <h6 class="font-weight-light">Completed on: <span class="text-megna">{work.createdAt}</span></h6>

                                                    

                                                    

            //                                         </div>
            //                                     </div>

            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     )
            //                 })
            //             }

            //         </div>
            //         <Col></Col>
            //     </Row>
            // </Container>
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
                                        <h2>My Previous Jobs</h2>
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
                    <th><h5>Work Description</h5></th>
                    <th><h5>My Bidding amount</h5></th>
                    <th><h5>Posted On</h5></th>
                  </tr>
                </thead>
                {this.state.savedworks.map((work) => {
                            return (
                              <tbody>
                              <tr>
                              <td><img
                                    src={`http://localhost:89/${work.workid.photo}`}
                                    alt="" style={{ height:100, width:120 }}
                                  /></td>
                                <td>{work.workid.worktitle}</td>
                                <td>{work.workid.workdescription}</td>
                                <td>${work.myamount}</td>
                                <td>{work.createdAt}</td>
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
        )
    }

}
