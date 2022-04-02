import React, { useState } from "react";
import { Alert, Box, Button, Modal, Snackbar, TextField } from "@mui/material";
import API from "../../service/API";

export default function CustomAddModal({open, setOpen, setCount, count, info, type}) {
    const [showAlert, setShowAlert] = useState(false);
    const [newData, setNewData] = useState({});

    const handlePost = async () => {
        try{
            setOpen(false);
            setShowAlert(true);
            setCount(count + 1);
            await API.post(`/${type}`, newData);
        }catch(e){
            console.log(e);
        }
    }
    
    return (
        <Modal
            open={open}
            onClose={()=>setOpen(false)}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box sx={{
                backgroundColor: "#fff", 
                height: "80%", 
                width: "35%", 
                borderRadius: 5,
                border: "none"
            }}>
                <form style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "100%",
                    width: "100%"
                }} onSubmit={(e)=>{handlePost();e.preventDefault()}}>
                    <h3>Adicionar usuário</h3>
                    {info.map((item)=>{
                        let aux = newData;
                        return <TextField 
                            key={item}
                            sx={{width: "70%"}} 
                            label={item} 
                            variant="outlined" 
                            onChange={(e)=>{aux[item.toLowerCase()] = e.target.value; setNewData(aux)}}
                    />
                    })}
                    <div style={{display:"flex", justifyContent: "space-between", width: "45%", marginBottom: 15}}> 
                        <Button variant="contained" sx={{backgroundColor: "#808080"}} onClick={()=>setOpen(false)}> CANCELAR </Button>
                        <Button variant="contained" color="success" type="submit"> SALVAR </Button>
                    </div>
                </form>
                {showAlert&&(
                    <Snackbar open={showAlert} autoHideDuration={6000} onClose={()=>setShowAlert(false)}>
                        <Alert onClose={()=>setShowAlert(false)} severity="success" sx={{ width: '100%' }}>
                            teste
                        </Alert>
                    </Snackbar>
                )}
            </Box>
        </Modal>
    )
}
