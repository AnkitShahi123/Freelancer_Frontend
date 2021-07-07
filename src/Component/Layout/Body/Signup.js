import { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './login.css';
const axios = require('axios').default;


class Signup extends Component {
    state = {
        firstname: '',
        lastname: '',
        age: '',
        address: '',
        phone: '',
        email: '',
        password: '',
        photo: '',
        role: ''

    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileHandler = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }

    sendUserInfo = (e) => {
        e.preventDefault()

        const data = new FormData() // new line
        var image = this.refs.photo.files[0];
        data.append('firstname', this.state.firstname)
        data.append('lastname', this.state.lastname)
        data.append('age', this.state.age)
        data.append('address', this.state.address)
        data.append('phone', this.state.phone)
        data.append('email', this.state.email)
        data.append('password', this.state.password)
        data.append('photo', image)
        data.append('role', this.state.role)



        axios({
            method: 'post',
            url: 'http://localhost:89/user/add',
            data: data,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then(response => {
                console.log(response);
                console.log(response.data);
                alert("User has been registered successfully. Please update your profile by adding additional details after logging in.")
                window.location.href = '/login';
            })
            .catch(err => {
                console.log(err.response);
                alert("Registration unsuccessfull")
        //        window.location.href = '/register';
            })

    };


    render() {

        return (
            <div>
                <div className="login">

                    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                        <div class="card cardReg0 border-0">
                            <div class="row d-flex">
                                <div class="col-lg-6">
                                    <div class="cardReg1 pb-5">
                                        <div class="row">
                                            <div class="row px-5 justify-content-center mt-3 mb-5 border-line"> <h1>Register</h1> </div>
                                        </div>
                                        <div class="row px-3 justify-content-center mt-4 mb-5 border-line"><figure><img src="image/register.jpg" alt="sing up image" /></figure> </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="cardReg2 card border-0 px-4 py-5">
                                        <h4>Fill your details here</h4>
                                        <p></p><p></p><p></p>
                                        <div class="row px-3"> <label class="mb-1">
                                            <h6 class="mb-0 text-sm">First Name</h6>
                                        </label> <input class="mb-4" type="text" className="form-rounded" placeholder="Enter your firstname" value={this.state.firstname} name="firstname" onChange={this.inputHandler} required /> </div>
                                        <div class="row px-3"> <label class="mb-1">
                                            <h6 class="mb-0 text-sm">Last Name</h6>
                                        </label> <input class="mb-4" type="text" className="form-rounded" placeholder="Enter your last name" value={this.state.lastname} name="lastname" onChange={this.inputHandler} required required /> </div>
                                        <div className="row px-3"> <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Age</h6>
                                        </label> <input className="mb-4" type="number" className="form-rounded" placeholder="Enter age" value={this.state.age} name="age" onChange={this.inputHandler} required /> </div>
                                        <div className="row px-3"> <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Address</h6>
                                        </label> <input className="mb-4" type="text" className="form-rounded" placeholder="Enter your address" value={this.state.address} name="address" onChange={this.inputHandler} required /> </div>

                                        <div className="row px-3"> <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Phone number</h6>
                                        </label> <input className="mb-4" type="number" className="form-rounded" placeholder="Enter phonenumber" value={this.state.phone} name="phone" onChange={this.inputHandler} required /> </div>
                                        <div className="row px-3"> <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Email Address</h6>
                                        </label> <input className="mb-4" type="email" name="email" className="form-rounded" placeholder="Enter a valid email address" value={this.state.email} name="email" onChange={this.inputHandler} required /> </div>
                                        <div className="row px-3"> <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Password</h6>
                                        </label> <input type="password" name="password" placeholder="Enter password" className="form-rounded" value={this.state.password} name="password" onChange={this.inputHandler} required /> </div>
                                        <div className="row px-3"> <label className="mb-1">
                                            <h6 class="mb-0 text-sm">Role</h6>
                                        </label>
                                            <p></p>
                                            
                                            <input class="mb-4" type="text" class="form-rounded" placeholder="Type if you are Customer or Company" value={this.state.role} name="role" onChange={this.inputHandler} /> 
                                            </div>
                                        <div class="row px-3 mb-4">

                                            <p>
                                                <input type="file" name="photo" class="form-rounded" ref="photo" />
                                            </p>
                                        </div>
                                        <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center" onClick={this.sendUserInfo}>Register</button> </div>
                                        <div class="row mb-4 px-3"> <small class="font-weight-bold">Already a user? <a class="text-danger "><Link to='/login'>Login</Link></a></small> </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        )
    }

}
export default Signup;