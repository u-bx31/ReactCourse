import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid d-flex flex-column text-center">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-brand text-white" >Book Library</a>
                <Link to={'/projects'} className='btn btn-outline-light mb-4'>{`<-- Back to Projects`}</Link>
            </div>
        </nav>
    );
}

export default Navbar;