import React, { useEffect, useState } from 'react';
import { AiOutlineDollar, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { Skeleton } from '@mui/material';
import API from '../../service/API';
import Revenue from '../../components/Revenue';
import Sales from '../../components/Sales';
import MetricCard from '../../components/MetricCard';
import Wrapper from '../../components/Wrapper';
import './styles.scss'

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    API.get('/transactions')
    .then(function (response) {
      const transactions = response.data;
      let revenue = [];
      let revenueDate = [];
      let expense = [];
      let sales = [];
      let salesDate = [];
      let total = [];

      for (let index = 0; index < transactions.length; index++) {
        const item = transactions[index];
        const value = Number(item.valor.match(/[\d.,]+/)[0].replace(',',''));
        if(item.tipo){
          revenue.push(value);
          revenueDate.push(item.to_char);
          total.push(value);
        }else{
          expense.push(value);
          total.push(0-value);
        }
          
        sales.push(Number(item.produtos.split(',').length));
        salesDate.push(item.to_char);
      }
      setData([revenue, expense, sales, total, revenueDate, salesDate]);
      
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
      <Wrapper/>
      {loading?
        <>
          <div className="metrics">
            <Skeleton sx={{zIndex: 1, bgcolor: '#2e2e2e'}} variant="rectangular" width={220} height={120}/>
            <Skeleton sx={{zIndex: 1, bgcolor: '#2e2e2e'}} variant="rectangular" width={220} height={120}/>
            <Skeleton sx={{zIndex: 1, bgcolor: '#2e2e2e'}} variant="rectangular" width={220} height={120}/>
            <Skeleton sx={{zIndex: 1, bgcolor: '#2e2e2e'}} variant="rectangular" width={220} height={120}/>
          </div>
          <div className="charts">
            <Skeleton sx={{zIndex: 1, bgcolor: '#2e2e2e', marginRight: 2}} variant="rectangular" width={700} height={300}/>
            <Skeleton sx={{zIndex: 1, bgcolor: '#2e2e2e'}} variant="rectangular" width={350} height={300}/>
          </div>
        </>
        :
        <>
          <div className="metrics">
            <MetricCard Icon={AiOutlineArrowUp} Name="Receita" Value={data[0]} Color='#39da4b'/>
            <MetricCard Icon={AiOutlineArrowDown} Name="Despesa" Value={data[1]} Color='#e72423'/>
            <MetricCard Icon={AiOutlineDollar} Name="Vendas" Value={data[2]} Color='#54007d'/>
            <MetricCard Icon={MdAttachMoney} Name="Total" Value={data[3]} Color='#0e4fc2'/>
          </div>
          <div className="charts">
            <Revenue data={data[0]} date={data[4]}/>
            <Sales data={data[2]} date={data[5]}/>
          </div>
        </>
      }
    </div>
  )
}