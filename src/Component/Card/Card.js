import React from 'react'
import "./card.css";

function Card(props) {
    return (
        <div className='master-card'>
            <div className='cards'>
                <p>{props.name} ({props.age} years old)</p>
            </div>
        </div>
    )
}

export default Card
