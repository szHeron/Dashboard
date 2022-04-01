import React, { useState } from "react";
import { Alert, Box, Button, Modal, Snackbar, TextField } from "@mui/material";
import API from "../../service/API";

export default function CustomAddModal({open, setOpen, info, type}) {
    info = !info?{id:null}:info
    const [showAlert, setShowAlert] = useState(false);
    const [newData, setNewData] = useState({});

    const handlePost = () => {
        console.log(newData)
        // API.post(`/${type}`)
        // .then(function (response) {
        //     setOpen(false);
        //     setShowAlert(true)
        //     response.json(newData)
        // })
        // .catch(e=>{
        //     console.log(e);
        // });
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#fff", 
                height: "80%", 
                width: "35%", 
                borderRadius: 5,
                border: "none"
            }}>
                <form onSubmit={(e)=>{handlePost();e.preventDefault()}}>
                    <h3>Adicionar usuário</h3>
                    {info.map((item)=>{
                        let aux = newData;
                        return <TextField 
                            key="item"
                            sx={{width: "70%"}} 
                            label={item} 
                            variant="outlined" 
                            onChange={(e)=>{aux[item] = e.target.value; setNewData(aux)}}
                    />
                    })}
                    <div style={{display:"flex", justifyContent: "space-between", width: "45%", marginBottom: 15}}> 
                        <Button variant="contained" sx={{backgroundColor: "#808080"}} onClick={()=>setOpen(false)}> CANCELAR </Button>
                        <Button variant="contained" color="success" type="submit"> SALVAR </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}
