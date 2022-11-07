import React, { createContext, useContext } from "react";
import NavBar from './NavBar';
import Items from './Items'

import { useFetch } from '../../React_course-hooks/customHook/useFetch'

export const appContext = createContext();
const url = "https://course-api.com/react-useReducer-cart-project";

const Index = () => {
    const { data } = useFetch(url);

    return (<rect>
        <appContext.Provider value={{data}}>
            <nav>
                <NavBar />
            </nav>
            <main>
                <Items />
            </main>
        </appContext.Provider>

    </rect>);
}

export default Index;