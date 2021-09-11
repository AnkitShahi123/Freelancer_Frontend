import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const axios = require("axios").default;

const css1 = {
  textAlign:"center",
  width:"100px"
};

const css2 = {
  marginRight:"0px"
};

class allclient extends Component {
  state = {
    freelancers:[{}],
    clients:[{}],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
    
  };

  async componentDidMount() {
    await axios
      .get("https://freelancerbackend.herokuapp.com/allClient")
      .then((response) => {
         this.setState({
          clients: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Error. Please Login first");
      });
  }
  // async componentDidMount() {
  //   await axios
  //     .get("https://freelancerbackend.herokuapp.com/allFreelancer")
  //     .then((response) => {
  //        this.setState({
  //         freelancers: response.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Error. Please Login first");
  //     });
  // }

  deleteUser = (id) => {
    axios({
      method: "delete",
      url: "https://freelancerbackend.herokuapp.com/deleteUser/" + id,
      
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
      
        alert("User has been deleted");
      //  window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        alert("User has not been deleted");
      });

  
  };


  render() {
    

    return (
      <div>
        
              <div> 
        <h1> Registered Clients</h1>
              <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th><h5>Photo</h5></th>
                    <th><h5>Full Name</h5></th>
                    <th><h5>Email</h5></th>
                    <th><h5>Role</h5></th>
                    <th><h5>Address</h5></th>
                    <th><h5>Age</h5></th>
                    <th><h5>Company</h5></th>
                    
                    <th><h5>Phone</h5></th>
                    <th><h5>Projects</h5></th>
                    <th><h5>User Bio</h5></th>
                    <th><h5>Joined On</h5></th>
                    <th style={css1}><h5>Actions</h5></th>
                  </tr>
                </thead>
                {this.state.clients.map((user) => {
                            return (
                              <tbody>
                              <tr>
                              <th>&nbsp;</th>
                                <td > <img
                          src={`https://freelancerbackend.herokuapp.com/${user.photo}`}
                          alt=""
                          style={{ width:'100px' , height: "80px" }}
                        /></td>
                                <td>{user.firstname}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.address}</td>
                                <td>{user.age}</td>
                                <td>{user.company}</td>
                                
                                <td>{user.phone}</td>
                                <td>{user.projects}</td>
                                <td>{user.userbio}</td>
                                <td>Joined on: {user.createdAt}</td>
                                <td>
                                  <button type="button" class="btn0 btn-danger btn-xs dt-delete" onClick={this.deleteUser.bind( this,user._id)}>
                                    <span class="glyphicon glyphicon-remove" aria-hidden="true">Delete</span>
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

export default allclient;
