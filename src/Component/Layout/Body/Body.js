import Signup from "./Signup";
import Login from "./Login";
import Profile from "../Common/profile";
import editUserProfile from "../Common/edituserprofile";
import ClientProfile from "../Common/clientprofile";
import addJob from "../Client/addJob";
import showAllJob from "../Freelancer/showAllJob";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import adminpanel from "../Adminpannel/adminpanel";

const Routes = ({ location }) => {
  const checkRoute = () => {
    const splitLocation = location.pathname.split("/");
    if (splitLocation.length > 1) {
      if (splitLocation[1] === "admin") {
        return true;
      }
    }

    return false;
  };

  return (
    <>
      <Switch>
        {/* <Route path="/" exact component={Home}/> */}
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        
        <Route path="/profile" component={Profile} />

        {/* For admin */}
        <Route path="/adminpanel" component={adminpanel} />

        {/* For Client  */}
        <Route path="/addJob" component={addJob} />
        <Route path="/clientprofile" component={ClientProfile} />

        {/* For Freelancer  */}
        <Route path="/showAllJob" component={showAllJob} />
        <Route path="/profile" component={Profile} />
        <Route path="/edituserprofile" component={editUserProfile} />
      </Switch>
    </>
  );
};

export default withRouter(Routes);
