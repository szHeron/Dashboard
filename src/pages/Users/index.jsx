import React, { useEffect, useState } from 'react';
import { Skeleton, SpeedDial, SpeedDialIcon } from '@mui/material';
import Table from '../../components/CustomTable';
import CustomAddModal from '../../components/CustomAddModal';
import API from '../../service/API';
import './style.scss'

export default function Users() {
  const [data, setData] = useState(null);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    API.get('/users')
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
    <>
      <div className="container">
        <div className="wrapper"/>
        {
          loading?(
            <Skeleton sx={{zIndex: 1, bgcolor: '#2e2e2e', marginTop: 3}} variant="rectangular" width={1000} height={450}/>
          ):(
            <Table data={data} rows={['ID', 'Usuario', 'Nome', 'Senha', 'Email', 'Estado']} type="users"/>
          )
        }
        <SpeedDial
          ariaLabel="Adicionar um novo usuario"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClick={()=>setOpenAddModal(true)}
        />
      </div>
      <CustomAddModal open={openAddModal} setOpen={setOpenAddModal} type="users"/>
    </>
  )
}