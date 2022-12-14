import React, { useContext } from 'react';
import { appContext } from '.';

export function BiBagDashFill(props) {
    return (
        <svg className='i-nav' viewBox="0 0 16 16" {...props}><path fill="currentColor" fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"></path></svg>
    )
}

export function BiBagCheckFill(props) {
    return (
      <svg className='i-nav' viewBox="0 0 16 16" {...props}><path fill="currentColor" fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793L6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path></svg>
    )
  }

const Navbar = () => {
    const { state } = useContext(appContext)
    return (
        <div className='navbar navbar-dark nv-p4'>
            <div className="container my-2 px-md-5">
                <h1 className='navbar-brand fw-bold fs-2'>UseReducer</h1>
                <div className='icon'>
                    <BiBagDashFill />
                    <span className="amont">{state.amount}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar; <>
</>