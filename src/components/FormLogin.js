import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

export default function FormLogin() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [disabled, setDisabled] = useState(false);

    function handleLogin(event) {
        const login = axios.post('https://lacopa-api.onrender.com/sign-in', form);
        event.preventDefault();
        setDisabled(true);
        login.then(completeLogin);
        login.catch(checkError);
    };

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function completeLogin(res) {
        console.log("OK!");
        setDisabled(false);
    }

    function checkError() {
        alert("O usuário e/ou a senha está(ão) incorreto(s)");
        setDisabled(false);
    }

    return (
        <Form onSubmit={handleLogin}>
            <Field type="text" name="email" placeholder="E-mail" value={form.email} onChange={handleForm} disable={disabled} />
            <Field type="password" name="password" placeholder="Senha" value={form.password} onChange={handleForm} disabled={disabled} />
            <SigninButton disabled={disabled}>Entrar</SigninButton>
        </Form>
    )
}

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
`

const Field = styled.input`
border-sizing: border-box;
font-family: 'Roboto', sans-serif;
font-size: 20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
border: 1px solid #D5D5D5;
width: 319px;
height: 55px;
padding-left: 10px;
::placeholder {
    color: #858585;
}
`

const SigninButton = styled.button`
font-family: 'Londrina Solid', cursive;
font-size: 32px;
background-color: #85BA4F;
border: none;
border: 1px solid #85BA4F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
width: 329px;
height: 55px;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-bottom: 35px;
`