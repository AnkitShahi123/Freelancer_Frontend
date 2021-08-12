import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
const axios = require('axios').default;

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
            <Container>
                <Row>

                    <div>
                        <p></p>

                        {
                            this.state.savedworks.map((work) => {
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
                                                        {/* <h6 class="font-weight-light">Email of client: <span class="text-megna">{work.workid.creator.email}</span></h6> */}
                                                        {/* <h6 class="font-weight-light">Client company name: <span class="text-megna">{work.workid.creator.company}</span></h6> */}
                                                    
                                                        
                                                        <h6 class="font-weight-light">Completed on: <span class="text-megna">{work.createdAt}</span></h6>

                                                    

                                                    

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
