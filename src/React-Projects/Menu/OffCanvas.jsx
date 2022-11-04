import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BsFilterRight } from "react-icons/bs";
import Offcanvas from 'react-bootstrap/Offcanvas';


function OffCanvasExample({ name, data, filterItem, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <nav className='nav-menu '>
            <Button variant="primary" onClick={handleShow} className="bg-transparent border-0 fs-1 ">
                <BsFilterRight />
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} className="menu">
                <Offcanvas.Header closeButton>

                </Offcanvas.Header>
                <Offcanvas.Body >
                    <div className="row row-cols-1 text-center ">
                        {data.map((c) => {
                            return (
                                <div className='col my-2'>
                                    <button className='btn border-0 bg-transparent fs-3' onClick={() => { return(filterItem(c)) }}>{c}</button>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </nav>
    );
}
export default OffCanvasExample;