import React from 'react';
import "./button.css";

function Button({onSubmit}) {

    function submitHandler(){

    }

    return (
        <div>
            <button onClick={onSubmit} className='addbtn'>Add +</button>
        </div>
    )
}

export default Button
