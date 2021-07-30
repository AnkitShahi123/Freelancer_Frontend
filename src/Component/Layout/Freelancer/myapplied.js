import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
const axios = require('axios').default;

export default class myApplied extends Component {
    state = {
        appliedworks: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:89/work/showMyApplied',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {

                this.setState({
                    appliedworks: response.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }


    deletework = (id) => {



        Swal.fire({
            title: 'Delete this application?',
            icon: 'warning',
      
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete'
          }).then((result) => {
            if (result.isConfirmed) {
      
                axios.delete('http://localhost:89/work/deleteMyApplied/' + id, this.state.config)
                .then((response) => {
                    console.log(response)
                    //alert("Delete successfull")
                    Swal.fire(
                        'Deleted',
                        'Your have successfully deleted this application.',
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
                            this.state.appliedworks.map((work) => {
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

                                                        <h6 class="font-weight-light">Required Experience: <span class="text-megna">{work.workid.requiredexperience}</span></h6>
                                                        <h6 class="font-weight-light">work Price: <span class="text-megna">{work.workid.estimatedprice}</span></h6>
                                                        <h6 class="font-weight-light">Email of client: <span class="text-megna">{work.workid.creator.email}</span></h6>
                                                        <h6 class="font-weight-light">Client company name: <span class="text-megna">{work.workid.creator.company}</span></h6>
                                                        <h6 class="font-weight-light">My Bidding Price: <span class="text-megna">${work.myamount}</span></h6>
                                                        <h6 class="font-weight-light">My Video resume: <span class="text-megna">{work.video}</span></h6>
                                                        <h6 class="font-weight-light">Applied on: <span class="text-megna">{work.createdAt}</span></h6>

                                                        {
                                                            work.confirmStatus === "Confirmed"
                                                                ? (<p>Your work application has been confirmed by client.</p>)
                                                                : work.confirmStatus === "denied"
                                                                    ? (<p>Your work application has been<h2>denied by the client.</h2> </p>)

                                                                    : (<p class=".text-primary">Your work application is not reviewed by client.</p>)
                                                        }

                                                        <Button class="btn btn-info-gradiant btn-md text-white border-0" onClick={this.deletework.bind(this, work._id)}><span>Delete this application</span></Button>

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
