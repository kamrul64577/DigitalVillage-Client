import React from 'react';
import NotFoundPic from '../../images/not-found.svg'

const NotFound = () => {
    return (
        <div>
            <img src={NotFoundPic} alt="" style={{height: '100vh'}} />
        </div>
    );
};

export default NotFound;