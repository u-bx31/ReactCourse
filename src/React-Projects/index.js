

import ReactProjects from "./ReactProjects";

import { Route, Routes } from "react-router-dom";

import ProjectBirthDayReminder from './BirthReminder/container';
import ProjectTours from './Tours';
import ProjectMenu from './Menu';
import ProjectCart from './Cart';
import ProjectBook from './BookLibrary/bookList';
import { Helmet } from "react-helmet";


const Index = () => {
    return (
        <>
            <Helmet>
                <title>React Course | Projects</title>
            </Helmet>
            <Routes>
                <Route path='/' element={<ReactProjects />} />
                <Route path='/birthDayReminder' element={<ProjectBirthDayReminder />} />
                <Route path='/tours' element={<ProjectTours />} />
                <Route path='/menu' element={<ProjectMenu />} />
                <Route path='/cart' element={<ProjectCart />} />
                <Route path='/bookLibrary' element={<ProjectBook />} />
            </Routes>
        </>
    );
}

export default Index;