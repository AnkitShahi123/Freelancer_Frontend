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
  
  const css2 = {
    marginRight:"0px"
  };

export default class mysaved extends Component {
    state = {
        savedworks: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:89/work/showMySaved',
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
      
                axios.delete('http://localhost:89/work/deleteMySaved/' + id, this.state.config)
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
                                        <h2>My Saved Jobs</h2>
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
                    <th>&nbsp;</th>
                    <th>Work Title</th>
                    <th>Work Type</th>
                    <th>Description</th>
                    <th>Email</th>
                    <th>Company Name</th>
                    <th>Price</th>
                    <th style={css1}>Actions</th>
                  </tr>
                </thead>
                {this.state.savedworks.map((work) => {
                            return (
                              <tbody>
                              <tr>
                                <td>1</td>
                                <td><span><h5>{work.workid.worktitle}</h5></span></td>  
                                <td>{work.workid.worktype}</td>
                                <td>{work.workid.workdescription}</td>
                                <td>{work.workid.creator._id}</td>
                                <td>{work.workid.creator.company}</td>
                                <td>Done</td>
                                <td>
                                  <button type="button" class="btn0 btn-danger btn-xs dt-delete">
                                    <span class="glyphicon glyphicon-remove" aria-hidden="true"   onClick={this.deletework.bind(this, work._id)}>Delete</span>
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
            

        )
    }

}
