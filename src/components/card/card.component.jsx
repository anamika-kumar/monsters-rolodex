import React from 'react';
import './card.styles.css';

export const Card = props => (
    //card-container is the css name in card.stles.css file
    /* the sign in src is not ' ir's tilde sign */
    <div className='card-container'> 
    <img 
        alt='monster' 
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} 
    />
    
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email}</p>
        
    </div>
);