import React, { useState, useEffect } from 'react';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';



function AutohideExample({toastMessage,closeToast}) {

    useEffect(()=>{
        setTimeout(() => {
            closeToast()
        }, 3000);
    })


    return (
        <ToastContainer className="p-3" position='top-center'>
          <Toast>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
    );
}

export default AutohideExample;