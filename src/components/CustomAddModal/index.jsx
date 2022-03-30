import React, { useState } from "react";
import { Alert, Box, Button, Modal, Snackbar } from "@mui/material";
import API from "../../service/API";

export default function CustomAddModal({open, setOpen, info, type}) {
    const [showAlert, setShowAlert] = useState(false);
    info = !info?{id:null}:info

    const handleDelete = () => {
        API.post(`/${type}`)
        .then(function (response) {
            setOpen(false);
            setShowAlert(true)
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
                teste
            </Box>
        </Modal>
    )
}
