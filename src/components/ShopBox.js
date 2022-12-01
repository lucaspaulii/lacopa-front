import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Quantity from "./Quantity";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ShopBox(props) {
  const [successMessage, setSuccessMessage] = useState(undefined);
  const { userToken } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const [alertAdd, setAlertAdd] = useState(false);
  const { id, name, price, image } = props;
  const URL = `https://lacopa-api.onrender.com/cart`;
  const navigate = useNavigate();
  const products = {
    id,
    price,
    name,
    image,
    quantity,
  };

  function updateCart() {
    if (!userToken) {
      navigate("/signin");
    }
    if (userToken) {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };
      const promise = axios.post(URL, products, config);
      promise.then((res) => {
        setAlertAdd(true);
        setTimeout(() => {
          setAlertAdd(false);
        }, 2000);
        setTimeout(() => {
          navigate("/main");
        }, 2500);
      });
      promise.catch((err) => {
        console.log(err.response);
      });
    }
  }

  return (
    <ShopBoxContainer>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <Cart onClick={() => updateCart()}>
        <Icon icon="mdi:cart-plus" width="36" height="36" />
        <p>Adicionar ao carrinho</p>
      </Cart>
      {alertAdd && (
        <AlertAddContainer alertAdd={alertAdd}>Produto adicionado ao carrinho!</AlertAddContainer>
      )}
    </ShopBoxContainer>
  );
}

const ShopBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #8b8b8b;
`;

const AlertAddContainer = styled.div`
  height: 100px;
  width: 200px;
  color: #ffffff;
  background-color: #548e19cc;
  position: fixed;
  margin: 200px auto;
  top: 0;
  left: 25%;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: opacity 0.7s ease-out;
  opacity: ${props => props.alertAdd ? '1' : '0'};
`;

const Cart = styled.button`
  font-family: "Roboto", sans-sarif;
  font-size: 12px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 80px;
  width: 80px;
  border: 5px;
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
