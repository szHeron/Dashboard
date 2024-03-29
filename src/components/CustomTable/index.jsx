import { useState } from 'react';
import { Box, Button, IconButton, Table, TableContainer, TablePagination, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { AiFillEdit, AiFillDelete, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowBarLeft, BsArrowBarRight, BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import CustomDeleteModal from '../CustomDeleteModal';
import CustomEditModal from '../CustomEditModal';

export default function CustomTable({data, setCount, countUseEffect, rows, type}){
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [info, setInfo] = useState(null);
    const [page, setPage] = useState(0);
    let count = data.length;
    const rowsPerPage = 5;
    const dataToShow = count > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage):data;

    function TablePaginationActions() {  
        const handleFirstPageButtonClick = (event) => {
            handleChangePage(event, 0);
        };
      
        const handleBackButtonClick = (event) => {
            handleChangePage(event, page - 1);
        };
      
        const handleNextButtonClick = (event) => {
            handleChangePage(event, page + 1);
        };
      
        const handleLastPageButtonClick = (event) => {
            handleChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };
      
        return (
          <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
              onClick={handleFirstPageButtonClick}
              disabled={page === 0}
              aria-label="Primeira pagina"
            >
              <BsArrowBarLeft color="#fff"/>
            </IconButton>
            <IconButton
              onClick={handleBackButtonClick}
              disabled={page === 0}
              aria-label="Voltar a pagina"
            >
              <AiOutlineArrowLeft color="#fff"/>
            </IconButton>
            <IconButton
              onClick={handleNextButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="Proxima pagina"
            >
              <AiOutlineArrowRight color="#fff"/>
            </IconButton>
            <IconButton
              onClick={handleLastPageButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="Ultima pagina"
            >
              <BsArrowBarRight color="#fff"/>
            </IconButton>
          </Box>
        );
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return(
        <>
            <TableContainer sx={{zIndex: 1, maxWidth: 1000, marginTop: 3}} component={Paper}>
                <Table sx={{ minWidth: 700, backgroundColor: "#2e2e2e"}}>
                    <TableHead>
                        <TableRow>
                            {rows.map((row, index) => (
                                index === 0? <TableCell key={row} sx={{color:"#fff"}}>{row}</TableCell>:<TableCell key={row} align="right" sx={{color:"#fff"}}>{row}</TableCell>
                            ))}
                            <TableCell align="right" sx={{color:"#fff", width: 150}}>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(dataToShow).map((request) => (
                            <TableRow key={request.id}>
                                {Object.keys(request).map((item, i) => {
                                    if(i === 0){
                                        return <TableCell key={i} sx={{color:"#fff"}}>{request[item]}</TableCell>  
                                    }else{
                                        if(item === 'tipo')
                                            if(request[item])
                                                return <TableCell key={i} align="right" sx={{color:"#0f0"}}><BsArrowUpRight size={24}/></TableCell> 
                                            else
                                                return <TableCell key={i} align="right" sx={{color:"#f00"}}><BsArrowDownLeft size={24}/></TableCell>  
                                        return <TableCell align="right" key={i} sx={{color:"#fff"}}>{request[item]}</TableCell>  
                                    }
                                })}
                                <TableCell align="right" sx={{color:"#fff", width: 155}}>
                                    <Button variant="outlined" sx={{marginRight: 1}} onClick={()=>{setOpenEditModal(true); setInfo(request);}}><AiFillEdit size={20} color="#039be5"/></Button>
                                    <Button variant="outlined" color="error" onClick={()=>{setOpenDeleteModal(true); setInfo(request);}}><AiFillDelete size={20} color="#e61919"/></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TablePagination
                        rowsPerPageOptions={[5]}
                        count={count}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        ActionsComponent={TablePaginationActions}
                        sx={{color:"#fff"}}
                    />
                </Table>
            </TableContainer>
            {openDeleteModal&&<CustomDeleteModal setOpen={setOpenDeleteModal} open={openDeleteModal} count={countUseEffect} setCount={setCount} info={info} type={type}/>}
            {openEditModal&&<CustomEditModal setOpen={setOpenEditModal} open={openEditModal} newData={info} setNewData={setInfo} type={type}/>}
        </>
    )
}