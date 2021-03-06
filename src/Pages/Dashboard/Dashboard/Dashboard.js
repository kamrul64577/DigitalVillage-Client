import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import RequestServices from '../Services/RequestServices/RequestServices';
import MakeLocalJournalist from '../MakeLocalJournalist/MakeLocalJournalist';
import MakeServiceOfficer from '../MakeServiceOfficer/MakeServiceOfficer'
import MakeEventCoordinator from '../MakeEventCoordinator/MakeEventCoordinator'
import AddEvent from '../Event/AddEvent/AddEvent'; 
import {
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import AddNewService from '../Services/AddNewService/AddNewService';
import ViewServices from '../Services/ManageServices/ViewServices/ViewServices';
import RequestRepairing from '../RequestedRepairing/RequestedRepairing';
import UpdateService from '../Services/ManageServices/UpdateService/UpdateService';
import AddNews from '../ManageNews/AddNews/AddNews';
import ViewNews from '../ManageNews/ViewNews/ViewNews';
import UpdateNews from '../ManageNews/UpdateNews/UpdateNews';
import ViewEvent from '../Event/ViewEvent/ViewEvent'
import RequestForBooking from '../RequestForBooking/RequestForBooking';
import ViewBooking from '../RequestedBooking/ViewBooking';
import MyBooking from '../RequestForBooking/MyBooking';
import { Button } from 'muicss/react';
import BirthRegistration from '../BirthDeathRegistration/BirthRegistration/BirthRegistration';
import ViewBirthInfo from '../ViewBirthDeathInfo/ViewBirthInfo/ViewBirthInfo';
import DeathRegistration from '../BirthDeathRegistration/DeathRegistration/DeathRegistration';
import ViewDeathInfo from '../ViewBirthDeathInfo/ViewDeathInfo/ViewDeathInfo';
import ApplicationOfEvent from '../Event/ApplicationOfEvent/ApplicationOfEvent';
import AddReview from '../Review/AddReview/AddReview';
import MyServiceBooking from '../MyServiceBooking/MyServiceBooking';
import MyEvents from '../Event/MyEvents/MyEvents';
import AdminRoute from '../../SecureRouts/AdminRoute/AdminRoute';
const drawerWidth = 260;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const {user, userType, logOut } = useAuth();
    const [admin, setAdmin] =React.useState(false);
    const [journalist, setJournalist] =React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    console.log(userType, user.email);
    const handleDrawerClose = () => {
        setOpen(false);
    };

    

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                        Welcome to the Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                   Navigation
                </DrawerHeader>
                <List>
                    <Link style={{ textDecoration: 'none', marginLeft: '15px', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6',color: '#070903', padding: '7px', borderRadius: '10px' }} to="/">Back to Home </Link>
                    <br/>
                    
                   {
                        userType === '' && <Box>
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/requestForBooking`}>Book the Wedding Hall </Link>
                             <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/myBooking`}>My Hall Booking Information</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/birthRegistration`}>Register Birth</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/deathRegistration`}>Register Death</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addReview`}>Add Review</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/myServiceBooking`}>My ServiceBooking</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/myEvents`}>My Events</Link> <br />
                        </Box>
                   }
                    {
                        userType ==="serviceofficer" && <Box>
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addNewService`}>Add New Service</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewServices`}>Services</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/requestedServices`}>Sent Services</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/requestedRepairing`}>Sent Repairs</Link> <br />

                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewBirthInfo`}>Birth Registration information </Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewDeathInfo`}>Death Registration Information </Link> <br />
                        </Box>
                    }
                    {
                        userType==="journalist" && <Box>
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewNews`}>News </Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addNews`}>Add New News </Link> <br />
                        </Box>
                    }
                    {
                        userType ==="eventCoordinator" && <Box>
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewEvent`}>Events</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addEvent`}>Add New Events </Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewEventRegistration`}>Applied Event</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px', marginBottom: '20px' }} to={`${url}/viewBooking`}>All hall Booking</Link> <br />
                        </Box>
                    }

                    {userType ==="admin" && <Box>
                        <Link activeStyle={{ color: 'red' }} style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }}to={`${url}/makeAdmin`}>Add Admin </Link> <br/>
                        {/* <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }}to={`${url}/makeLocalJournalist`}>Add Repoters</Link> <br/> */}
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/makeServiceOfficer`}>Add Service Officers</Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/makeEventCoordinator`}>Add Event Co-ordinator</Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addNewService`}>Add New Service</Link>
                         <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewServices`}>Services</Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewBirthInfo`}>Birth Registration Information</Link> <br/>

                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewDeathInfo`}>Death Registration Information </Link> <br />
                        {/* <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/requestedServices`}>Sent Services</Link>  */}
                        <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/requestedRepairing`}>Requested Repairs</Link>
                         <br/>
                        {/* <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewNews`}>News </Link> <br/>

                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor:'#DAD3C6', padding:'7px', borderRadius:'10px' }} to={`${url}/addNews`}>Add New News </Link>
                         <br/> */}
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewEvent`}>Delete Events</Link> <br/>

                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewEventRegistration`}>Applied Event</Link> 
                        <br />

                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addEvent`}>Add New Event </Link> 
                        <br/>

                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px', marginBottom:'20px' }} to={`${url}/viewBooking`}>All Booking hall</Link> <br/>
                        {/* <Link style={{ textDecoration: 'none', marginLeft: '15px' }} to={`${url}/requestedRepairing`}>Requested Repairing</Link> <br/> */}


                    </Box>}
                    
                </List>
                {user.email && <Button className="mb-5 bg-dark" onClick={logOut}><h6 style={{ textDecoration: 'none', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }}>Log Out</h6></Button>}
                
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Route exact path={`${path}`}>
                    <DashboardHome></DashboardHome>
                </Route >
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute >
                <Route path={`${path}/addReview`}>
                    <AddReview></AddReview>
                </Route >
                <Route path={`${path}/myServiceBooking`}>
                    <MyServiceBooking></MyServiceBooking>
                </Route >
                <Route path={`${path}/myEvents`}>
                    <MyEvents></MyEvents>
                </Route >

                <AdminRoute path={`${path}/makeServiceOfficer`}>
                    <MakeServiceOfficer></MakeServiceOfficer>
                </AdminRoute >
                <AdminRoute path={`${path}/makeEventCoordinator`}>
                    <MakeEventCoordinator></MakeEventCoordinator>
                </AdminRoute >
                <Route path={`${path}/makeLocalJournalist`}>
                    <MakeLocalJournalist></MakeLocalJournalist>
                </Route >
                <AdminRoute path={`${path}/addNewService`}>
                    <AddNewService></AddNewService>
                </AdminRoute>
                <Route path={`${path}/viewServices`}>
                    <ViewServices></ViewServices>
                </Route >
                <AdminRoute path={`${path}/updateService/:serviceId`}>
                    <UpdateService></UpdateService>
                </AdminRoute >
                <Route path={`${path}/requestedServices`}>
                    <RequestServices></RequestServices>
                </Route >
                <Route path={`${path}/requestedRepairing`}>
                    <RequestRepairing></RequestRepairing>
                </Route >
                <Route path={`${path}/birthRegistration`}>
                    <BirthRegistration></BirthRegistration>
                </Route >
                <Route path={`${path}/deathRegistration`}>
                    <DeathRegistration></DeathRegistration>
                </Route >
                <Route path={`${path}/viewBirthInfo`}>
                    <ViewBirthInfo></ViewBirthInfo>
                </Route >
                <Route path={`${path}/viewDeathInfo`}>
                    <ViewDeathInfo></ViewDeathInfo>
                </Route >
                <Route path={`${path}/addNews`}>
                    <AddNews></AddNews>
                </Route >
                <Route path={`${path}/viewNews`}>
                    <ViewNews></ViewNews>
                </Route >
                <Route path={`${path}/updateNews/:newsId`}>
                    <UpdateNews></UpdateNews>
                </Route >

                <Route path={`${path}/addEvent`}>
                    <AddEvent></AddEvent>
                </Route >
                <Route path={`${path}/viewEvent`}>
                    <ViewEvent></ViewEvent>
                </Route >
                <Route path={`${path}/viewEventRegistration`}>
                    <ApplicationOfEvent></ApplicationOfEvent>
                </Route >

                <Route path={`${path}/requestForBooking`}>
                    <RequestForBooking></RequestForBooking>
                </Route >
                <Route path={`${path}/viewBooking`}>
                    <ViewBooking></ViewBooking>
                </Route >
                <Route path={`${path}/myBooking`}>
                    <MyBooking></MyBooking>
                </Route >
            </Main>
        </Box>
    );
}