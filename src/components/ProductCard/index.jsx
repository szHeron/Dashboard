import React from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
import './style.scss';

export default function ProductCard(product) {
  return (
    <div className='conteiner'>
        <img src="https://d1r6yjixh9u0er.cloudfront.net/Custom/Content/Products/26/97/2697_smartphone-xiaomi-mi-11-5g-tela-681-8gb256gb-c00318_m9_637551146435378534.png"/>
        <div className='info'>
          <p>{product.Name}</p>
          <p>{product.value}</p>
          <p>{product.id}</p>
          <p>{product.amount}</p>
        </div>
    </div>
  )
}
