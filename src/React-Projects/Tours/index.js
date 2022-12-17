import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useFetch } from '../../React_course-hooks/customHook/useFetch';
import Tour from './Tour';

const url = 'https://course-api.com/react-tours-project';

const Index = () => {

    const [tour, setTour] = useState([]);
    const { data, loading } = useFetch(url)

    const handleRemove = (id) => {
        const newTour = tour.filter((c) => c.id !== id)
        setTour(newTour)
    }

    useEffect(() => {
        setTour(data)
    }, [data])


    return (
        <main className='c-mns w-100 container text-center'>
            <Helmet>
                <title>React Projects | Tours</title>
            </Helmet>
            <h1>Our Tour</h1>
            <div className='c-hr mx-auto'></div>
            <Link to={'/projects'} className='btn btn-light mt-3'>{`<-- Back to Projects`}</Link>
            <div className="row py-lg-5">
                {loading ?
                    <div className="col-lg-6 col-md-8 mx-2 col mx-sm-auto bg-white c-cont rounded-2 ">
                        <div className='p-2'>
                            <div className="spinner-border m-5 text-center" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <h1>Loading...</h1>
                        </div>
                    </div>
                    :
                    <div className="col-lg-7 col-md-8 mx-1 col mx-sm-auto p-0">
                        <div className='p-2'>
                            <Tour Tours={tour} handleRemove={handleRemove} />
                        </div>
                    </div>
                }

            </div>

        </main>
    );
}



export default Index; <>
</>