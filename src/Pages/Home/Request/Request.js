import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Request = () => {
    return (
        <>
            {/* request section */}
            <Container>
                <Row className="mx-auto" style={{width: '95%'}}>
                    <div className="col-8">
                        <h3 className="repair my-4 text-end">Do you want to request for any service?</h3>
                    </div>
                    <div className="col-4 my-auto ps-0">
                        <Link to="/repair" className="read-more apply btn btn-success rounded-pill px-3">Click here</Link>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Request;