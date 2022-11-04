import React, { useState, useEffect } from 'react';


const Menu = ({ data }) => {

    return (
        data.map((c) => {
            const { id, title, price, img, desc } = c
            return (
                <div className='p-3 p-sm-2' key={id}>
                    <div className='row c-menu my-1 g-2'>
                        <div className="col-lg col-auto w-100 c-img2">
                            <img src={require(`${img}`)} className='w-100 c-img1 rounded-2' alt={title} />
                        </div>
                        <div className='col c-col-text mx-2 rounded-2 p-sm-3 p-2'>
                            <div className="d-flex justify-content-between c-btm align-items-center">
                                <h4>{title}</h4>
                                <h5>{price}</h5>
                            </div>
                            <p className='text-start'>{desc}</p>
                        </div>
                    </div>
                </div>
                

            )
        })
    );
}

export default Menu;