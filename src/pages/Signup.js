import styled from "styled-components";
import HeaderAuth from "../components/HeaderAuth";
import { Link } from "react-router-dom";
import FormSignup from "../components/FormSignup";


export default function Signup() {

    return (
        <ContainerAuth>
            <HeaderAuth />
            <FormSignup />
            <StyledLink to={`/signup`}>
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