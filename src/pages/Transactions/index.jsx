import React from 'react';
import Table from '../../components/CustomTable';
import './style.scss'

export default function Transactions() {
  const data = [
    {
      id: 0,
      name: 'Arroz',
      client: 'Andre',
      amount: 3,
      value: 100,
      date: new Date()
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
      <Table data={data} rows={['ID', 'Tipo', 'Remetente', 'Destinatario', 'Valor', 'Data']}/>
    </div>
  )
}
