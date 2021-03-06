import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const { Component } = require("react");

const CSS = {
    background: "#fb246a",
    color: "#fff ",
    padding: "8px 20px",
    borderRadius: "2px",
    outline: "none",
    fontFamily: "Barlow,sans-serif"
}

const fontCss = {
    fontFamily: "Barlow,sans-serif"
}


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
                // <div>

                //     <Navbar bg="light" expand="lg" bg="light" class="navbar">
                //         <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                //         </Navbar.Brand>
                //         <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>
                //         <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbarmobile" />
                //         <Navbar.Collapse id="basic-navbar-nav">
                //             <Nav className="ml-auto" >
                //                 <Nav.Link ><Link className="navbarText" to="/"> Home</Link></Nav.Link>
                               
                //                 <Nav.Link ><Link className="navbarText" to="/contact">Contact us</Link></Nav.Link>
                //                 <Nav.Link><Link className="navbarText" to="/profileClient">Profile</Link></Nav.Link>
                //                 <Nav.Link><Link className="navbarText" to="/addJob">Add Job</Link></Nav.Link>
                //                 <Nav.Link><Link className="navbarText" to="/myListings">My Postings</Link></Nav.Link>
                                
                //                 <Button variant="outline-success" onClick={this.logout}>Logout</Button>

                //             </Nav>

                //         </Navbar.Collapse>
                //     </Navbar>

                // </div>

                <header>
                {/* <!-- Header Start --> */}
               <div class="header-area header-transparrent">
                   <div class="headder-top header-sticky">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-3 col-md-2">
                                    {/* <!-- Logo --> */}
                                    <div class="logo">
                                        <Link to="/"><img src="assets/img/logo/logo.png" alt=""/></Link>
                                    </div>  
                                </div>
                                <div class="col-lg-9 col-md-9">
                                    <div class="menu-wrapper">
                                        {/* <!-- Main-menu --> */}
                                        <div class="main-menu">
                                            <nav class="d-none d-lg-block">
                                                <ul id="navigation">
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/addJob">Add Job</Link></li>
                                                    <li><Link to="/myListings">My Postings</Link></li>
                                                    <li><Link to="/showCompletedFreelancers">Completed Freelancers</Link></li>
                                                    <li><Link to="/profileClient">Profile</Link></li>
                                                </ul>
                                            </nav>
                                        </div>          
                                        {/* <!-- Header-btn --> */}
                                        <div class="header-btn d-none f-right d-lg-block">
                                        <Button variant="outline-success" onClick={this.logout} style={CSS}>Logout</Button>
    
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
            </header>
        }
        else if (localStorage.getItem('token') && localStorage.getItem('role') === 'Freelancer') {
            var menu =
                // <div>

                //     <Navbar bg="light" expand="lg" bg="light" class="navbar">
                //         <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                //         </Navbar.Brand>
                //         <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                //         <Navbar.Collapse id="basic-navbar-nav">
                //             <Nav className="ml-auto">
                //                 <Nav.Link><Link className="navbarText" to="/"> Home</Link></Nav.Link>
                //                   <Nav.Link><Link className="navbarText" to="/contact">Contact us</Link></Nav.Link>
                //                   <Nav.Link><Link className="navbarText" to="/profile">Profile</Link></Nav.Link>
                //                   <Nav.Link><Link className="navbarText" to="/showAllJob">Show all works</Link></Nav.Link>
                //                   <Nav.Link><Link className="navbarText" to="/myApplied">My applied works</Link></Nav.Link>
                //                   <Nav.Link><Link className="navbarText" to="/mysaved">My Saved works</Link></Nav.Link>

                //                 <Button variant="outline-success" onClick={this.logout}>Logout</Button>

                //             </Nav>

                //         </Navbar.Collapse>
                //     </Navbar>

                // </div>

                
            <header>
            
           <div class="header-area header-transparrent">
               <div class="headder-top header-sticky">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-md-2">
                                {/* <!-- Logo --> */}
                                <div class="logo">
                                    <Link to="/"><img src="assets/img/logo/logo.png" alt=""/></Link>
                                </div>  
                            </div>
                            <div class="col-lg-9 col-md-9">
                                <div class="menu-wrapper">
                                    {/* <!-- Main-menu --> */}
                                    <div class="main-menu">
                                        <nav class="d-none d-lg-block">
                                            <ul id="navigation">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/showAllJob">Find a Work </Link></li> 
                                                <li><a href="#">More Actions</a>
                                                    <ul class="submenu">
                                                        <li><Link to="/myApplied">My Applied Jobs</Link></li>
                                                        <li><Link to="/mysaved">My Saved Works</Link></li>
                                                        <li><Link to="/myStartedWorks">My Started Works</Link></li>
                                                        <li><Link to="/showMyPreviousWorks">My Previous completed Works</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/contact">Contact</Link></li>
                                                <li><Link to="/profile">Profile</Link></li>
                                            </ul>
                                        </nav>
                                    </div>          
                                    {/* <!-- Header-btn --> */}
                                    <div class="header-btn d-none f-right d-lg-block">
                                    <Button variant="outline-success" onClick={this.logout} style={CSS}>Logout</Button>

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
        </header>
        }
        else if (localStorage.getItem('token') && localStorage.getItem('role') === 'Admin') {
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
                                    <Link to="/"><img src="assets/img/logo/logo.png" alt=""/></Link>
                                </div>  
                            </div>
                            <div class="col-lg-9 col-md-9">
                                <div class="menu-wrapper">
                                    {/* <!-- Main-menu --> */}
                                    <div class="main-menu">
                                        <nav class="d-none d-lg-block">
                                            <ul id="navigation">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/report">Reports</Link></li>
                                                
                                                {/* <li><Link to="/findJobs">Find a Jobs </Link></li>  */}
                                                <li><Link to="/showAllforAdmin">View Jobs </Link></li> 
                                          
                                                <li><a href="#">More Actions</a>
                                                    <ul class="submenu">
                                          
                                          
                                                        
                                                        <li><Link to="/allclient">All Client</Link></li>
                                                        <li><Link to="/adminpanel">All freelancers</Link></li>
                                          
                                                    </ul>
                                                </li>
                                         
                                          
                                            </ul>
                                        </nav>
                                    </div>          
                                    {/* <!-- Header-btn --> */}
                                    <div class="header-btn d-none f-right d-lg-block">
                                    <Button variant="outline-success" onClick={this.logout} style={CSS}>Logout</Button>

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
        </header>
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
                                <Link to="/"><img src="assets/img/logo/logo.png" alt=""/></Link>
                            </div>  
                        </div>
                        <div class="col-lg-9 col-md-9">
                            <div class="menu-wrapper">
                                {/* <!-- Main-menu --> */}
                                <div class="main-menu">
                                    <nav class="d-none d-lg-block">
                                        
                                    </nav>
                                </div>          
                                {/* <!-- Header-btn --> */}
                                <div class="header-btn d-none f-right d-lg-block">
                                    <Link to="/signup" class="btn head-btn1" style= {CSS}>Register</Link>
                                    <Link to="/login" class="btn head-btn2" style={fontCss}>Login</Link>
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