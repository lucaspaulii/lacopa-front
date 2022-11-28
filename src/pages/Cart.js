import { useEffect, useState, useContext } from "react"
import axios from "axios"
import styled from "styled-components"
import { Destaques } from "../style/styled"
import { AuthContext } from "../contexts/AuthContext"
import CardCart from "../components/CardCart"
import { UserInfoContext } from "../contexts/UserContext.js";
import { Icon } from "@iconify/react";
import Modal from "../components/Modal"



export default function Cart() {
const [products, setProducts] = useState([]);
const [modal, setModal] = useState(false);
const [total, setTotal] = useState(0);
const { userToken } = useContext(AuthContext);
const { userInfo } = useContext(UserInfoContext);


    useEffect (() => {
        if (userToken) {
        const config = {
            headers: { Authorization: `Bearer ${userToken}`}
        };
        const promise = axios.get(`https://lacopa-api.onrender.com/cart`, config)
        promise.then(res => {
            setProducts(res.data);
        });
        promise.catch(err => {
            console.log(err.response.data)
        })
    }})
    
    useEffect (() => {
        let valorTotal = 0;
        products.map((product) =>
        valorTotal = valorTotal + (product.price*product.quantity)
        )
        setTotal(valorTotal);
    })

    return (
        <CategoryContainer>
            <Destaques>Carrinho</Destaques>
            <CardsCart>
                {products.map((product) => 
                (
                    <CardCart
                    productId={product.productId}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    setTotal={setTotal}
                    total={total}
                    />
                ),
                )}
            </CardsCart>
            <UserInfoBox>
                <h1>Dados de Compra</h1>
                <p>{userInfo.name}</p>
                <p>{userInfo.address}</p>
                <p>{userInfo.email}</p>
                <p>{userInfo.cpf}</p>
            </UserInfoBox>
            <Footer>
                <FooterStyle>
                    <h1>TOTAL: R${total},00</h1>
                    <Icon icon="mdi:cart-check" width="80" height="80" onClick={() => setModal(true)}/>
                </FooterStyle>
            </Footer>
            {modal ? <Modal products={products} setModal={setModal}/> : null}
        </CategoryContainer>
    )
}

const CategoryContainer = styled.div`
    width: 100%;
    height: calc(100vh - 110px);
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
    overflow: ${props => props.modal ? 'hidden' : 'scroll'}
`

const CardsCart = styled.div`
display: flex;
flex-direction: column;    
gap: 15px;
margin-bottom: 20px;
z-index: 0;
`

const UserInfoBox = styled.div`
z-index: 0;
font-family: 'Roboto', sans-sarif;
height: 130px;
width: 314px;
padding-left: 15px;
background-color: white;
display: flex;
gap: 5px;
flex-direction: column;
align-items: start;
justify-content: center;
font-size: 14px;
font-weight: 200;
text-align: left;
color: black;
border-radius: 5px;
filter: drop-shadow(0px 1px 2px #000);
margin-bottom: 20px;
h1 {
    font-size: 24px;
    font-family: "Londrina Solid", cursive;
}
`
const Footer = styled.div`
  display: ${props => props.modal ? 'none' : ''}
  z-index: 1;
  left: 0;
  bottom: 0;
  h1 {
    font-size: 42px;
    font-family: "Londrina Solid", cursive;
}
`;

const FooterStyle = styled.div`
width: 100vw;
height: 120px;
background-color: white;
display: flex;
align-items: center;
justify-content: space-around;
`;