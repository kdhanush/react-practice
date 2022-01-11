import React from 'react'
import "./Modal.css";

function Modal({modalHandler,inputerror,ageError}) {
    return (
        <div>
            <div className='background-color'>
                <div className='Main'>
                    <div className='title'>
                        <p>Invalid Input</p>
                    </div>
                    <div className='footer'>
                        <p>{inputerror}{ageError}</p>
                    </div>
                    <div>
                        <button onClick={modalHandler}>Okay</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal
