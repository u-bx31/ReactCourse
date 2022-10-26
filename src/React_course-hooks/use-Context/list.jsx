import React, { useState , useContext } from 'react';
import SinglePersone from './singlePerson';
import {PersonContext} from './useContext'

const ListPerson = () => {
    
    const data = useContext(PersonContext)
    return ( 
        <>
            {data.people.map((c)=>{
                return(
                    <SinglePersone name={c.name} id={c.id} />
                ) 
            })}
        </>
    );
}
 
export default ListPerson;
