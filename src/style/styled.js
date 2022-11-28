import styled from "styled-components";
import banner from "../assets/image/banner.png";

//Stylying do component <Main>
export const ContainerMain = styled.div`
  background-color: #e1e1e1;
  width: 100%;
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
  span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
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
    color: #ffffff;
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
  display: flex;
`;

export const Search = styled.input`
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  text-align: center;
  border: 0.5px;
  border-radius: 5px;
  margin-right: 5px;
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
`;

//Styling do signin e signup

export const UserContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #85ba4f;
  font-family: "Open Sans", sans-serif;
  img {
    width: 150px;
    height: auto;
    margin-bottom: 10px;
  }
  h1:nth-child(1) {
    color: #fff;
    font-size: 50px;
    text-shadow: -2.5px -2.5px 0 #000, 0 -2.5px 0 #000, 2.5px -2.5px 0 #000,
      2.5px 0 0 #000, 2.5px 2.5px 0 #000, 0 2.5px 0 #000, -2.5px 2.5px 0 #000,
      -2.5px 0 0 #000;
    font-family: "Londrina Solid", cursive;
  }
  h1:nth-child(2) {
    color: #000;
    font-size: 50px;
    text-shadow: -1.5px -1.5px 0 #ffffff, 0 -1.5px 0 #ffffff,
      1.5px -0.5px 0 #ffffff, 1.5px 0 0 #ffffff, 1.5px 1.5px 0 #ffffff,
      0 1.5px 0 #ffffff, -1.5px 1.5px 0 #ffffff, -1.5px 0 0 #ffffff;
    margin-bottom: 25px;
    font-family: "Londrina Solid", cursive;
  }
  p {
    text-align: center;
    margin-top: 30px;
    color: #ffffff;
  }
  span {
    font-weight: 600;
  }
`;
export const InputButton = styled.button`
  background-color: #548e19;
  border: none;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
  height: 50px;
  margin-top: 10px;
  font-size: 20px;
  color: #ffffff;
  img {
    height: 80%;
    width: auto;
  }
`;
export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  position: relative;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  input {
    width: 80%;
    max-width: 500px;
    margin-top: 5px;
    height: 50px;
    border: none;
    border-radius: 5px;
    padding-left: 7px;
    font-size: 16px;
  }
  input:focus {
    outline: 3px solid green;
    outline-offset: -4px;
    color: #000;
  }
  input[type="radio"] {
    border: 0px;
    height: 24px;
    width: auto;
  }
  input[type="radio"]:checked {
    appearance: none;
    background-color: red;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    border: 2px solid #ffffff;
  }
  td {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
  label {
    color: #ffffff;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  p {
    position: absolute;
    bottom: -200px;
    margin: 0 auto;
    color: ${(props) => props.color};
  }
`;

//Styling do Component <Quantity>
export const QuantityContainer = styled.div`
  font-family: "Roboto", sans-sarif;
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 81px;
  height: 52px;
  background: #FDFDFD;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

export const QtyContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Qty = styled.input`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-align: center;
  width: 100%;
  border: none;
`

export const QtyButton = styled.button`
  background: none;
  font-size: 20px;
  border: none;
`

export const CategoryContainer = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;