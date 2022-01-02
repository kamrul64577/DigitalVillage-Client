import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
// import AuthProvider from "./context/AuthProvider/AuthProvider";
// import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
// import Home from './Pages/Home/Home/Home';
// import LogIn from "./Pages/LogIn/LogIn/LogIn";
// import PrivateRoute from "./Pages/LogIn/PrivateRoute/PrivateRoute";
// import Register from "./Pages/LogIn/Register/Register";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AllServices from "./Pages/AllServices/AllServices";
// import RepairApplication from "./Pages/Home/RepairApplication/RepairApplication";
// import ApplyService from "./Pages/Services/ApplyService/ApplyService";
// import AllServices from "./Pages/AllServices/AllServices";
// import RequestServices from "./Pages/Dashboard/Services/RequestServices/RequestServices";
// import RequestRepairing from "./Pages/Dashboard/RequestedRepairing/RequestedRepairing";
// import AddNewService from "./Pages/Dashboard/Services/AddNewService/AddNewService";
// import NewsDetails from "./Pages/Home/NewsDetails/NewsDetails";
// import Event from "./Pages/Event/Event/Event";
// import RegisterForEvent from "./Pages/Event/RegisterForEvent/RegisterForEvent";
// import MaterialUIPickers from "./Pages/Dashboard/BirthDeathRegistration/MaterialUIPickers";
function App() {
  return (
    <div>
      {/* <AuthProvider> */}
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route> */}
            
            
            <Route path="/about-us">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contact-us">
              <ContactUs></ContactUs>
            </Route>
            {/* <Route path="/newsDetails/:newsId">
              <NewsDetails></NewsDetails>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/event">
              <Event></Event>
            </PrivateRoute>
            <PrivateRoute path="/repair">
              <RepairApplication></RepairApplication>
            </PrivateRoute>
            <PrivateRoute path="/applyService">
              <ApplyService></ApplyService>
            </PrivateRoute> */}
            <Route path="/all-services">
              <AllServices></AllServices>
            </Route>
            {/* <PrivateRoute path="/registerEvent/:eventId">
              <RegisterForEvent></RegisterForEvent>
            </PrivateRoute>

            <PrivateRoute path="/date">
              <MaterialUIPickers></MaterialUIPickers>
            </PrivateRoute> */}
        </Switch>
        <Footer></Footer>
      </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
