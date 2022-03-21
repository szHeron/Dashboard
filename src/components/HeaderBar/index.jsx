import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import './style.scss';

export default function HeaderBar() {
  return (
    <div className="headerbar">
        <div className="headerbarWrapper">
          <div className="outskirts">
            <img src="https://scontent.ffor20-1.fna.fbcdn.net/v/t1.6435-9/51679986_622753211487854_74831906687942656_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEUY_gPhp_u3pKF0eYWpBfyZKmlIHRrd_BkqaUgdGt38P1h9nHTUukTv1RX0Xt8H3Udgl6rdW4US3iRj81KKuPk&_nc_ohc=XncxRWsOjJIAX9xaH64&_nc_ht=scontent.ffor20-1.fna&oh=00_AT8xmUiVr9JZFV4ica4EV3yOEuVSTeHp5zt9kf3hQF9oVg&oe=625D41E5"/>
            Olá, Heron Rodrigues
          </div>
          <button className="outskirts">
            Sair <AiOutlineArrowRight style={{marginLeft: 5}}/>
          </button>
        </div>
    </div>
  )
}
