import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Card, CardGroup, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Banner.css'

import news1 from '../../images/news-1.jpg'
import news2 from '../../images/news-2.jpg'
import news3 from '../../images/news-3.jpg'

const Banner = () => {
    /* 
    const [news, setNews] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:5000/news")
            .then(data => {
                setNews(data.data)
            })
    }, [])
    */
    const handleType = (count) => {
        // access word count number
        // console.log(count)
    }


    const handleDone = () => {
        // console.log(`Done after 5 loops!`)
    }
    return (
        <div>
            <section className="banner d-flex justify-content-center align-items-center">
                <h1 className="text-white">Welcome to Digital Village

                    <br />{' '}
                    {/* Welcome To The Digital Village */}
                    <span className="span-color ms-5 ps-5">
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Digital panchayat for any judicial work', 'Everyone is digitally connected', 'Apply to get any kind of service', 'Get updated news easily']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
            </section>

            {/* request section */}
            <Container>
                <Row className="w-75 mx-auto">
                    <div className="col-8">
                        {/* <h3 className="repair my-4">আপনার কি নতুন  কিছু  তৈরি  বা মেরামত করা দরকার?</h3> <br /> */}
                        <h3 className="repair my-4">Do you want to request for any service?</h3>
                    </div>
                    <div className="col-4 my-auto">
                        <Link to="/repair" className="read-more apply">এখানে ক্লিক করুন</Link>
                    </div>
                </Row>
            </Container>

            {/* News Section  */}
            <section>
                <Container>
                    <div className="text-center py-5">
                        <h1 className="news-header">Every Single Update From Our Journal</h1>
                        <p className="news-subHeader">Recent News</p>
                    </div>
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
            </section>
        </div>
    );
};

export default Banner;