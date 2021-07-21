import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const { Component } = require("react");


class Header extends Component {
    state = {
        clicked: false
    }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    logout() {
        localStorage.clear();
        window.location.href = '/login';
    }

    render() {

        if (localStorage.getItem('token') && localStorage.getItem('role') === 'Client') {
            var menu =
                <div>

                    <Navbar bg="light" expand="lg" bg="light" class="navbar">
                        <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Navbar.Brand>
                        <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbarmobile" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto" >
                                <Nav.Link ><Link className="navbarText" to="/"> Home</Link></Nav.Link>
                               
                                <Nav.Link ><Link className="navbarText" to="/contact">Contact us</Link></Nav.Link>
                                <Nav.Link><Link className="navbarText" to="/profileClient">Profile</Link></Nav.Link>
                                <Nav.Link><Link className="navbarText" to="/addJob">Add Job</Link></Nav.Link>
                                
                                <Button variant="outline-success" onClick={this.logout}>Logout</Button>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>

                </div>
        }
        else if (localStorage.getItem('token') && localStorage.getItem('role') === 'Freelancer') {
            var menu =
                <div>

                    <Navbar bg="light" expand="lg" bg="light" class="navbar">
                        <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Navbar.Brand>
                        <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link className="navbarText" to="/"> Home</Link></Nav.Link>
                                  <Nav.Link><Link className="navbarText" to="/contact">Contact us</Link></Nav.Link>
                                  <Nav.Link><Link className="navbarText" to="/profile">Profile</Link></Nav.Link>
                                  <Nav.Link><Link className="navbarText" to="/showAllJob">Show all works</Link></Nav.Link>

                                <Button variant="outline-success" onClick={this.logout}>Logout</Button>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>

                </div>
        }
        else if (localStorage.getItem('token') && localStorage.getItem('role') === 'Admin') {
            var menu =
                <div>

                    <Navbar bg="light" expand="lg" bg="light" class="navbar">
                        <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Navbar.Brand>
                        <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link className="navbarText" to="/"> Home</Link></Nav.Link>
                                
                                <Button variant="outline-success" onClick={this.logout}>Logout</Button>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
        } else {
            var menu =


            <header>
        {/* <!-- Header Start --> */}
       <div class="header-area header-transparrent">
           <div class="headder-top header-sticky">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-2">
                            {/* <!-- Logo --> */}
                            <div class="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                            </div>  
                        </div>
                        <div class="col-lg-9 col-md-9">
                            <div class="menu-wrapper">
                                {/* <!-- Main-menu --> */}
                                <div class="main-menu">
                                    <nav class="d-none d-lg-block">
                                        <ul id="navigation">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="job_listing.html">Find a Jobs </a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="#">Page</a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                    <li><a href="elements.html">Elements</a></li>
                                                    <li><a href="job_details.html">job Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>          
                                {/* <!-- Header-btn --> */}
                                <div class="header-btn d-none f-right d-lg-block">
                                    <a href="#" class="btn head-btn1">Register</a>
                                    <a href="#" class="btn head-btn2">Login</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Mobile Menu --> */}
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
        {/* <!-- Header End --> */}
    </header>
                // <div>
                //     <Navbar bg="light" expand="lg" bg="light" class="navbar">
                //         <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                //         </Navbar.Brand>
                //         <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>
                //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                //         <Navbar.Collapse id="basic-navbar-nav">
                //             <Nav className="ml-auto">
                //                 <Nav.Link><Link className="navbarText" to="/"> Home</Link></Nav.Link>

                //                 <Nav.Link><Link className="navbarText" to="/contact">Contact us</Link></Nav.Link>

                //                 <Button variant="outline-success"><Link className="navbarText" to="/login">Login</Link></Button>
                //                 <Button variant="outline-success"><Link className="navbarText" to="/signup">Register</Link></Button>
                //             </Nav>

                //         </Navbar.Collapse>
                //     </Navbar>
                // </div>
        }

        return (
            <div>

                {menu}



            </div>
        )
    }

}

export default Header;