import React, { useEffect } from 'react';
import ListUsers from './list';

const MainContainer = () => {

    useEffect(()=>{
        document.title = "BirthdayReminder"
    })

    return (
        <main className='w-100 mx-sm-auto m-0 mt-5'>
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-2 col mx-sm-auto bg-white c-cont rounded-2 ">
                    <div className='p-2'>
                        <ListUsers />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainContainer;
