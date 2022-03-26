import { Button, Table, TableContainer, TablePagination, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function CustomTable({data, rows}){
    const RenderDate = (obj)=>{
        return `${obj.getHours()}:${obj.getMinutes()} - ${obj.getDate()}/${obj.getMonth()+1}/${obj.getFullYear()}`
    } 
    return(
        <TableContainer sx={{zIndex: 1, maxWidth: 1000, marginTop: 7}} component={Paper}>
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
                    {data.map((request) => (
                        <TableRow key={request.id}>
                            {Object.keys(request).map((item, i) => {
                                if(i === 0){
                                    return <TableCell key={i} sx={{color:"#fff"}}>{request[item]}</TableCell>  
                                }else{
                                    if(item === 'date'){
                                        return <TableCell align="right" key={i} sx={{color:"#fff"}}>{RenderDate(request[item])}</TableCell>  
                                    }else{
                                        return <TableCell align="right" key={i} sx={{color:"#fff"}}>{request[item]}</TableCell>  
                                    }
                                }
                            })}
                            <TableCell align="right" sx={{color:"#fff", width: 150}}>
                                <Button><AiFillEdit size={20} color="#A220FF"/></Button>
                                <Button color="error"><AiFillDelete size={20} color="#e61919"/></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    count={data.length}
                    rowsPerPage={5}
                    page={0}
                    onPageChange={()=>{}}
                    onRowsPerPageChange={()=>{}}
                    sx={{color:"#fff"}}
                />
            </Table>
        </TableContainer>
    )
}