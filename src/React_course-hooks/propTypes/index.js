import React, { createContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
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
                <Helmet>
                    <title>React Course | PropTypes</title>
                </Helmet>
                <div className='w-100 h-100 my-auto'>
                    <h1>loading . . . </h1>
                </div>
            </div>
        );

    else
        return (
            <div className='container bg-white'>
                <Helmet>
                    <title>React Course | PropTypes</title>
                </Helmet>
                <Link to='/course' className='btn btn-outline-dark  mt-3'>{`<-- back`}</Link>
                {data.map((product) => { return <Products key={product.id} {...product} /> })}
            </div>
        );
}

export default Index;