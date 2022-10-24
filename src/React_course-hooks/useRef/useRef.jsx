import React, { useRef, useEffect } from 'react';


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
        <div>
            <h1 className='text-danger mb-3'>.../useRef</h1>
            <form>
                <div className="mb-3 d-flex flex-sm-row flex-column align-items-center" >
                    <label htmlFor="email" className="text-start w-50  ">Email : </label>
                    <input type="email" className="form-control " id="email" name='email' ref={refContainer} aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary w-75" ref={divContainer} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default UseRefBasics;
