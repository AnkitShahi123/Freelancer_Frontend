import Signup from './Signup';
import Login from './Login';
import Home from '../Common/home';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
const {Component}=require("react");

class Body extends Component {
  

    render() {
        return(
          <div>
              {/* <Route path="/" exact component={Home}/> */}
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              

          </div>


        )
    }

}

export default Body;