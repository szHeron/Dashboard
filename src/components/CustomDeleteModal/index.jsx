import React from "react";
import { Box, Button, Modal } from "@mui/material";
import { BsFillTrashFill } from "react-icons/bs";
import API from "../../service/API";

export default function CustomDeleteModal({open, setOpen, setCount, count, info, type}) {
    info = !info?{id:null}:info

    const handleDelete = () => {
        API.delete(`/${type}/${info.id}`)
        .then(function (response) {
            setOpen(false);
            setCount(count - 1);
        })
        .catch(e=>{
            console.log(e);
        });
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
                height: "50%", 
                width: "40%", 
                borderRadius: 5,
                border: "none"
            }}>
                <BsFillTrashFill size={64} color="#ff4040"/>
                <div style={{textAlign: "center"}}>
                    <h2 style={{fontWeight: "700", margin: 0}}>EXCLUIR ID - {info.id}</h2>
                    <p style={{marginBottom: 0}}>Tem certeza que deseja excluir?</p>
                </div>
                <div style={{display:"flex", justifyContent: "space-between", width: "40%"}}>
                    <Button sx={{backgroundColor: "#808080"}} variant="contained" onClick={()=>setOpen(false)}>CANCELAR</Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>EXCLUIR</Button>
                </div>
            </Box>
        </Modal>
    )
}
