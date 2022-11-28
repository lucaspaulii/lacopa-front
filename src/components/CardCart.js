import { useEffect, useState } from "react"
import axios from "axios";
import styled from "styled-components";

export default function CardCart(props) {
    const {productId, image, name, price, quantity, total, setTotal} = props
    const newPrice = price.toString();
    return (
        <ProductContainer>
            <ImageBox src={image} />
            <InfoBox>
                <h1>{name}</h1>
                <p>Quantidade: {quantity}</p>
                <p>R${newPrice},00</p>
                <p>TOTAL: R${price * quantity},00</p>
            </InfoBox>
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
font-family: 'Londrina Solid', cursive;
height: 130px;
width: 329px;
background-color: white;
display: flex;
align-items: center;
justify-content: space-evenly;
font-size: 12px;
font-weight: 100;
text-align: center;
color: black;
border-radius: 5px;
filter: drop-shadow(0px 1px 2px #000);
`

const ImageBox = styled.img`
width: 25%;
`

const InfoBox = styled.div`
height: 100%;
display: flex;
font-size: 15px;
flex-direction: column;
justify-content: center;
text-align: end;
font-family: Roboto, 'sans-sarif';
h1 {
    font-size: 24px;
    font-family: "Londrina Solid", cursive;
}
`