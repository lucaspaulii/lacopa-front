import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

export default function FormSignup() {
    const [form, setForm] = useState({
        name: '',
        address: '',
        email: '',
        password: ''
    });

    const [disabled, setDisabled] = useState(false);

    function handleSignup(event) {
        const signup = axios.post('https://lacopa-api.onrender.com/sign-up', form);
        event.preventDefault();
        setDisabled(true);
        signup.then(completeSignup);
        signup.catch(checkError);
    };

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function completeSignup() {
            console.log("OK!");
            setDisabled(false);
    }

    function checkError() {
        alert("Esse usuário já existe");
        setDisabled(false);
        setForm({
            name: '',
            address: '',
            email: '',
            password: ''
        })
    }

    return (
        <Form onSubmit={handleSignup}>
            <Field type="text" name="name" placeholder="Nome" value={form.name} onChange={handleForm} disabled={disabled} />
            <Field type="text" name="address" placeholder="Endereço" value={form.address} onChange={handleForm} disabled={disabled} />
            <Field type="text" name="email" placeholder="E-mail" value={form.email} onChange={handleForm} disabled={disabled} />
            <Field type="password" name="password" placeholder="Senha" value={form.password} onChange={handleForm} disabled={disabled} />
            <Field type="password" name="reppassword" placeholder="Confirme a senha" disabled={disabled} />
            <SignupButton disabled={disabled}>Cadastrar</SignupButton>
        </Form>
    )
}

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
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

const SignupButton = styled.button`
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