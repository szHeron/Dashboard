import React, { useState } from "react";
import { Alert, Box, Button, Modal, Snackbar, TextField } from "@mui/material";
import API from "../../service/API";

export default function CustomAddModal({open, setOpen, setCount, count, info, type}) {
    const [showAlert, setShowAlert] = useState(false);
    const [newData, setNewData] = useState({});
    const [erros, setErros] = useState(null);

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

    const validation = () => {
        let error = !erros?{}:erros;
        for (let i = 0; i < info.length; i++) {
            const caseValidate = info[i].toLowerCase();
            if(!newData[caseValidate] || newData[caseValidate].length < 3){
                error[info[i]] = "Entrada de dados incorreta!";
            }else{
                delete error[info[i]]
            }
        }

        if(Object.keys(error).length === 0){
            error = null
        }

        setErros(error);
        
    }

    const renderErros = () =>{
        return info.map((item)=>{
            let aux = newData;
            if(!erros[item]){
                return <TextField 
                    key={item}
                    id={item}
                    sx={{width: "70%"}} 
                    label={item} 
                    variant="outlined"
                    onChange={(e)=>{aux[item.toLowerCase()] = e.target.value; setNewData(aux)}}
                />
            }else{
                return <TextField 
                    key={item}
                    id={item}
                    sx={{width: "70%"}} 
                    label={item} 
                    variant="outlined"
                    error
                    helperText={erros[item]}
                    onChange={(e)=>{aux[item.toLowerCase()] = e.target.value; setNewData(aux)}}
                />
            }
        })
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
                }} onSubmit={(e)=>{e.preventDefault();validation();}}>
                    <h3>Adicionar usuário</h3>
                    {
                        !erros?(
                            info.map((item)=>{
                                let aux = newData;
                                return <TextField 
                                    key={item}
                                    id={item}
                                    sx={{width: "70%"}} 
                                    label={item} 
                                    variant="outlined"
                                    onChange={(e)=>{aux[item.toLowerCase()] = e.target.value; setNewData(aux)}}
                                />
                            })
                        )
                        :(
                            renderErros()
                        ) 
                    }
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
