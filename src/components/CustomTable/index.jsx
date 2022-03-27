import { useState } from 'react';
import { Box, Button, IconButton, Table, TableContainer, TablePagination, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { AiFillEdit, AiFillDelete, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import API from '../../service/API';

export default function CustomTable({data, rows, type}){
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;
    let count = data.length;
    const dataToShow = count > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage):data

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

    const RenderDate = (obj)=>{
        return `${obj.getHours()}:${obj.getMinutes()} - ${obj.getDate()}/${obj.getMonth()+1}/${obj.getFullYear()}`
    } 

    const handleDelete = (id) => {
        API.delete(`/${type}/${id}`)
        .then(function (response) {
            console.log(response.data, 'eae')
        })
        .catch(e=>{
            console.log(e)
        });
    } 
    
    return(
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
                                    if(item === 'date'){
                                        return <TableCell align="right" key={i} sx={{color:"#fff"}}>{()=>RenderDate(request[item])}</TableCell>  
                                    }else{
                                        return <TableCell align="right" key={i} sx={{color:"#fff"}}>{request[item]}</TableCell>  
                                    }
                                }
                            })}
                            <TableCell align="right" sx={{color:"#fff", width: 150}}>
                                <Button><AiFillEdit size={20} color="#039be5"/></Button>
                                <Button color="error"><AiFillDelete size={20} color="#e61919" onClick={()=>{handleDelete(request.id)}}/></Button>
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
    )
}