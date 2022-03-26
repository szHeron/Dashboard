import React from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
import { AreaChart, Area } from 'recharts';
import './style.scss'

export default function MetricCard(Card) {
  const data = [{name: 'Jan', Receita: 2000.08},{name: 'Fev', Receita: 2200.99},{name: 'Mar', Receita: 2210.75},
    {name: 'Abr', Receita: 3000.85},{name: 'Mai', Receita: 3100.45},{name: 'Jun', Receita: 3500.15},
    {name: 'Jul', Receita: 3000.85},{name: 'Ago', Receita: 1900.99},{name: 'Set', Receita: 2500.55},
    {name: 'Out', Receita: 3100.55},{name: 'Nov', Receita: 2800.85},{name: 'Dez', Receita: 4250.85},]
  return (
    <div className="conteiner">
        <div style={{display: 'flex', justifyItems: 'center', backgroundColor: Card.Color, padding: 5, borderRadius: '50%'}}>
          <Card.Icon style={{width: 48, height: 48, color: "#fff"}}/>
        </div>
        <div className="info">
          <p>{Card.Name}</p>
          <div>
            <AiOutlineArrowUp style={{color: "#00ff00", marginRight: 5}}/>
            {Card.Value}
          </div>
          <div className="graph-container">
            <AreaChart
              width={140}
              height={50}
              data={data}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#039be5" stopOpacity={0.8}/>
                  <stop offset="95" stopColor="#039be5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="Receita" stroke="#039be5" fillOpacity={1} fill="url(#colorUv)"/>
            </AreaChart>
        </div>
        </div>
    </div>
  )
}
