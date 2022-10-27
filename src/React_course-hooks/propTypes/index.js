import React, { createContext, useEffect } from 'react';
import { useFetch } from '../customHook/useFetch';


import Products from './products'
export const ProductsData = createContext();
const url = "https://course-api.com/react-prop-types-example"


const Index = () => {

    const { data, loading } = useFetch(url);
    //--useContext--//
    // return (
    //     <ProductsData.Provider value={data} >
    //         <div>
    //             <Products />
    //         </div>
    //     </ProductsData.Provider>

    // );
    //normal Fetch//

    if (loading)
        return (
            <div className='container bg-white p-2 p-sm-4 text-center min-vh-100 d-flex justify-content-center align-items-center'>
                <div className='w-100 h-100 my-auto'>
                    <h1>loading . . . </h1>
                </div>
            </div>
        );

    else
        return (
            <div>
                {data.map((product) => { return <Products key={product.id} {...product} /> })}
            </div>
        );
}

export default Index;