import React, { useEffect } from 'react';
import ListUsers from './list';

const MainContainer = () => {

    

    return (
        <main className='w-100 mx-sm-auto m-0 mt-5'>
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-2 col mx-sm-auto bg-white c-cont rounded-2 ">
                    <div className='p-2'>
                        <ListUsers />
                    </div>

                </div>
            </div>
        </main>
    );
}

export default MainContainer;
