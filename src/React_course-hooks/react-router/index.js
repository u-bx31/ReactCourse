import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './About';
import Error from './Error';
import Home from './Home';
import People from './People';
import Persone from './Persone';
import Navbar from './Navbar';


const Index = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/About' element={<About />} />
                <Route path='/People' element={<People />} />
                <Route path='/Persone&&:id' element={<Persone />} />
                <Route path='*' element={<Error />}/> 
            </Routes>
        </Router>
    );
}

export default Index;