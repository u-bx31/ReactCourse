import React, { useContext } from 'react';

import {PersonContext} from './useContext'

const SinglePersone = ({id,name}) => {
    const {remove} = useContext(PersonContext)

    return (
        <div className='bg-light p-2 m-2 d-flex justify-content-between' key={id}>
            <h3>{name}</h3>
            <button className='btn btn-outline-dark' onClick={()=>remove(id)}>remove</button>
        </div>
    );
}

export default SinglePersone;
