import React, { useEffect, useState } from 'react';
import { Skeleton, SpeedDial, SpeedDialIcon } from '@mui/material';
import CustomAddModal from '../../components/CustomAddModal';
import API from '../../service/API';
import Table from '../../components/CustomTable';
import './style.scss'

export default function Transactions() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [count, setCount] = useState(null);

  useEffect(()=>{
    API.get('/transactions')
    .then(function (response) {
      setData(response.data);
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
      {
        loading?(
          <Skeleton sx={{zIndex: 1, bgcolor: '#2e2e2e', marginTop: 3}} variant="rectangular" width={1000} height={450}/>
        ):(
          <Table data={data} rows={['ID', 'Tipo', 'Remetente', 'Produtos', 'Valor', 'Data']} type="transactions"/>
        )
      }
      <SpeedDial
        ariaLabel="Adicionar uma nova transação"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClick={()=>setOpenAddModal(true)}
      />
      <CustomAddModal setCount={setCount} count={count} open={openAddModal} setOpen={setOpenAddModal} type="transactions"/>
    </div>
  )
}
