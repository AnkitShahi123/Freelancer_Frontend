import React, { Component } from "react";
import './admin.css';


export default class AdminLogin extends Component {
    render() {
        return (
            

            <div className="auth-wrapper-admin">
                
                <div className="adminImg">
                        <img src = '/image/admin.jpg'/>
                p</div>

                <div className="auth-inner-admin">

                   


                    <div className="login-form-admin">

                        <form>
                        <h1>Admin</h1>

                        <div className="form-group-admin">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group-adminPwd">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        {/* <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div> */}

                        <button type="submit" className="btn btn-primary btn-block btnSubmit">Login</button>
                        {/* <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p> */}
                    </form>
                    </div>
                </div>
            </div>
    
        );
    }
}