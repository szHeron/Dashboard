import React, { useEffect, useState } from 'react';
import { Alert, Skeleton, SpeedDial, SpeedDialIcon, Snackbar } from '@mui/material';
import CustomAddModal from '../../components/CustomAddModal';
import API from '../../service/API';
import Table from '../../components/CustomTable';
import './style.scss'

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [showDelAlert, setShowDelAlert] = useState(false);
  const [showAddAlert, setShowAddAlert] = useState(false);
  const [count, setCount] = useState(null);

  useEffect(()=>{
    API.get('/products')
    .then(function (response) {
      let dataLength = null;

      if(data.length < 1){
        setData(response.data);
        dataLength = data.length;
      }
      if(count){
        if(count < dataLength){
          setShowDelAlert(true);
          setCount(dataLength);
          setData(response.data);
        }else if(count > dataLength){
          setShowAddAlert(true);
          setCount(dataLength);
          setData(response.data);
        }
      }else{
        setCount(dataLength);
      }
      setTimeout(function(){
        setLoading(false);
      },2000);
    })
    .catch(e=>{
      console.log(e)
    });
  },[data, count]);

  return (
    <div className="container">
      <div className="wrapper"/>
      {
        loading?(
          <Skeleton sx={{zIndex: 1, bgcolor: '#2e2e2e', marginTop: 3}} variant="rectangular" width={1000} height={450}/>
        ):(
          <Table data={data} rows={['ID', 'Nome', 'Valor', 'Quantidade']} type="products"/>
        )
      }
      <SpeedDial
        ariaLabel="Adicionar um novo produto"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClick={()=>setOpenAddModal(true)}
      />
      <CustomAddModal setCount={setCount} count={count} open={openAddModal} setOpen={setOpenAddModal} type="products"/>
      {
        showDelAlert&&
          <Snackbar open={showDelAlert} autoHideDuration={6000} onClose={()=>setShowDelAlert(false)}>
            <Alert onClose={()=>setShowDelAlert(false)} severity="success" sx={{ width: '100%' }}>
              Produto excluido com sucesso!
            </Alert>
          </Snackbar>
      }
      {
        showAddAlert&&
          <Snackbar open={showAddAlert} autoHideDuration={6000} onClose={()=>setShowAddAlert(false)}>
            <Alert onClose={()=>setShowAddAlert(false)} severity="success" sx={{ width: '100%' }}>
              Produto adicionado com sucesso!
            </Alert>
          </Snackbar>
      }
    </div>
  )
}
