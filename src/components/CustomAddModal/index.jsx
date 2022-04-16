import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import CustomInput from "../CustomInput";
import API from "../../service/API";

export default function CustomAddModal({open, setOpen, setCount, count, type}) {
    const [newData, setNewData] = useState({});

    const handlePost = async () => {
        try{
            setOpen(false);
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
                }} onSubmit={(e)=>{e.preventDefault(); handlePost();}}>
                    <h3>Adicionar</h3>
                    {
                        <CustomInput newData={newData} setNewData={setNewData} type={type}/>
                    }
                    <div style={{display:"flex", justifyContent: "space-between", width: "45%", marginBottom: 15}}> 
                        <Button variant="contained" sx={{backgroundColor: "#808080"}} onClick={()=>setOpen(false)}> CANCELAR </Button>
                        <Button variant="contained" color="success" type="submit"> SALVAR </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}