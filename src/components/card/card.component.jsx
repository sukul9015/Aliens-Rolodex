import React from 'react';

import './card.styles.css';

export const Card = (props) => {

    return (
        <div className='card-container'>
            <img alt = "Alien" src={`https://robohash.org/${props.alien.id}?set=set2`}/>
            <h2 >{props.alien.name}</h2>
            <p> { props.alien.email }</p>
        </div>
    );

};