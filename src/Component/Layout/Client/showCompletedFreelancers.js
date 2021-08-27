import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
const axios = require('axios').default;

export default class showCompletedFreelancers extends Component {
    state = {
        completedusers: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:89/work/showCompletedFreelancers',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {

                this.setState({
                    completedusers: response.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }


    contactme = () => {



        Swal.fire({
            title: 'Contact this person?',
            icon: 'warning',
      
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
      
                axios.delete('http://localhost:89/work/deleteshowCompletedFreelancers/' + this.state.config)
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
            <Container>
                <Row>

                    <div>
                        <p></p>

                        {
                            this.state.completedusers.map((work) => {
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

                                                        
                                                        <h6 class="font-weight-light">User Name: <span class="text-megna">{work.userid.firstname} {work.userid.lastname}</span></h6>
                                                        <h6 class="font-weight-light">Phone: <span class="text-megna">{work.userid.phone}</span></h6>
                                                        <h6 class="font-weight-light">Email: <span class="text-megna">{work.userid.email}</span></h6>
                                                        {/* <h6 class="font-weight-light">Email of client: <span class="text-megna">{work.workid.creator.email}</span></h6> */}
                                                        {/* <h6 class="font-weight-light">Client company name: <span class="text-megna">{work.workid.creator.company}</span></h6> */}
                                                    
                                                        
                                                        <h6 class="font-weight-light">Work Completed on: <span class="text-megna">{work.createdAt}</span></h6>

                                                        

                                                        <a href={`mailto:${work.userid.email}`}><Button class="btn btn-info-gradiant btn-md text-white border-0"><span>Contact this person</span></Button></a>

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
