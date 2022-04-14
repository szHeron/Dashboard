import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";

export default function CustomInput({newData, setNewData, type}){
    if(type==="users"){
        return(
            <>
                <TextField 
                    id={'user'}
                    sx={{width: '70%'}} 
                    label={'Usuário'}
                    value={newData.usuario}
                    variant='outlined'
                    onChange={(e)=>{setNewData({...newData, usuario: e.target.value})}}
                />
                <TextField 
                    id={'name'}
                    sx={{width: '70%'}} 
                    label={'Nome'}
                    value={newData.nome}
                    variant='outlined'
                    onChange={(e)=>{setNewData({...newData, nome: e.target.value})}}
                />
                <TextField 
                    id={'pass'}
                    sx={{width: '70%'}} 
                    label={'Senha'} 
                    value={newData.senha}
                    variant='outlined'
                    onChange={(e)=>{setNewData({...newData, senha: e.target.value})}}
                />
                <TextField 
                    id={'email'}
                    sx={{width: '70%'}} 
                    label={'Email'}
                    value={newData.email}
                    variant='outlined'
                    onChange={(e)=>{setNewData({...newData, email: e.target.value})}}
                />
                <TextField 
                    id={'estate'}
                    sx={{width: '70%'}} 
                    label={'Estado'}
                    value={newData.estado}
                    variant='outlined'
                    onChange={(e)=>{setNewData({...newData, estado: e.target.value})}}
                />
            </>
        )
    }else if(type==="transactions"){
        return (
            <>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Tipo</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={true}
                        name="radio-buttons-group"
                        onChange={(e)=>{setNewData({...newData, tipo: e.target.value==='true'?true:false})}}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Ganho" />
                        <FormControlLabel value={false} control={<Radio />} label="Despesa" />
                    </RadioGroup>
                </FormControl>
                <TextField 
                    id={'sender'}
                    sx={{width: '70%'}} 
                    label={'Remetente'} 
                    value={newData.remetente}
                    variant='outlined'
                    onChange={(e)=>{setNewData({...newData, remetente: e.target.value})}}
                />
                <TextField 
                    id={'products'}
                    sx={{width: '70%'}} 
                    label={'Produtos'} 
                    value={newData.produtos}
                    variant='outlined'
                    onChange={(e)=>{setNewData({...newData, produtos: e.target.value})}}
                />
                <TextField 
                    id={'value'}
                    sx={{width: '70%'}}
                    label={'Valor'} 
                    value={newData.valor}
                    variant='outlined'
                    type="number"
                    onChange={(e)=>{setNewData({...newData, valor: Number(e.target.value)})}}
                />
            </>
        )
    }else{
        return (
            <>
                <TextField 
                    id={'productName'}
                    sx={{width: '70%'}} 
                    label={'Nome'}
                    value={newData.nome}
                    variant='outlined'
                    onChange={(e)=>{setNewData({...newData, nome: e.target.value})}}
                />
                <TextField 
                    id={'productValue'}
                    sx={{width: '70%'}} 
                    label={'Valor'} 
                    value={newData.valor}
                    variant='outlined'
                    type="number"
                    onChange={(e)=>{setNewData({...newData, valor: Number(e.target.value)})}}
                />
                <TextField 
                    id={'Qt'}
                    sx={{width: '70%'}} 
                    label={'Quantidade'}
                    value={newData.quantidade}
                    variant='outlined'
                    type="number"
                    onChange={(e)=>{setNewData({...newData, quantidade: Number(e.target.value)})}}
                />
            </>
        )
    }
}