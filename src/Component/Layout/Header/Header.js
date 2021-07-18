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
                <div>
                    <Navbar bg="light" expand="lg" bg="light" class="navbar">
                        <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Navbar.Brand>
                        <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link className="navbarText" to="/"> Home</Link></Nav.Link>

                                <Nav.Link><Link className="navbarText" to="/contact">Contact us</Link></Nav.Link>

                                <Button variant="outline-success"><Link className="navbarText" to="/login">Login</Link></Button>
                                <Button variant="outline-success"><Link className="navbarText" to="/signup">Register</Link></Button>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
        }

        return (
            <div>

                {menu}



            </div>
        )
    }

}

export default Header;