import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import news1 from '../../images/news-1.jpg'
import news2 from '../../images/news-2.jpg'
import news3 from '../../images/news-3.jpg'

const News = () => {
    return (
        <div>
            {/* News Section  */}
            <>            
                <div className="text-center py-5">
                    <h1 className="news-header">Every Single Update From Our Journal</h1>
                    <p className="news-subHeader">Recent News</p>
                </div>
                <Container>
                    <div className="news-body mb-5">
                        <CardGroup className="gap-5">
                            <Card className="news-card">
                                <Card.Img className="card-img" variant="top" src={news1} />
                                <Card.Body>
                                    <Card.Title>News Title -$</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                    <Link to="" className="read-more">Read More </Link>
                                </Card.Body>
                            </Card>
                            <Card className="news-card">
                                <Card.Img className="card-img" variant="top" src={news2} />
                                <Card.Body>
                                    <Card.Title>News Title -$</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                    <Link to="" className="read-more">Read More </Link>
                                </Card.Body>
                            </Card>
                            <Card className="news-card">
                                <Card.Img className="card-img" variant="top" src={news3} />
                                <Card.Body>
                                    <Card.Title>News Title -$</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                    <Link to="" className="read-more">Read More </Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                    {/* 
                    <div className="text-center pt-5 w-25">
                        <h1 className="news-header">আপডেট খবর পেতে আমাদের সাথে থাকুন </h1>
                        <p className="news-subHeader">সাম্প্রতিক খবর </p>
                    </div>
                    <div className="news-body mb-5">
                        <CardGroup className="gap-5">
                            {
                                news.map(ns => 
                                    <Card className="news-card">
                                        <Card.Img className="card-img" variant="top" src={ns.image} />
                                        <Card.Body>
                                            <Card.Title>{ns.title}</Card.Title>
                                            <Card.Text>
                                                {ns.description.slice(1,125)} .......
                                            </Card.Text>
                                            <Link to={`/newsDetails/${ns._id}`} className="read-more">আরো পড়ুন  </Link>
                                        </Card.Body>
                                    </Card>
                                    )
                            }
                           
                        </CardGroup>
                    </div>
                    */}
                </Container>
            </>
        </div>
    );
};

export default News;