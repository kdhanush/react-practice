import React from 'react'

function Card(props) {
    return (
        <div className='master-card'>
            <div className='cards'>
            <p>{props.name}</p>
            <p>{props.age}</p>
            </div>
        </div>
    )
}

export default Card
