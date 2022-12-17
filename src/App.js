import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Course from './React_course-hooks';
import Projects from './React-Projects';
import ContentMian from './component/conentMain';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>React Course | Home</title>
      </Helmet>
      <Routes>
        <Route path='/' element={<ContentMian />} />
        <Route path='/projects/*' element={<Projects />} />
        <Route path='/course/*' element={<Course />} />
      </Routes>
    </>
  );


}

export default App;
