import Signup from "./Signup";
import Login from "./Login";
import home from "../Common/Home";
import Profile from "../Freelancer/profile";
import editUserProfile from "../Freelancer/edituserprofile";
import editclientProfile from "../Client/editclientprofile";
import profileClient from "../Client/profileClient";
import addJob from "../Client/addJob";
import updatework from "../Client/updatework";
import showAllJob from "../Freelancer/showAllJob";
import findJobs from "../Common/findJobs";
import jobDetails from "../Common/jobDetails";
import contact from "../Common/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import adminpanel from "../Adminpannel/adminpanel";
import report from "../Adminpannel/report";
import myApplied from "../Freelancer/myapplied";
import mysaved from "../Freelancer/mysaved";
import myStartedWorks from "../Freelancer/myStartedWorks";
import showMyPreviousWorks from "../Freelancer/showMyPreviousWorks";
import myListings from "../Client/myListings";
import applicantsList from "../Client/applicantsList";
import showCompletedFreelancers from "../Client/showCompletedFreelancers";
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
        <Route path="/report" component={report} />

        {/* For Client  */}
        <Route path="/addJob" component={addJob} />
        <Route path="/updatework/:id" component={updatework} />
        <Route path="/myListings" component={myListings} />
        <Route path="/showCompletedFreelancers" component={showCompletedFreelancers} />
        <Route path="/applicantsList/:id" component={applicantsList} />
        <Route path="/profileClient" component={profileClient} />
        <Route path="/editclientprofile/:id" component={editclientProfile} />

        {/* For Freelancer  */}
        <Route path="/showAllJob" component={showAllJob} />
        <Route path="/profile" component={Profile} />
        <Route path="/findJobs" component={findJobs} />
        <Route path="/jobDetails/:id" component={jobDetails} />
        <Route path="/myApplied" component={myApplied} />
        <Route path="/mysaved" component={mysaved} />
        <Route path="/myStartedWorks" component={myStartedWorks} />
        <Route path="/showMyPreviousWorks" component={showMyPreviousWorks} />
        <Route path="/contact" component={contact} />
        <Route path="/edituserprofile/:id" component={editUserProfile} />
      </Switch>
    </div>
  );
}
  
};

