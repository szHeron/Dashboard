import React from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
import './style.scss';

export default function MetricCard(Card) {
  return (
    <div className='conteiner'>
        <Card.Icon style={{width: 54, height: 54, color: Card.Color}}/>
        <div className='info'>
          <p>{Card.Name}</p>
          <div>
            <AiOutlineArrowUp style={{color: '#00ff00', marginRight: 5}}/>
            {Card.Value}
          </div>
        </div>
    </div>
  )
}
