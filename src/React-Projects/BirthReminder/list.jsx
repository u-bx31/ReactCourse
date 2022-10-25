import React, { useEffect, useState } from 'react';
import Data from './data';

const ListUsers = () => {

    const [data, SetData] = useState([])

    useEffect(() => {
        SetData([...Data])
    }, [])

    console.log(data);

    const handelClick = ()=>{
        SetData([])
    }

    return (
        <div className='p-sm-2 '>
            <h2 className='mb-3'>{data.length} BirthDay Reminder 🎉</h2>
            {data.map((user) => {
                const { id, name, age, image } = user;
                return (
                    <div className='d-flex p-sm-2 m-sm-2 mb-3 p-1 rounded-3 c-card w-100 align-items-center ' key={id}>
                        <img src={image} className='c-img' alt={name} />
                        <div className='ps-sm-4 ps-2 text-start'>
                            <h1 className='mb-0 mt-3'>{name}</h1>
                            <p className='ps-sm-3 ps-0'>{age} years</p>
                        </div>
                    </div>
                )
            })}
            <button type="button" class="btn btn-outline-primary w-75" onClick={handelClick}>Clear All</button>
        </div>

    );
}

export default ListUsers;