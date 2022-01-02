import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebas';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase();

    if (isLoading) {
        return < CircularProgress />


    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;