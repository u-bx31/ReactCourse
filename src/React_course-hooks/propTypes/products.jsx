import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { ProductsData } from '.';

//using shortCircuit

// const Products = () => {
//     const data = useContext(ProductsData)
//     return (
//         <React.StrictMode>
//             {data.map((product) => {
//                 const { id, name, image, price } = product
//                 const url = image && image.url;
//                 return (
//                     <div class="row py-lg-5" key={id}>
//                         <div class="col-lg-6 col-md-8 mx-2 col mx-sm-auto bg-white c-cont rounded-2 p-0 ">
//                             <img src={url || 'https://letusstudy.in/clientside/images/no-image.png'} className="c-img1 w-100 rounded-top" alt="" />
//                             <h4 className='m-3'>{name}</h4>
//                             <p className='text-secondary'>$ {price || 0.00}</p>
//                         </div>
//                     </div>
//                 )
//             })}

//         </React.StrictMode>
//     );
// }
const Products = ({id,name,image,price}) => {
    console.log(image);
    return (
        <>
            <div className="row py-lg-5" key={id}>
                <div className="col-lg-6 col-md-8 my-2 col mx-sm-auto bg-white c-cont rounded-2 p-0 ">
                    <img src={image.url || image} className="c-img1 w-100 rounded-top" alt="" />
                    <h4 className='m-3'>{name}</h4>
                    <p className='text-secondary'>$ {price }</p>
                </div>
            </div>
        </>
    );
}
Products.prototype = {
    name : PropTypes.string.isRequired,
    price : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
}

Products.defaultProps = {
    name : "unknonw",
    price : "unknonw",
    image : "https://letusstudy.in/clientside/images/no-image.png",
}

export default Products;