import React, { createContext, useEffect, useReducer } from "react";
import NavBar from './NavBar';
import Items from './Items'
import Reducer from "./reducer";

import { useFetch } from '../../React_course-hooks/customHook/useFetch'
import { Helmet } from "react-helmet";

export const appContext = createContext();
const url = "https://course-api.com/react-useReducer-cart-project";

const Index = () => {
    const { data, loading } = useFetch(url);

    const DefaultState = {
        items: [],
        amount: 0,
        total: 0
    }
    const [state, dispatch] = useReducer(Reducer, DefaultState)

    const RemoveItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: { id } })
    }
    const incrementItem = (id) => {
        dispatch({ type: "INCREMENT_ITEM", payload: { id } })
    }
    const decrementItem = (id) => {
        dispatch({ type: "DECREMENT_ITEM", payload: { id } })
    }
    const RemoveAll = () => {
        dispatch({ type: "REMOVE_ALL" })
    }

    useEffect(() => {
        state.items = data
        dispatch({ type: "GET_TOTAL" })
    }, [data])


    if (loading) {
        return (
            <div className='container c-p4-con min-vh-100 text-center py-5 px-0' >
                <Helmet>
                    <title>React Projects | Cart </title>
                </Helmet>
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-2 col mx-sm-auto ">
                        <div className='p-2'>
                            <div className="spinner-border m-5 text-center" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <h1>Loading</h1>
                        </div>
                    </div>
                </div>
            </div >
        )

    }
    else {
        return (
            <React.Fragment>
                <Helmet>
                    <title>React Projects | Cart </title>
                </Helmet>
                <appContext.Provider value={{ state, RemoveAll, RemoveItem, incrementItem, decrementItem }}>
                    <nav>
                        <NavBar />
                    </nav>
                    <main>
                        <Items />
                    </main>
                </appContext.Provider>

            </React.Fragment>
        );
    }


}

export default Index;