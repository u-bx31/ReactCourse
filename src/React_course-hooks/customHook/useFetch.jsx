import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';



export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getData = useCallback(async () => {

        // try {
        //     const Response = await fetch(url);
        //     const data = await Response.json();
        //     setData(data);
        //     setTimeout(() => {
        //         setLoading(false);
        //     }, 3000);

        // } catch (error) {
        // }

        try {
            const response = await axios.get(url);
            setData(response.data)
            setTimeout(() => {
                setLoading(false);
            }, 3000);

        } catch (error) {
            console.error(error);
        }
    },[url])

    useEffect(() => {
        getData();
    }, [url])

    return { loading, data };
}