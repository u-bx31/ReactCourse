import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useFetch } from '../customHook/useFetch';


const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    //useEffect show only when initial render
    useEffect(() => {
        if (value > 0) {
            document.title = `counter with 2nd arg : ${value}`
        }
    }, [])
    useEffect(() => {
        if (value > 0) {
            document.title = `counter : ${value}`
        }
    })

    //useEffect Clean-up
    const [size, setSize] = useState(window.innerWidth)
    const chekSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        // console.log('useEffect')
        window.addEventListener('resize', chekSize)
        return () => {
            // console.log('cleanUp')
            window.removeEventListener('resize', chekSize);
        }
    })
    // console.log('render')

    //useEffect in fetchData
    const url = 'https://api.github.com/users'
    const [users, setUsers] = useState([]);

    // const [loading, setLoading] = useState(true);
    // const getUsers = async () => {
    //     try {
    //         const response = await fetch(url);
    //         console.log(response.status)
    //         const users = await response.json();
    //         setUsers(users)
    //         setTimeout(() => {
    //             setLoading(false)
    //         }, 3000);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    //-----------using custom Hook---------------

    const { loading, data } = useFetch(url)
    const getUsers = () => {
        setUsers(data)
    }
    //normal effect
    // useEffect(() => {  
    //     getUsers();
    //     document.title = "useEffect"
    // },[])

    //--for Custom Hook
    useEffect(() => {
        getUsers();
    })




    //multiple rendering
    return (
        <div className='container bg-white '>
            <Helmet>
                <title>React Course | UseEffect</title>
            </Helmet>
            <Link to='/course' className='btn btn-outline-dark mt-3'>{`<-- back`}</Link>
            <h1 className='text-danger fs-2'>./useEffect();</h1>
            <h1 className='text-start'>Basics: Exmaple 1 </h1>
            <h2> counter : {value}</h2>
            <button className='btn btn-primary' onClick={() => setValue(value + 1)}>click</button>
            <hr />

            <h2 className='text-start'>Clean-up : checkout event listiners 'f12'</h2>
            <h3>window width : {size} px</h3>
            <hr />

            <h1 className="text-start">Fetch Data</h1>
            <div className="row gap-4 justify-content-center mt-4 px-sm-4">
                {loading ? <h1>Loading . . . </h1> : users.map((user) => {
                    const { login, id, node_id, avatar_url, html_url } = user
                    return (
                        <div className="col p-3 rounder-3 bg-light " key={node_id}>
                            <div className="d-flex w-100 flex-column flex-md-row ">
                                <div className="c_img"><img src={avatar_url} className='c_img1 rounded-5' alt="" /></div>
                                <div className="c_text text-start">
                                    <h3>{login}</h3>
                                    <a href={html_url} className="link-dark ">Profile</a>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default UseEffectBasics;