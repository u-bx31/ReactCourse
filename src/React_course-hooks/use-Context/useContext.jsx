import React, { useState, useContext } from 'react';
import Data from '../../React-Projects/BirthReminder/data';
import List from './list'

    export const PersonContext = React.createContext();
const ContextApi = () => {
    
    const remove = (id)=>{
        setPeople((people)=>{return(people.filter((c)=>(c.id!== id)))})
    }

    const [people, setPeople] = useState(Data)

    return (
        <PersonContext.Provider value={{people , remove}}>
            <div className="bg-white p-4 rounded-2">
                <h2>UseContext /ContextApi</h2>
                <List  />
            </div>
        </PersonContext.Provider>
    );
}

export default ContextApi;