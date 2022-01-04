import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundPic from '../../images/not-found.svg'

const NotFound = () => {
    return (
        <div className="text-center">
            <img src={NotFoundPic} alt="" style={{ height: '80vh' }} />
            <h4 className="mt-3">
                <Link to="./" style={{ color: 'white', textDecoration: 'none', backgroundColor: '#263238', padding: '10px 15px' }}>Go to home page</Link>
            </h4>
        </div>
    );
};

export default NotFound;