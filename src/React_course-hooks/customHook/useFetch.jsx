import React, { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const Response = await fetch(url);
            const data = await Response.json();
            setData(data);
            setTimeout(() => {
                setLoading(false);
            }, 3000);
            
        } catch (error) {
        }
    }

    useEffect(() => {
        getData();
    }, [url])

    return { loading , data };
}