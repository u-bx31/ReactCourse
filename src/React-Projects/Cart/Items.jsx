import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '.';
import Item from './item';


const Items = () => {

    const { state, RemoveAll } = useContext(appContext)
    if (state.items.length === 0) {
        return (
            <div className='container c-p4-con min-vh-100 text-center py-5  px-0'>
                <Link to={'/projects'} className='btn btn-outline-primary mb-4'>{`<-- Back to Projects`}</Link>
                <h1 className='m-0'>Your Bag </h1>
                <div className='c-hr1 mx-auto'></div>
                <div className="row row-cols-1 mx-auto mt-5">
                    <h2>Empty cart</h2>
                    <div className="col-lg-8 my-3 mx-auto" >
                        <div className='c-hr2 mx-auto'></div>
                        <div className="d-flex justify-content-between fs-4">
                            <p>Total :</p>
                            <p>$ {state.total} </p>
                        </div>
                        <button className='btn btn-outline-danger w-50' onClick={() => RemoveAll()}>Clear All</button>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='container c-p4-con min-vh-100 text-center py-5  px-0'>
                <Link to={'/projects'} className='btn btn-outline-primary mb-4'>{`<-- Back to Projects`}</Link>
                <h1 className='m-0'>Your Bag </h1>
                <div className='c-hr1 mx-auto'></div>
                <div className="row row-cols-1 mx-auto mt-5">
                    {state.items.map((c) => {
                        return (
                            <Item key={c.id} {...c} />
                        )
                    })}
                    <div className="col-lg-8 my-3 mx-auto" >
                        <div className='c-hr2 mx-auto'></div>
                        <div className="d-flex justify-content-between fs-4">
                            <p>Total :</p>
                            <p>$ {state.total} </p>
                        </div>
                        <button className='btn btn-outline-danger w-50' onClick={() => RemoveAll()}>Clear All</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Items;