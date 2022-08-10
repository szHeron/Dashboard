import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import './style.scss';

function listOfObjectsWithDate(DataArray, DateArray){
  let DataObj = {};
  let list = [];

  for (let index = 0; index < DataArray.length; index++) {
    if(!DataObj.Data || DataObj.Data !== DateArray[index].substring(0,5)){
      DataObj = {Valor: DataArray[index], Data: DateArray[index].substring(0,5)};
      list.push(DataObj);
    }else{
      DataObj.Valor += DataArray[index];
    }
  }
  return list;
}

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

export default function Revenue({data, date}) {
  const formatedDate = listOfObjectsWithDate(data,date);
  const width = window.innerWidth*0.5;
  const height = window.innerHeight*0.55;

  return (
    <div className='graphConteiner'>
      <LineChart
        width={width}
        height={height}
        data={formatedDate}
        margin={{ top: 5, right: 25}}
      >
        <XAxis dataKey="Data"/>
        <YAxis/>
        <Tooltip content={<CustomTooltip/>}/>
        <Legend/>
        <Line type="monotone" dataKey="Valor" stroke="#039be5" yAxisId={0}/>
      </LineChart>
    </div>
  )
}
