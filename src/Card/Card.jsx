import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div>
            <div className='card'>
                <h1 className='cardTitle'>{props.title}</h1>
                <p className='para'>{props.para}</p>
            </div>
        </div>
    );
}

export default Card;