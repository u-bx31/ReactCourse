import React, { useState, useReducer, useEffect } from 'react';
import Toast from './toast';

const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {

        return {
            ...state, users: [...state.users, action.payload],
            showToast: true,
            toastMessage: "Item Added"
        }
    }
    else if (action.type === "ERROR") {

        return {
            ...state, showToast: true,
            toastMessage: "Add user !!"
        }
    }
    else if (action.type === "CLOSE_TOAST") {
        return {
            ...state, showToast: false
        }
    }
    else if (action.type === "REMOVE_ITEM") {

        const newUsers = state.users.filter((c)=> c.newUser.id !== action.payload.id );
        
        return {
            ...state, users: newUsers
            ,showToast: true,
            toastMessage: "User Deleted"
        }
        
    }

}

const DefaultState = {
    users: [],
    showToast: false,
    toastMessage: ''
}


const UseReducerBasics = () => {
    const [user, SetUser] = useState('');

    const [state, dispatch] = useReducer(reducer, DefaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (user) {
            const newUser = {id:new Date().getTime().toString(),user}
            dispatch({ type: "ADD_ITEM", payload: { newUser } })
            SetUser('')
        }
        else {
            dispatch({ type: "ERROR" })
        }
    }

    const closeToast = () => {
        dispatch({ type: "CLOSE_TOAST" })
    }
    const handleDelete = (id)=>{
        dispatch({type : "REMOVE_ITEM" , payload : {id}})
    }

    useEffect(() => {
        document.title = "useReducer"

    }, [])

    return (
        <div className='w-75 m-0 m-md-auto bg-light p-2 p-sm-5 rounded-2'>
            {state.showToast && <Toast toastMessage={state.toastMessage} closeToast={closeToast} />}
            <h1>List Of Users</h1>
            <hr />
            <div className="mb-3 d-flex flex-sm-row flex-column align-items-center">
                <label htmlFor="user" className="text-start w-50 fw-bold">User : </label>
                <input type="text" className="form-control" id="user" name='user' value={user} onChange={(e) => SetUser(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-50" onClick={handleSubmit}>Add User</button>
            <ul className="list-group mt-3">
                {state.users.map((e) => {
                    return (
                    <li className="list-group-item" key={e.newUser.id}>
                        <div className="row align-items-center">
                            <div className="col fs-4">
                                {e.newUser.user}
                            </div>
                            <div className="col">
                                <button className='btn btn-danger' onClick={()=>handleDelete(e.newUser.id)} >Delete</button>
                            </div>
                        </div>

                    </li>)
                })}


            </ul>
        </div>
    );
}

export default UseReducerBasics;