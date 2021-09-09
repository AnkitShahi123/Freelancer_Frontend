import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
const axios = require('axios').default;

const css = {
    height: "40px",
    width: "200px",
    marginTop: "10px",
    background: "#01d28e",
    color: "rgb(255, 255, 255)",
    padding: "8px 20px",
    borderRadius: "2px",
    outline: "none",  
    fontFamily: "Barlow, sans-serif"
}
const css1 = {
    height: "40px",
    width: "200px",
    marginTop: "10px",
    background: "#da2461",
    color: "rgb(255, 255, 255)",
    padding: "8px 20px",
    borderRadius: "2px",
    outline: "none",  
    fontFamily: "Barlow, sans-serif"
}

export default class report extends Component {
    state = {
        reports: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:89/work/showMyreported',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {

                this.setState({
                    reports: response.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }


    // approveClient = (id) => {
    //     Swal.fire({
    //         title: 'Approve this client?',
    //         icon: 'warning',
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, Approve'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
      
    //             axios({
    //                 method: "put",
    //                 url: 'http://localhost:89/work/approveThisWork/' + id,
    //                 data: { approval: "Verified by Admin." },
    //                 headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    //             })
    //             .then((response) => {
    //                 console.log(response)
                    
    //                 Swal.fire(
    //                     'Approved',
    //                     'Your have successfully approved this clients posting',
    //                     'success'
    //                   )
    //                 //window.location.reload()
    //             })
    //             .catch((err) => {
    //                 //console.log(err.response)
    //                 alert("Delete unsuccessfull")
    //             })
              
    //         }
      
    //       })
    // }

    approveClient = (id) => {
    
        axios({
          method: "put",
          url: "http://localhost:89/work/approveThisWork/" + id,
          data: { approval:'Work has been approved'},
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
          .then((response) => {
            console.log(response.data);
            alert("work has been approve");
          //  window.location.reload();
          })
          .catch((err) => {
            console.log(err.response);
            alert("Error denying work");
          });

          
          axios({
            method: "put",
            url: "http://localhost:89/work/afterReportAction/" + id,
            data: { status:'Resolved'},
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
          })
            .then((response) => {
              console.log(response.data);
              alert("report has been resolved");
            //  window.location.reload();
            })
            .catch((err) => {
              console.log(err.response);
              alert("report has not been resolved");
            });


      };
    

    
    deletework = (id) => {
        Swal.fire({
            title: 'Terminate this post?',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Terminate'
          }).then((result) => {
            if (result.isConfirmed) {
      
                axios.delete('http://localhost:89/work/delete/' + id, this.state.config)
                .then((response) => {
                    console.log(response)
                    //alert("Delete successfull")
                    Swal.fire(
                        'Deleted',
                        'Your have successfully terminated this post.',
                        'success'
                      )
                    window.location.reload()
                })
                .catch((err) => {
                    //console.log(err.response)
                    alert("Delete unsuccessfull")
                })
              
            }

            axios({
              method: "delete",
              url: "http://localhost:89/work/deleteMyreport/" + id,
              
              headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
            })
              .then((response) => {
              
                alert("report has been resolved");
              //  window.location.reload();
              })
              .catch((err) => {
                console.log(err.response);
                alert("report has not been resolved");
              });
      
          })

        

    }




    render() {

    

        return (
            <Container>
                <Row>

                    <div>
                        <p></p>

                        {
                            this.state.reports.map((work) => {
                                return (<div>
                                    <div class="py-5 service-22">
                                        <div class="container">

                                            <div class="row wrap-service-22">

                                                <div class="col-lg-6">
                                                    <img src={`http://localhost:89/${work.workid.photo}`} class="rounded img-shadow img-fluid" alt="wrapkit" style={{ height: "400px" }} />
                                                </div>

                                                <div class="col-lg-6 mt-4 mt-md-0">
                                                    <div class="text-box">
                                                        <h4 class="font-weight-light mt-2 mb-4">Report Status: <span class="text-megna">{work.status}</span></h4>
                                                        <h4 class="font-weight-light mt-2 mb-4">work Title: <span class="text-megna">{work.workid.worktitle}</span></h4>
                                                        <h6 class="font-weight-light">work Type: <span class="text-megna">{work.workid.worktype}</span></h6>
                                                        <h6 class="font-weight-light">Description: </h6><p>{work.workid.workdescription}</p>
                                                        <h6 class="font-weight-light">work Price: <span class="text-megna">{work.workid.estimatedprice}</span></h6>
                                                        <h6 class="font-weight-light">Email of client: <span class="text-megna">{work.workid.creator.email}</span></h6>
                                                        <h6 class="font-weight-light">Phone of client: <span class="text-megna">{work.workid.creator.phone}</span></h6>
                                                        <h6 class="font-weight-light">Client company name: <span class="text-megna">{work.workid.creator.company}</span></h6>
                                                        <h6 class="font-weight-light">Work reported by: <span class="text-megna">{work.userid.firstname}</span></h6>
                                                        <h6 class="font-weight-light">Work reported by: <span class="text-megna">{work.userid.email}</span></h6>
                                                        
                                                    
                                                        
                                                        <h6 class="font-weight-light">Reported on: <span class="text-megna">{work.createdAt}</span></h6>

                                                    

                                                        <button class=" btn-info-gradiant btn-md text-white border-0" style={css} onClick={this.approveClient.bind(this, work._id)}><span>Approve this client</span></button>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <button class=" btn-info-gradiant btn-md text-white border-0" style={css1}  onClick={this.deletework.bind(this, work._id)}><span>Terminate access</span></button>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }

                    </div>
                    <Col></Col>
                </Row>
            </Container>
        )
    }

}
