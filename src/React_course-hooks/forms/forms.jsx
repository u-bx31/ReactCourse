import React, { useState, useEffect } from 'react';

const Persone = {
    userName: '',
    email: '',
    age: ''
}

const FormsController = () => {



    const [people, setPeople] = useState([]);
    const [persone, setPersone] = useState(Persone)

    const handleChnage = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPersone({ ...persone, [name]: value })
        console.log(persone)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { userName, email, age } = persone;
        if (userName && email && age) {
            setPeople([...people, { ...persone }])
            setPersone({ userName: '', email: '', age: '' })
        }
        else {
            console.log('Error .. .. ..')
        }
    }

    useEffect(()=>{
        document.title = "Forms"
        
    },[])

    const { userName, email, age } = persone;
    return (

        <div className="w-75 w-100  m-0 m-md-auto bg-light p-2 p-sm-5 rounded-2">
            <form>
                <div className="mb-3 d-flex flex-sm-row flex-column align-items-center">
                    <label htmlFor="email" className="text-start w-50  ">Email : </label>
                    <input type="email" className="form-control " id="email" name='email' value={email} aria-describedby="emailHelp" onChange={handleChnage} />
                </div>
                <div className="mb-3 d-flex flex-sm-row flex-column align-items-center">
                    <label htmlFor="userName" className="text-start w-50 ">UserName : </label>
                    <input type="text" className="form-control" name='userName' value={userName} id="userName" onChange={handleChnage} />
                </div>
                <div className="mb-3 d-flex flex-sm-row flex-column align-items-center">
                    <label htmlFor="age" className="text-start w-50 ">Age : </label>
                    <input type="text" className="form-control" id="age" name='age' value={age} onChange={handleChnage} />
                </div>
                <button type="submit" className="btn btn-primary w-75" onClick={handleSubmit}>Submit</button>
            </form>

            <div className="mt-5">
                {people.map((persone) => {
                    const { userName, email, age } = persone;

                    return (
                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold text-start">{userName}</div>
                                    {email}
                                </div>
                                <span className="badge bg-primary rounded-pill">{age}</span>
                            </li>
                        </ol>
                    )
                })}

            </div>
        </div>
    )
}

export default FormsController;