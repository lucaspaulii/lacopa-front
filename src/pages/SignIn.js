import { useContext, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
//import { UserInfoContext } from "../contexts/UserContext";
import { InputButton, InputsContainer, UserContainer } from "../style/styled";

export default function SignIn(params) {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const { setUserToken } = useContext(AuthContext);
  //const { setUserInfo } = useContext(UserInfoContext);
  // const locationTo = "./main"; //this.props.location.state;

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      const submitObject = {
        email,
        password,
      };
      setIsLoading(true);
      setErrorMessage(undefined);
      login(submitObject);
    }
  }

  function login(obj) {
    const URL = "https://lacopa-api.onrender.com/sign-in";
    const promise = axios.post(URL, obj);
    promise.then((res) => {
      setUserToken(res.data);
      console.log(res.data)
      userInfo(res.data);
      setIsLoading(false);
      navigate("/main");
    });
    promise.catch((err) => {
      setErrorMessage(err.response.data);
      setIsLoading(false);
    });
  }

  function userInfo(token) {}

  return (
    <UserContainer>
      <InputsContainer color={errorMessage ? "red" : "green"}>
        <h1>LaCopa</h1>
        <h1>store</h1>
        <form onSubmit={handleSubmit}>
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
              "Entrar"
            )}
          </InputButton>
        </form>
      </InputsContainer>
      <Link to={"/signup"} style={{ textDecoration: "none" }}>
        <p>
          Primeira vez? <span>Cadastre-se!</span>
        </p>
      </Link>
    </UserContainer>
  );
}
