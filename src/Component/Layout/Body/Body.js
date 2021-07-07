import Signup from './Signup';
import Login from './Login';
// import Home from '../Common/home';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import AdminLogin from '../Adminpannel/Adminlogin';
import DashboardCharts from '../Adminpannel/Admindashboard';



const Routes = ({ location }) => {

    const checkRoute = () => {

        const splitLocation = location.pathname.split("/")
        if (splitLocation.length > 1) {
            if (splitLocation[1] === "admin") {
                return true;
            }
        }

        return false;
    }

            return (
                <>
                <Switch>
                    {/* <Route path="/" exact component={Home}/> */}
                    <Route path='/signup' component={Signup} />
                    <Route path='/login' component={Login} />

                    {/* For Admin */}
                    <Route path="/admin/" render={({ location, history }) => (
                        <main id="wrapper" className="wrapper">

                            <Route path="/admin/" exact component={AdminLogin} />
                            <Route path="/admin/dashboard" component={DashboardCharts} />


                        </main>
                    )} />
                </Switch>
                {/* {!checkRoute && "/admin'" && <Footer/>} */}
                </>


            )
        }

export default withRouter(Routes);