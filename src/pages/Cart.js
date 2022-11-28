import { useEffect, useState, useContext } from "react"
import axios from "axios"
import styled from "styled-components"
import { Destaques } from "../style/styled"
import { AuthContext } from "../contexts/AuthContext"
import CardCart from "../components/CardCart"
import { UserInfoContext } from "../contexts/UserContext.js";



export default function Cart() {
const [products, setProducts] = useState([])
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
                    />
                )
                )}
            </CardsCart>
            <UserInfoBox>
                <h1>Dados de Compra</h1>
                <p>{userInfo.name}</p>
                <p>{userInfo.address}</p>
                <p>{userInfo.email}</p>
                <p>{userInfo.cpf}</p>
            </UserInfoBox>
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
`

const CardsCart = styled.div`
display: flex;
flex-direction: column;    
gap: 15px;
margin-bottom: 20px;
`

const UserInfoBox = styled.div`
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
h1 {
    font-size: 24px;
    font-family: "Londrina Solid", cursive;
}
`