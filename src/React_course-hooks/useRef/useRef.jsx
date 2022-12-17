import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


//does not trigger re-render
//use to trget the DOM/Element
const UseRefBasics = () => {

    const refContainer = useRef(null)
    const divContainer = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(refContainer.current.value)
        console.log(divContainer.current)
        divContainer.current.click()

    }

    return (
        <div className='container bg-white p-5 '>
            <Helmet>
                <title>React Course | UseRef</title>
            </Helmet>
            <Link to='/course' className='btn btn-outline-dark  mt-3'>{`<-- back`}</Link>
            <h1 className='text-danger mb-3'>.../useRef : <q>check out console</q></h1>
            <form className='text-center'>
                <div className="mb-3 d-flex flex-sm-row flex-column align-items-center" >
                    <label htmlFor="email" className="text-start w-50  ">Email : </label>
                    <input type="email" className="form-control " id="email" name='email' ref={refContainer} aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary w-50" ref={divContainer} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default UseRefBasics;
