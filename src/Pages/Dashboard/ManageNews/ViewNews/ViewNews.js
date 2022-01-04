
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/News`)
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);

    const handleDeleteNews = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://shielded-falls-80975.herokuapp.com/news/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingNews = news.filter(news => news._id !== id);
                        setNews(remainingNews);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-2">News</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>Title</th>       
                            <th>Description</th>
                            <th>Image Url</th>

                            <th>Action</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            news.map(ns =>
                                <tr>
                                    <td>{ns.title}</td>
                                    <td>{ns.description}</td>
                                    <td><img  style={{width:'100px', height:'100px'}} src={ns.image} alt="" /></td>


                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteNews(ns._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>Delete</button>

                                        <button className="btn " style={{ backgroundColor: '#A3A9A4', marginTop: '5px' }} ><Link to={`/dashboard/updateNews/${ns._id}`} style={{ textDecoration: 'none', color: 'white' }}>Update </Link></button>

                                    </td>
                                </tr>

                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewNews;
