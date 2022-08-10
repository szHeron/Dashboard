import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './style.scss';

function listOfObjectsWithDate(DataArray, DateArray){
  let DataObj = {};
  let list = [];

  for (let index = 0; index < DataArray.length; index++) {
    if(!DataObj.Data || DataObj.Data !== DateArray[index].substring(0,5)){
      DataObj = {Vendas: DataArray[index], Data: DateArray[index].substring(0,5)};
      list.push(DataObj);
    }else{
      DataObj.Vendas += DataArray[index];
    }
  }
  return list;
}

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

export default function Sales({data, date}) {
  const formatedDate = listOfObjectsWithDate(data,date);
  const width = window.innerWidth*0.3;
  const height = window.innerHeight*0.55;

  return (
    <div className='sales-conteiner'>
      <BarChart 
        width={width}
        height={height}
        data={formatedDate}
        margin={{ top: 5, right: 20 }}
      >
        <XAxis dataKey="Data"/>
        <YAxis/>
        <Tooltip content={<CustomTooltip/>}/>
        <Legend/>
        <Bar type="monotone" maxBarSize={8} dataKey="Vendas" fill="#8E2DE2" yAxisId={0}/>
      </BarChart>
    </div>
  )
}
