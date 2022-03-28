import React from 'react';
import { Modal, Box } from '@mui/material';
import './style.scss';

export default function CustomAddModal({open, setOpen, info}) {
    return (
        <div>
            <Modal
                open={open}
                onClose={()=>setOpen(false)}
            >
                <Box>
                    <h1>ADICIONAR</h1>
                    <p>Tem centeza que deseja deletar?</p>
                </Box>
            </Modal>
        </div>
    )
}
