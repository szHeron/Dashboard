import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Avatar, Button } from '@mui/material';
import './style.scss';

export default function HeaderBar() {
  return (
    <div className="headerbar">
        <div className="headerbarWrapper">
          <div className="outskirts">
            <Avatar alt="Heron Rodrigues" src="https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"/>
            Olá, Heron Rodrigues
          </div>
          <Button sx={{color:'#fff'}} variant="text">Sair <AiOutlineArrowRight style={{marginLeft: 5}}/></Button>
        </div>
    </div>
  )
}
