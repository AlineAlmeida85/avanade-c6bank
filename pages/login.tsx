import React, { FormEvent, useEffect, useState } from "react";
import {
    Typography, 
    Container, 
    Button, 
    TextField, 
    Checkbox,
    Box, 
    CssBaseline,
    FormControlLabel
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/utils/Copyright";
import Snackbar from "../components/utils/Snackbar";

const theme = createTheme();

export default function LoginPage(){

    const [email, setEmail] = useState<string | undefined | null>('');
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [error, setError] = useState<string | boolean>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [contador, setContador] = useState<number>(0);    


    useEffect(() => {

        if(contador == 0){
            document.title = `Executando useEffect a primeira vez. Contador: ${contador}`;
        }else {
            document.title = `Executando useEffect ${contador} vezes`;
        }
        console.log(`Executou o  useEffect ${contador} vezes`)
        // vai cor
    }, [contador]);
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        setPassword(data.get('password'));

    }

        useEffect(()=> {
            if(password && password.length < 6){
                setError(true);
                setErrorMessage('A senha deve ter no mínimo 6 caracteres');
            }else if(password){
                setError(false);
                setErrorMessage('');

                setOpen(true);
            }
        }, [password]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box sx={{mt:8, 
                    display:'flex', 
                    flexDirection: 'column',
                    alignItems:'center'
                    }}>
                    <Typography component="h1" variant="h5">
                        Tela de Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField margin="normal" required id="email" name="email" fullWidth label="Digite o Login" autoComplete="email"/>
                        <TextField margin="normal" required id="password" name="password" type="password" fullWidth label="Digite a Senha" autoComplete="current-password"/>
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Lembrar-me"
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                        Login
                        </Button>

                        {error && <Typography color="error">{errorMessage}</Typography>}

                    </Box>
                </Box>

                <Copyright site="avanade"/>
                {open && <Snackbar open={open} hide={5} message={'Usuário logado com sucesso! ... Aguarde...'} severity="success"/>}
            </Container>
        </ThemeProvider>
    )
}