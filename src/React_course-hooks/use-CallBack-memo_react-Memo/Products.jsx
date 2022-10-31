import React, { useState, useEffect, useContext } from 'react';
import { ProductData } from '.';

//use React memo to check props value if is not change, wil not re-render component 
const Products = ({data , IncrementCart}) => {

    // const {data,IncrementCart} = useContext(ProductData)

    useEffect(()=>{
        console.log("product");
    })


    return (
        <React.Fragment>
            {data.map((product) => {
                const { id,company, price, name, image } = product.fields;
                return (
                    <div className="col" key={product.id}>
                        <div className="card shadow-sm">
                            <img src={image[0].url} alt={name} className="bd-placeholder-img card-img-top" width="100%" height="300" style={{objectFit:"cover"}} ></img>
                            <div className="card-body">
                                <p className="card-text">{name}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={IncrementCart}>Add to Cart</button>
                                    </div>
                                    <small className="text-muted">{price / 100} $</small>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </React.Fragment>

    );
}

export default React.memo(Products);