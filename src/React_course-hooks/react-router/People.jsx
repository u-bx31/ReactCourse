import React, { useEffect, useState } from 'react';
import Data from '../../React-Projects/BirthReminder/data';

const People = () => {
    const [data, SetData] = useState([])

    useEffect(() => {
        SetData([...Data])
    }, [])

    return (
        <div className=''>
            <main className='w-100 mx-sm-auto m-0 mt-5'>
                <div class="row">
                    <div class="col-lg-6 col-md-8 col mx-sm-auto">
                        <h2>List Of People</h2>
                        <div className="mt-4">
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
                        </div>

                    </div>
                </div>
            </main>

        </div>
    );

}

export default People;


