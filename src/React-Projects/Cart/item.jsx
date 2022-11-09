import React, { useContext, useState } from 'react';
import { appContext } from '.';

export function BiBagPlus(props) {
    return (
        <svg className='i-c' viewBox="0 0 16 16" {...props}><g fill="currentColor"><path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"></path><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path></g></svg>
    )
}

export function BiBagDash(props) {
    return (
        <svg className='i-c' viewBox="0 0 16 16" {...props}><g fill="currentColor"><path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"></path><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path></g></svg>
    )
}

const Item = ({ id, title, price, img, amount },) => {

    const { RemoveItem, incrementItem, decrementItem } = useContext(appContext)
    return (
        <div className="col-lg-8 my-3 mx-auto" key={id}>
            <div className="row c-p4-row mx-sm-auto p-3 rounded-2 ">
                <div className="col"><img src={img} width="100px" alt="" /></div>
                <div className="col-sm-7 text-sm-start c-col-p4">
                    <h4>{title}</h4>
                    <h5 className='ms-sm-3'>$ {price}</h5>
                    <button className='btn bg-none text-danger' onClick={()=>RemoveItem(id)}>remove</button>

                </div>
                <div className="col c-amount d-flex flex-md-column justify-content-center align-items-center">
                    <button onClick={()=>incrementItem(id)}>
                        <BiBagPlus />
                    </button>
                    <span className='c-amount1'>{amount}</span>
                    <button onClick={()=>decrementItem(id)}>
                        <BiBagDash />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Item;