import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import AuthProvider from "./context/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
// import Home from './Pages/Home/Home/Home';
// import LogIn from "./Pages/LogIn/LogIn/LogIn";
// import PrivateRoute from "./Pages/LogIn/PrivateRoute/PrivateRoute";
// import Register from "./Pages/LogIn/Register/Register";

import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home"
import LogIn from "./Pages/LogIn/LogIn/LogIn";
import Register from "./Pages/LogIn/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Footer from "./Pages/Shared/Footer/Footer";
import PrivateRoute from "./Pages/LogIn/PrivateRoute/PrivateRoute";
import Event from "./Pages/Event/Event/Event";
import AddNewService from "./Pages/Dashboard/Services/AddNewService/AddNewService";
import AddEvent from "./Pages/Dashboard/Event/AddEvent/AddEvent";
import AllServices from "./Pages/AllServices/AllServices";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceBooking from "./Pages/AllServices/ServiceBooking/ServiceBooking";
import RegisterForEvent from "./Pages/Event/RegisterForEvent/RegisterForEvent";
import RepairApplication from "./Pages/RepairApplication/RepairApplication";

// import AuthProvider from "./context/AuthProvider/AuthProvider";
// import RepairApplication from "./Pages/Home/RepairApplication/RepairApplication";
// import ApplyService from "./Pages/Services/ApplyService/ApplyService";

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
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/all-services">
              <AllServices></AllServices>
            </Route>

            <Route path="/login">
              <LogIn></LogIn>
            </Route>

            <Route path="/signup">
              <Register></Register>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            
            <Route path="/contact-us">
              <ContactUs></ContactUs>
            </Route>

            <Route path="/add-services">
              <AddNewService></AddNewService>
            </Route>

            <Route path="/all-services">
              <AllServices></AllServices>
            </Route>

            {/* <Route path="/newsDetails/:newsId">
              <NewsDetails></NewsDetails>
            </Route> */}

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/event">
              <Event></Event>
            </PrivateRoute>
            <PrivateRoute path="/repair">
              <RepairApplication></RepairApplication>
            </PrivateRoute>
            {/* <PrivateRoute path="/applyService">
              <ApplyService></ApplyService>
            </PrivateRoute> */}

            <Route path="/add-event">
              <AddEvent></AddEvent>
            </Route>

            <PrivateRoute path="/serviceBooking/:serviceId">
              <ServiceBooking></ServiceBooking>
             </PrivateRoute>
            <PrivateRoute path="/registerEvent/:eventId">
              <RegisterForEvent></RegisterForEvent>
            </PrivateRoute>

            {/* <PrivateRoute path="/date">
              <MaterialUIPickers></MaterialUIPickers>
            </PrivateRoute> */}
            
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
