import axios from "axios";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import {
  InputButton,
  InputsContainer,
  UserContainer,
} from "../style/styled.js";

export default function SignUp(params) {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [cpf, setCpf] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name && email && password && address && cpf) {
      const submitObject = {
        name,
        email,
        password,
        address,
        cpf,
      };
      setIsLoading(true);
      setErrorMessage(undefined);
      console.log(submitObject);
      signUp(submitObject);
    }
  }

  function signUp(obj) {
    const URL = "https://lacopa-api.onrender.com/sign-up";
    const promise = axios.post(URL, obj);
    promise.then((res) => {
      setIsLoading(false);
      setSuccessMessage("Usuário Criado!");
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
    });
    promise.catch((err) => {
      setErrorMessage(err.response.data);
      setIsLoading(false);
    });
  }

  return (
    <UserContainer>
      <InputsContainer color={errorMessage ? "red" : "green"}>
        <h1>LaCopa</h1>
        <h1>store</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
            minLength="5"
          ></input>
          <input
            type="text"
            placeholder="Endereço"
            required
            onChange={(e) => setAddress(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="CPF"
            required
            onChange={(e) => setCpf(e.target.value)}
          ></input>
          <InputButton
            type="submit"
            disabled={email && password ? false : true}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="3"
                animationDuration="0.75"
                width="30"
                visible={true}
              />
            ) : (
              "Cadastrar"
            )}
            {errorMessage && <p>{errorMessage}</p>}
            {successMessage && <p>{successMessage}</p>}
          </InputButton>
        </form>
      </InputsContainer>
      <Link to={"/signin"} style={{ textDecoration: "none" }}>
        <p>
          Já tem uma conta? <span>Faça seu Login!</span>
        </p>
      </Link>
    </UserContainer>
  );
}
