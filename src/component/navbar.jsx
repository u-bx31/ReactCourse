import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid p-4 justify-content-center">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-brand text-white" >Book Library</a>
            </div>
        </nav>
    );
}

export default Navbar;