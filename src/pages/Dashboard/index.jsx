import React from 'react';
import { AiOutlineDollar, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import Revenue from '../../components/Revenue';
import Sales from '../../components/Sales';
import MetricCard from '../../components/MetricCard';
import './style.scss'

export default function Dashboard() {
  const data = [200, 59000.99, 23000.99, 36000.99];
  return (
    <div className="container">
      <div className="wrapper"/>
      <div className="metrics">
        <MetricCard Icon={AiOutlineDollar} Name="Vendas" Value={`${data[0]} itens`} Color='#39da4b'/>
        <MetricCard Icon={MdAttachMoney} Name="Total" Value={data[3].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} Color='#0e4fc2'/>
        <MetricCard Icon={AiOutlineArrowUp} Name="Receita" Value={data[1].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} Color='#54007d'/>
        <MetricCard Icon={AiOutlineArrowDown} Name="Despesa" Value={data[2].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} Color='#e72423'/>
      </div>
      <div className="charts">
        <Revenue/>
        <Sales/>
      </div>
    </div>
  )
}
