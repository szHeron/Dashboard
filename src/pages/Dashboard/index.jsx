import React from 'react';
import Milestones from '../../components/Milestones';
import Revenue from '../../components/Revenue';
import Visits from '../../components/Visits';
import MetricCard from '../../components/MetricCard';
import { AiOutlineDollar } from "react-icons/ai";
import './style.scss'

export default function Dashboard() {
  return (
    <div className="dashboard">
        <div className="metrics">
          <MetricCard Icon={AiOutlineDollar} Name="Vendas" Value={'200 itens'} Color='#00ff00'/>
          <MetricCard Icon={AiOutlineDollar} Name="Receita" Value={'R$ 59000'} Color='#00ff00'/>
          <MetricCard Icon={AiOutlineDollar} Name="Despesa" Value={'R$ 23000'} Color='#00ff00'/>
          <MetricCard Icon={AiOutlineDollar} Name="Total" Value={'R$ 36000'} Color='#00ff00'/>
        </div>
    </div>
  )
}
