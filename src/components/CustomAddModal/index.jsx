import React, { useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import API from "../../service/API";

export default function CustomAddModal({open, setOpen, setCount, count, type}) {
    const [newData, setNewData] = useState({});
    const [erros, setErros] = useState(null);
    const [labels, setLabels] = useState(type==="users"?['Usuario', 'Nome', 'Senha', 'Email', 'Estado']:['Nome', 'Valor', 'Quantidade']);

    const handlePost = async () => {
        try{
            setOpen(false);
            setCount(count + 1);
            await API.post(`/${type}`, newData);
        }catch(e){
            console.log(e);
        }
    }

    const validation = () => {
        let error = !erros?{}:erros;
        for (let i = 0; i < labels.length; i++) {
            const caseValidate = labels[i].toLowerCase();
            if(!newData[caseValidate]){
                error[labels[i]] = "Entrada de dados incorreta!";
            }else{
                delete error[labels[i]]
            }
        }

        if(Object.keys(error).length === 0){
            error = null
            handlePost();
        }

        setErros(error);
        
    }

    const renderErros = () =>{
        return labels.map((item)=>{
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
                    <h3>Adicionar</h3>
                    {
                        !erros?(
                            labels.map((item)=>{
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
            </Box>
        </Modal>
    )
}