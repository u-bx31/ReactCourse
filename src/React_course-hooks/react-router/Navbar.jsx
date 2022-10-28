import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
                <li class="nav-item">
                <Link className='nav-link active' aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item"><Link to="/About" class="nav-link">About</Link></li>
                <li class="nav-item"><Link to="/People" class="nav-link">People</Link></li>
            </ul>
        </header>
    );
}

export default Navbar;