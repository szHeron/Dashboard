import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDashboard, AiOutlineUser, AiOutlineDollar } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import './style.css'

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
      icon: AiOutlineDashboard,
      active: false
    },
  ]
  return (
    <div className='navbar'>
      {links.map((link)=>{
        return(
          <ul className={'linkBars',link.active&&'actived'}>
            <a href="#">
              <link.icon/>
              {link.text}
            </a>
          </ul>
        )
      })}
    </div>
  )
}
