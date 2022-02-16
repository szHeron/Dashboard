import React from 'react'
import { AiOutlineDashboard, AiOutlineUser, AiOutlineDollar, AiOutlineShoppingCart } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import './style.scss'

export default function NavBar() {
  const links = [
    {
      text: "Dashboard",
      icon: AiOutlineDashboard,
      active: true
    },
    {
      text: "Pedidos",
      icon: BsListCheck,
      active: false
    },
    {
      text: "Usuarios",
      icon: AiOutlineUser,
      active: false
    },
    {
      text: "Transações",
      icon: AiOutlineDollar,
      active: false
    },
    {
      text: "Produtos",
      icon: AiOutlineShoppingCart,
      active: false
    },
  ]
  return (
    <div className='navbar'>
      <ul className={'linkBars'}>
        {links.map((link)=>{
          return(
            <li className={link.active?'Active':''}>
              <a href="#">
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
