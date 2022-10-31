import React ,{useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../React-Projects/BirthReminder/data';



const Persone = () => {

    const {id} = useParams();

    const[person,setPersone] = useState({});

    useEffect(()=>{
        const user = data.find((user)=>{return user.id === parseInt(id)})
        setPersone(user)
    },[])

    const {name,image,age} = person;
    return (
        <>
            <div className="card shadow-sm w-75 mx-auto">
                <img src={image} alt={name} className="bd-placeholder-img card-img-top" ></img>

                <div className="card-body">
                    <p className="card-text">{name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to={`/People`} className="btn btn-sm btn-outline-secondary">Back To People</Link>
                        </div>
                        <small className="text-muted">{age} Years Old</small>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Persone;