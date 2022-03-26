import React from 'react';
import { SpeedDial, SpeedDialIcon } from '@mui/material';
import Table from '../../components/CustomTable';
import './style.scss'

export default function Requests() {
  const data = [
    {
      id: 0,
      name: 'Arroz',
      client: 'Andre',
      amount: 3,
      value: 100
    },
    {
      id: 1,
      name: 'Arroz',
      client: 'Andre',
      amount: 3,
      value: 100
    },
    {
      id: 2,
      name: 'Arroz',
      client: 'Andre',
      amount: 3,
      value: 100
    },
    {
      id: 3,
      name: 'Arroz',
      client: 'Andre',
      amount: 3,
      value: 100
    },
    {
      id: 4,
      name: 'Arroz',
      client: 'Andre',
      amount: 3,
      value: 100
    },
    {
      id: 5,
      name: 'Arroz',
      client: 'Andre',
      amount: 3,
      value: 100
    },
  ]
  return (
    <div className="container">
      <div className="wrapper"/>
      <Table data={data} rows={['ID','Produto','Cliente','Quantidade','Valor']}/>
      <SpeedDial
        ariaLabel="Adicionar um novo produto"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      />
    </div>
  )
}
