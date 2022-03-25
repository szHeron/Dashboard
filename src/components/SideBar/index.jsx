import React, { useState } from 'react'
import { AiOutlineDashboard, AiOutlineUser, AiOutlineDollar, AiOutlineShoppingCart } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import './style.scss'

export default function NavBar() {
  const links = [
    {
      text: "Dashboard",
      icon: AiOutlineDashboard,
      active: window.location.href.includes("/dashboard") === true?true:false,
      ref: "/dashboard"
    },
    {
      text: "Pedidos",
      icon: BsListCheck,
      active: window.location.href.includes("/pedidos") === true?true:false,
      ref: "/pedidos"
    },
    {
      text: "Usuarios",
      icon: AiOutlineUser,
      active: window.location.href.includes("/usuarios") === true?true:false,
      ref: "/usuarios"
    },
    {
      text: "Transações",
      icon: AiOutlineDollar,
      active: window.location.href.includes("/transacoes") === true?true:false,
      ref: "/transacoes"
    },
    {
      text: "Produtos",
      icon: AiOutlineShoppingCart,
      active: window.location.href.includes("/produtos") === true?true:false,
      ref: "/produtos"
    },
  ]

  return (
    <div className='sidebar'>
      <div className='brand'>
        ShopDash
      </div>
      <ul className={'linkBars'}>
        {links.map((link)=>{
          return(
            <li key={link.text} className={link.active?'Active':''}>
              <a href={link.ref}>
                <link.icon/>
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
