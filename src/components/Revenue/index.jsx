import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import './style.scss';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{label}</p>
          <p className="desc">{`Receita: ${payload[0].value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</p>
        </div>
      );
    }
  
    return null;
};

export default function Revenue(data) {
    data = [{name: 'Jan', Receita: 2000.08},{name: 'Fev', Receita: 2200.99},{name: 'Mar', Receita: 2210.75},
    {name: 'Abr', Receita: 3000.85},{name: 'Mai', Receita: 3100.45},{name: 'Jun', Receita: 3500.15},
    {name: 'Jul', Receita: 3000.85},{name: 'Ago', Receita: 1900.99},{name: 'Set', Receita: 2500.55},
    {name: 'Out', Receita: 3100.55},{name: 'Nov', Receita: 2800.85},{name: 'Dez', Receita: 4250.85},]
    return (
        <div className='graphConteiner'>
            <LineChart
                width={770}
                height={330}
                data={data}
                margin={{ top: 5, right: 25}}
            >
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend/>
                <Line type="monotone" dataKey="Receita" stroke="#039be5" yAxisId={0}/>
            </LineChart>
        </div>
    )
}
