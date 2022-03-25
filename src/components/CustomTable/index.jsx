import { Table, TableContainer, TablePagination, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

export default function CustomTable({data, rows}){
    return(
        <TableContainer sx={{zIndex: 1, maxWidth: 1000, marginTop: 10}} component={Paper}>
            <Table sx={{ minWidth: 700, backgroundColor: "#2e2e2e"}}>
                <TableHead>
                    <TableRow>
                        {rows.map((row, index) => (
                            index === 0? <TableCell sx={{color:"#fff"}}>{row}</TableCell>:<TableCell sx={{color:"#fff"}} align="right">{row}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((request) => (
                    <TableRow key={request.id}>
                        <TableCell sx={{color:"#fff"}} component="th" scope="row">
                            {request.id}
                        </TableCell>
                        <TableCell sx={{color:"#fff"}} align="right">{request.name}</TableCell>
                        <TableCell sx={{color:"#fff"}} align="right">{request.client}</TableCell>
                        <TableCell sx={{color:"#fff"}} align="right">{request.amount}</TableCell>
                        <TableCell sx={{color:"#fff"}} align="right">{request.value}</TableCell>
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