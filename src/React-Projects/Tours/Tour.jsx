import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';

const Tour = ({ Tours, handleRemove}) => {
    const [readMore,setReadMore] = useState(false)


    const handleClick = ()=>{
        setReadMore(!readMore)
    }

    return (
        <React.Fragment>
            {Tours.map((c) => {
                const { id, name, info, image, price } = c;
                return (
                    <div className='mb-2 bg-white rounded-2 w-100' key={id}>
                        <div className="c-top ">
                            <img src={image} className='rounded-top' alt="" />
                        </div>
                        <div className="c-bottom px-sm-5 py-4 p-2">
                            <div className="text-start">
                                <div className=" c-b-text d-flex flex-wrap justify-content-between">
                                    <h2>{name}</h2>
                                    <h3>$ {price}</h3>
                                </div>
                                <p>{readMore ? info : `${info.substring(0,200)} . . . ` }
                                <button className='border-0 bg-transparent p-0 btn text-primary' onClick={handleClick}>{ !readMore ? 'ReadMore' : 'ReadLess'}</button>
                                </p>
                            </div>
                            <button className='btn btn-outline-danger mx-auto' onClick={()=>handleRemove(id)} >Not Interested</button>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>

    );
}

export default Tour;