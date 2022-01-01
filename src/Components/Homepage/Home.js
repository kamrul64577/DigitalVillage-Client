import React from 'react'
// import image from '../image/h3.jpg'
import './HomePage.css'
import { Typewriter } from 'react-simple-typewriter'
import { Card, CardGroup, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



import news1 from '../image/news-1.jpg'
import news2 from '../image/news-2.jpg'
import news3 from '../image/news-3.jpg'

export default function Home() {
    
       
        
    
    const handleType = (count) => {
        // access word count number
        // console.log(count)
    }


    const handleDone = () => {
        // console.log(`Done after 5 loops!`)
    }
    
    return (
        <>
            {/* Header Section  */}
            <section className="banner d-flex justify-content-center align-items-center">
                <h1 className="text-white fst-italic"> Welcome to Digital Village

                     <br />{' '}
                    {/* Welcome To The Digital Village */}
                    <span className="span-color ms-5 ps-5">
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['আমাদের ডিজিটাল গ্রামে স্বাগতম','যেকোন বিচারিক কাজের জন্য ডিজিটাল পঞ্চায়েত','সবাই ডিজিটালভাবে সংযুক্ত ','যে কোন ধরনের সেবা পেতে আবেদন করুন', 'সহজেই আপডেটেট  খবর পাবেন']}
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

            <Container>
                <h3 className="repair my-4">আপনার কি নতুন  কিছু  তৈরি  বা মেরামত করা দরকার?</h3> <br/>
                <Link to="/repair" className="read-more apply">এখানে ক্লিক করুন</Link>

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
                </Container>
            </section>
            
        </>
    )
}