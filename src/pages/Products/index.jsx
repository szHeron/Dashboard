import React from 'react';
import { SpeedDial, SpeedDialIcon, TextField } from '@mui/material';
import './style.scss'

export default function Products() {
  return (
    <div className="container">
      <div className="wrapper"/>
      <input type="text" className="searchbar" placeholder="Pesquise um produto..."/>
      <SpeedDial
        ariaLabel="Adicionar um novo produto"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      />
      <div className="product-list">
        
      </div>
    </div>
  )
}
//<input type="text" className="searchbar" placeholder="Pesquise um produto..."/>