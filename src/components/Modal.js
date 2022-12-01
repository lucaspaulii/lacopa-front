import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import InfoProd from "./InfoProd";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

export default function Modal(props) {
  const { products, setModal } = props;
  const [openModal, setOpenModal] = useState(false);
  const [total, setTotal] = useState(0);
  const { userToken } = useContext(AuthContext);

  setTimeout(resetCart, 8000);

  useEffect(() => {
    let valorTotal = 0;
    products.map(
      (product) => (valorTotal = valorTotal + product.price * product.quantity)
    );
    setTotal(valorTotal);
  });

  useEffect(() => {
    setOpenModal(true);
  });

  function resetCart() {
    if (userToken) {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };
      const promise = axios.put(
        `https://lacopa-back.onrender.com/cart`,
        "",
        config
      );
      promise.then((res) => {
        setTimeout(setModal(false), 5000);
      });
      promise.catch((err) => {
        console.log(err.response.data);
      });
    }
  }

  return (
    <Container openModal={openModal}>
      <ModalCont openModal={openModal}>
        <h1>PEDIDO REALIZADO</h1>
        {products.map((product) => (
          <InfoProd
            name={product.name}
            quantity={product.quantity}
            price={product.price}
          />
        ))}
        <Border />
        <h1>TOTAL: R${total},00</h1>
      </ModalCont>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 800;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: ${(props) => (props.openModal ? "1" : "0")};
  transition: opacity 0.05s ease-in;
`;

const ModalCont = styled.div`
  background-color: #548e19;
  margin-bottom: 120px;
  width: 340px;
  height: 500px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  opacity: ${(props) => (props.openModal ? "1" : "0")};
  transition: opacity 0.5s ease-in;
  h1 {
    font-family: "Londrina Solid", cursive;
    font-size: 40px;
    color: #ffffff;
    text-shadow: -0.7px -0.7px 0 #000, 0 -0.7px 0 #000, 0.7px -0.7px 0 #000,
      0.7px 0 0 #000, 0.7px 0.7px 0 #000, 0 0.7px 0 #000, -0.7px 0.7px 0 #000,
      -0.7px 0 0 #000;
  }
`;

const Border = styled.div`
  width: 340px;
  height: 35px;
  background-color: #f6d14b;
  filter: drop-shadow(0px 0.3px 2.5px #000);
`;
