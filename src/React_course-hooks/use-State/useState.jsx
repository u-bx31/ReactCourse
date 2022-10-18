import React, { useState } from 'react';

// Array
const data = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'James' },
    { id: 3, name: 'C.Price' },
    { id: 4, name: 'Ghost' },
]

// object

const Persone = {
    name: 'peter',
    age: '21',
    message: 'random message'
}

const UseStateBasics = () => {
    //simple useState()
    const [title, setTitle] = useState('Random Title')
    //Array on useState()
    const [people, setPeople] = useState([...data])
    //ogj on useState()
    const [persone, setPersone] = useState(Persone)


    // Handleclick to Chnage Title
    const handleClick = () => {
        setTitle(title === 'Random Title' ? 'Hello World' : 'Random Title');
    }

    // Remove an Item From data list 'Array; 
    const RemoveItem = (id) => {
        const newData = people.filter((c) => c.id !== id);

        setPeople(newData)
    }

    //Chage messge of ogject ``persone

    const ChangeMessage = () => {
        let message = document.getElementById("messageText");


        setPersone({ ...persone, message: message.value === "" ? "Hello World" : message.value })

    }



    // Get all the data from list Data and show them on grid
    const lsP = people.map((c) => {
        return (<div className='col bg-white gap rounded-2 w-75 p-2' key={c.id}>
            <div className="row p-2">
                <div className="col"><h4>{c.name}</h4></div>
                <div className="col"><button className="btn btn-outline-danger" onClick={() => RemoveItem(c.id)}>Remove</button></div>
            </div>
        </div>)
    })


    return (
        <div>
            <h1 className='text-danger'> ../useState</h1>
            <h1 className='text-start'>/ change Title</h1>
            <h2 className='m-3'>{title}</h2>
            <button className='btn btn-primary m-sm-3' onClick={handleClick}>Change Title</button>

            <hr />
            <h1 className='text-start'>/ array 'show && remove'</h1>
            <div className='row row-cols-2 gap-3 justify-content-center w-100 '>
                {lsP}
            </div>
            <hr />
            <h1 className='text-start'>/ object modification</h1>
            <h2>Name : {persone.name} , age: {persone.age}</h2>
            <p className='fs-4'><q>{persone.message}</q></p>
            <div className="row w-100 align-items-center justify-content-center">
                <div className="col-sm-4">
                    <div class="mb-3">
                        <p for="messageText" class="form-label text-start">Message :</p>
                        <textarea class="form-control" id="messageText" rows="3"></textarea>
                    </div>
                </div>
                <div className="col-sm-2 ">
                    <button className='btn btn-primary m-sm-3 ' onClick={ChangeMessage}>Change Message</button>
                </div>
            </div>
            <hr/>

        </div>
    );
}

export default UseStateBasics;