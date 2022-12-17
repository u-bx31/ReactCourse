import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import About from './About';
import Error from './Error';
import Home from './Home';
import People from './People';
import Persone from './Persone';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';


const Index = () => {
    return (
        <div className='container bg-white p-2 p-sm-4'>
            <Helmet>
                <title>React Course | React-Router</title>
            </Helmet>
            <Link to='/Course' className='btn btn-outline-dark mt-3'>{`<-- back`}</Link>
            <div className=' text-center'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/People' element={<People />} />
                    <Route path='/Persone&&:id' element={<Persone />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </div>
        </div>

    );
}

export default Index;