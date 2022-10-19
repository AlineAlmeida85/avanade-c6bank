import React, { useState } from 'react'
import { Stack, Snackbar as Container, AlertColor} from '@mui/material';
import Alert from '../Alert'


type SnackbarProps = {
    open: boolean;
    hide: number;
    message: string;
    severity: AlertColor;
}
export default function Snackbar(props: SnackbarProps) {
const [open, setOpen] = useState<boolean>(props.open);

const handleClose = () => {
    setOpen(false);
  }

  return (
    <Stack>
        <Container open={open} autoHideDuration={props.hide * 1000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.severity?props.severity:"success"} sx={{ width: '100%' }}>
                {props.message}                    
            </Alert>
        </Container>
    </Stack>
  )
}
