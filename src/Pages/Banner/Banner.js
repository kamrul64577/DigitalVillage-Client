import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './Banner.css'

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
        </div>
    );
};

export default Banner;