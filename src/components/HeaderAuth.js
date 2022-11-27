import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HeaderAuth() {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <ContainerLogoAuth onClick={() => navigate("/main")}>
                <p>LaCopa</p>
                <p>store</p>
            </ContainerLogoAuth>
            <YellowStrip />
        </HeaderContainer>
)}

const HeaderContainer = styled.div`
height: 150px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin-bottom: 20px;
`

const ContainerLogoAuth = styled.div`
  display: flex;
  font-family: "Londrina Solid", cursive;
  font-size: 58px;
  color: white;
  align-items: center;
  justify-content: center;
  p {
    text-shadow: -0.7px -0.7px 0 #000, 0 -0.7px 0 #000, 0.7px -0.7px 0 #000,
      0.7px 0 0 #000, 0.7px 0.7px 0 #000, 0 0.7px 0 #000, -0.7px 0.7px 0 #000,
      -0.7px 0 0 #000;
  }
  p:nth-child(2) {
    color: black;
    margin-left: 2.3px;
    text-shadow: -0.7px -0.7px 0 #ffffff, 0 -0.7px 0 #ffffff,
      0.7px -0.7px 0 #ffffff, 0.7px 0 0 #ffffff, 0.7px 0.7px 0 #ffffff,
      0 0.7px 0 #ffffff, -0.7px 0.7px 0 #ffffff, -0.7px 0 0 #ffffff;
  }
`;

const YellowStrip = styled.div`
width: 100vw;
height: 31px;
background: #F6D14B;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`