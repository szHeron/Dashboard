import React from 'react';
import Milestones from '../../components/Milestones';
import Revenue from '../../components/Revenue';
import Sales from '../../components/Sales';
import MetricCard from '../../components/MetricCard';
import { AiOutlineDollar } from "react-icons/ai";
import './style.scss'

export default function Dashboard() {
  const data = [200, 59000.99, 23000.99, 36000.99];
  return (
    <div className="dashboard">
      <div className='wrapper'/>
      <div className="metrics">
        <MetricCard Icon={AiOutlineDollar} Name="Vendas" Value={`${data[0]} itens`} Color='#008000'/>
        <MetricCard Icon={AiOutlineDollar} Name="Receita" Value={data[1].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} Color='#008000'/>
        <MetricCard Icon={AiOutlineDollar} Name="Despesa" Value={data[2].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} Color='#008000'/>
        <MetricCard Icon={AiOutlineDollar} Name="Total" Value={data[3].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} Color='#008000'/>
      </div>
      <div className="charts">
        <Revenue/>
        <Sales/>
      </div>
    </div>
  )
}
