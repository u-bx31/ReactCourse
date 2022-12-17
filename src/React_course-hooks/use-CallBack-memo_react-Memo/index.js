import React, { useState, useEffect, createContext, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useFetch } from '../customHook/useFetch'
import Products from './Products';


const url = "https://course-api.com/javascript-store-products"
export const ProductData = createContext();
const mostExpensive = (data2)=>{
    console.log('ggs');
    return(
        data2.reduce((total,item)=>{
            const price = item.fields.price;
            if(price >= total){
                total = price;
            }
            return total;
        },0) / 100
    )
}

const Index = () => {

    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);


    const Counter = () => {
        setCount(count + 1);
    }

    const IncrementCart = useCallback(() => {
        setCart(cart + 1);
    },[cart])
    


    const { data } = useFetch(url)

    const mstexp = useMemo(()=>mostExpensive(data),[data])

    return (
        <div className='container bg-white'>
            <Helmet>
                    <title>React Course | UseCallBack-UseMemo</title>
                </Helmet>
            <ProductData.Provider value={{data , IncrementCart}}>
            <Link to='/course' className='btn btn-outline-dark  mt-3'>{`<-- back`}</Link>
                <main>
                    <section className="py-5 text-center container">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-bold">Most Expensive Price : ${mstexp}</h1>
                                <h1 className="fw-bold">Count : {count}</h1>
                                <button className='btn btn-primary' onClick={Counter}>Add</button>
                                <h1 className="fw-bold mt-2">Cart : {cart}</h1>
                            </div>
                        </div>
                    </section>

                    <div className="album py-5">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {/* <Products cart={cart} /> */}
                                <Products  data={data} IncrementCart={IncrementCart}/>
                            </div>
                        </div>
                    </div>

                </main>
            </ProductData.Provider>
        </div>
    );
}

export default Index;