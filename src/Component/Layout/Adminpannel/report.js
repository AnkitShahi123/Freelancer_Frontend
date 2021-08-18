import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
const axios = require('axios').default;

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


    approveClient = (id) => {
        Swal.fire({
            title: 'Approve this client?',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Approve'
          }).then((result) => {
            if (result.isConfirmed) {
      
                axios({
                    method: "put",
                    url: "http://localhost:89/work/approveThisWork/" + id,
                    data: { approval: "Verified by Admin." },
                    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
                })
                .then((response) => {
                    console.log(response)
                    
                    Swal.fire(
                        'Approved',
                        'Your have successfully approved this clients posting',
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

    terminateClient = (id) => {
        Swal.fire({
            title: 'Terminate this client?',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Terminate'
          }).then((result) => {
            if (result.isConfirmed) {
      
                axios.delete('http://localhost:89/work/deletereport/' + id, this.state.config)
                .then((response) => {
                    console.log(response)
                    //alert("Delete successfull")
                    Swal.fire(
                        'Deleted',
                        'Your have successfully terminated this client.',
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

                                                    

                                                        <Button class="btn btn-info-gradiant btn-md text-white border-0" onClick={this.approveClient.bind(this, work._id)}><span>Approve this client</span></Button>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <Button class="btn btn-info-gradiant btn-md text-white border-0" onClick={this.terminateClient.bind(this, work._id)}><span>Terminate access</span></Button>

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
