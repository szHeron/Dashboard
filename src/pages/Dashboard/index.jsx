import React, { useEffect, useState} from 'react';
import { AiOutlineDollar, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import API from '../../service/API';
import Revenue from '../../components/Revenue';
import Sales from '../../components/Sales';
import MetricCard from '../../components/MetricCard';
import './style.scss'

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    API.get('/transactions')
    .then(function (response) {
      const transactions = response.data;
      let revenue = [];
      let expense = [];
      let sales = [];
      let total = 0;

      for (let index = 0; index < transactions.length; index++) {
        const item = transactions[index];
        const value = Number(item.valor.match(/[\d.,]+/)[0].replace(',',''));
        if(item.tipo){
          revenue.push(value);
          total += value;
        }else{
          expense.push(value);
          total -= value;
        }
          
        sales.push(Number(item.produtos.split(',').length));
      }
      setData([revenue, expense, total, sales]);
      
      setTimeout(function(){
        setLoading(false);
      },2000);
    })
    .catch(e=>{
      console.log(e)
    });
  },[]);
 
  return (
    <div className="container">
      <div className="wrapper"/>
      {loading?
        <p>Carregando</p>
        :
        <>
          <div className="metrics">
            <MetricCard Icon={AiOutlineArrowUp} Name="Receita" Value={data[0]} Color='#39da4b'/>
            <MetricCard Icon={AiOutlineArrowDown} Name="Despesa" Value={data[1]} Color='#e72423'/>
            <MetricCard Icon={AiOutlineDollar} Name="Vendas" Value={data[3]} Color='#54007d'/>
            <MetricCard Icon={MdAttachMoney} Name="Total" Value={data[2]} Color='#0e4fc2'/>
          </div>
          <div className="charts">
            <Revenue/>
            <Sales/>
          </div>
        </>
      }
    </div>
  )
}