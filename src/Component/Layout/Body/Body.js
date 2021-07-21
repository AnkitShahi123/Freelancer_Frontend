import Signup from "./Signup";
import Login from "./Login";
import home from "../Common/Home";
import Profile from "../Freelancer/profile";
import editUserProfile from "../Freelancer/edituserprofile";
import editclientProfile from "../Client/editclientprofile";
import profileClient from "../Client/profileClient";
import addJob from "../Client/addJob";
import showAllJob from "../Freelancer/showAllJob";
import findJobs from "../Common/findJobs";
import jobDetails from "../Common/jobDetails";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import adminpanel from "../Adminpannel/adminpanel";
const {Component}=require("react");

export default class Body extends Component {
render() {
  return (
    <div>
      <Switch>
      <Route path="/" exact component={home}/>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        
        <Route path="/profile" component={Profile} />

        {/* For admin */}
        <Route path="/adminpanel" component={adminpanel} />

        {/* For Client  */}
        <Route path="/addJob" component={addJob} />
        <Route path="/profileClient" component={profileClient} />
        <Route path="/editclientprofile/:id" component={editclientProfile} />

        {/* For Freelancer  */}
        <Route path="/showAllJob" component={showAllJob} />
        <Route path="/profile" component={Profile} />
        <Route path="/findJobs" component={findJobs} />
        <Route path="/jobDetails" component={jobDetails} />
        <Route path="/edituserprofile/:id" component={editUserProfile} />
      </Switch>
    </div>
  );
}
  
};

