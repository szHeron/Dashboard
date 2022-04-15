import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AreaChart, Area } from "recharts";
import "./style.scss"

function listOfObjects(DataArray){
  let DataObj = {};
  let list = [];
  for (let index = 0; index < DataArray.length; index++) {
    DataObj = {Value: DataArray[index]}
    list.push(DataObj)
  }
  return list;
}

export default function MetricCard(Card) {
  let data = null;
  if(Array.isArray(Card.Value))
    data = listOfObjects(Card.Value);

  console.log(data)
  const total = Array.isArray(Card.Value)?Card.Value.reduce(function(acumulator, i) {
    return acumulator + i;
  }):Card.Value;
  
  return (
    <div className="conteiner">
        <div style={{display: 'flex', justifyItems: 'center', backgroundColor: Card.Color, padding: 5, borderRadius: '50%'}}>
          {Card.Name === "Total"?(
            <Card.Icon style={{width: 48, height: 48, color: "#fff", marginLeft: 3}}/>
          ):(
            <Card.Icon style={{width: 48, height: 48, color: "#fff"}}/>
          )}
        </div>
        <div className="info">
          <p>{Card.Name}</p>
          <div>
            <AiOutlineArrowUp style={{color: "#00ff00", marginRight: 5}}/>
            {Card.Name==="Vendas"?`${total} itens`:total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
          </div>
          {(Card.Name !== "Total" || Card.Name !== "Vendas")&&
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
                <Area type="monotone" dataKey="Value" stroke="#039be5" fillOpacity={1} fill="url(#colorUv)"/>
              </AreaChart>
            </div>
          }
        </div>
    </div>
  )
}