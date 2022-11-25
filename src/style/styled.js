import styled from "styled-components";
import banner from "../assets/image/banner.png";

//Stylying do component <Main>
export const ContainerMain = styled.div`
  background-color: #e1e1e1;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 100%;
  margin-top: 100px;
  height: 280px;
  background-image: url(${banner});
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
`;

export const Destaques = styled.div`
  width: 100%;
  padding: 15px 0;
  background-color: #ffffff;
  font-family: "Londrina Solid", cursive;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding-left: 13px;
  margin-bottom: 15px;
  filter: drop-shadow(0px 0.3px 2.5px #000);
`;

//Styling do component <Header>
export const Container = styled.div`
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  filter: drop-shadow(0px 0.3px 2.5px #000);
`;

export const HeaderStyle = styled.div`
  background-color: #548e19;
  width: 100vw;
  height: 80px;
  font-family: "Londrina Solid", cursive;
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 2px;
`;

export const ContainerIcons = styled.div`
  display: flex;
  margin-right: 5px;
  * {
    margin-right: 5px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const ContainerSearch = styled.div`
  width: 220px;
  height: 20px;
`;

export const Search = styled.input`
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  text-align: center;
  border: 0.5px;
  border-radius: 5px;
`;

export const Menu = styled.div`
  background-color: #f6d14b;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  padding-left: 10px;
  position: relative;
`;

export const ProductsDisplay = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  * {
    margin: 5px 5px;
  }
`
