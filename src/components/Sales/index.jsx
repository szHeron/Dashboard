import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './style.scss';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{label}</p>
          <p className="desc">{`Vendas: ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
};

export default function Sales(data) {
    data = [{name: 'Jan', Vendas: 7},{name: 'Fev', Vendas: 12},{name: 'Mar', Vendas: 13},
    {name: 'Abr', Vendas: 18}, {name: 'Mai', Vendas: 19}, {name: 'Jun', Vendas: 22}, {name: 'Jul', Vendas: 19},
    {name: 'Ago', Vendas: 15}, {name: 'Set', Vendas: 19}, {name: 'Out', Vendas: 23}, {name: 'Nov', Vendas: 21},
    {name: 'Dez', Vendas: 27}]
    return (
        <div className='sales-conteiner'>
            <BarChart 
                width={330}
                height={330}
                data={data}
                margin={{ top: 5, right: 20 }}
            >
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend/>
                <Bar type="monotone" maxBarSize={8} dataKey="Vendas" fill="#8E2DE2" yAxisId={0}/>
            </BarChart>
        </div>
    )
}
