import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({children, ...rest}) => {
    const {user,userType, isLoading} = useAuth()
    if(isLoading) {
        return <CircularProgress/>
    }
    return (
        <Route {...rest}
           render = {({location})=> 
          user.email && userType === 'admin'? (
              children
              ):(
            
              <Redirect
                 to={{
                 pathname:"/",
                 state: {from : location}
                 }}

               /> 

          )
          }

        />
    );
};

export default AdminRoute;