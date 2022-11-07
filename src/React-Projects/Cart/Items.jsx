import React, { useState } from 'react';
import { useContext } from 'react';
import { appContext } from '.';

const Items = () => {

    const { data } = useContext(appContext)
    return (
        <div className='container c-p4-con min-vh-100 text-center py-5'>
            <h1>Your Bag </h1>
            <div className="row row-cols-1 w-100 mt-5">
                {data.map((c) => {
                    const { id, title, price, img, amount } = c;
                    return (
                        <div className="col my-2" key={id}>
                            <div className="row">
                                <div className="col"><img src={img} width="100px" alt="" /></div>
                                <div className="col-7 text-start">
                                    <h3>{title}</h3>
                                    <h5>{price}</h5>
                                </div>
                                <div className="col">{amount}</div>
                            </div>

                        </div>
                    )

                })}
            </div>


        </div>
    );
}

export default Items;