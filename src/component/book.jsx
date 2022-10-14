import React from 'react';
import Modal from './model'


const Book = (props) => {

    

    const { image, title, author,discription} = props.books
    return (
        <div className="col p-0">

            <div className="card">
                <img src={image} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <div className="card__header-text">
                            <h3 className="card__title">{title}</h3>
                            <span className="card__status">{author}</span>

                        </div>
                    </div>
                    <Modal book={props.books}/>
                </div>
            </div>
        </div>
    );
}
export default Book;