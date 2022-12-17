import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Data from '../../React-Projects/BirthReminder/data';
import List from './list'

export const PersonContext = React.createContext();
const ContextApi = () => {

    const remove = (id) => {
        setPeople((people) => { return (people.filter((c) => (c.id !== id))) })
    }

    const [people, setPeople] = useState(Data)

    return (
        <PersonContext.Provider value={{ people, remove }}>
            <Helmet>
                <title>React Course | UseContext</title>
            </Helmet>
            <div className="bg-white p-4 rounded-2">
                <Link to='/course' className='btn btn-outline-dark  my-3'>{`<-- back`}</Link>
                <h2>UseContext /ContextApi</h2>
                <List />
            </div>
        </PersonContext.Provider>
    );
}

export default ContextApi;