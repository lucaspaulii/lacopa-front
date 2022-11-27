import styled from "styled-components";
import HeaderAuth from "../components/HeaderAuth";
import FormLogin from "../components/FormLogin";
import { Link } from "react-router-dom";


export default function Login() {

    return (
        <ContainerAuth>
            <HeaderAuth />
            <FormLogin />
            <StyledLink to={`/sign-up`}>
                Primeira vez? Cadastre-se!
            </StyledLink>
        </ContainerAuth>
    )
}

const ContainerAuth = styled.div`
height: 100vh;
background-color: #548E19;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const StyledLink = styled(Link)`
font-family: "Roboto", sans-sarif;
font-size: 20px;
color: #FFFFFF;
font-weight: 400;
text-decoration-line: none;
`