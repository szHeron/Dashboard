import React from 'react'
import { AiOutlineDashboard, AiOutlineUser, AiOutlineDollar, AiOutlineShoppingCart } from "react-icons/ai";
import './style.scss'

export default function NavBar() {
  const links = [
    {
      text: "Dashboard",
      icon: AiOutlineDashboard,
      active: !window.location.href[window.location.href.lastIndexOf("/")+1]?true:false,
      ref: "/"
    },
    {
      text: "Usuarios",
      icon: AiOutlineUser,
      active: window.location.href.includes("/users") === true?true:false,
      ref: "/users"
    },
    {
      text: "Transações",
      icon: AiOutlineDollar,
      active: window.location.href.includes("/transactions") === true?true:false,
      ref: "/transactions"
    },
    {
      text: "Produtos",
      icon: AiOutlineShoppingCart,
      active: window.location.href.includes("/products") === true?true:false,
      ref: "/products"
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
