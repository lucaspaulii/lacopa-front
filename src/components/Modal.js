import styled from "styled-components";
import { useState, useEffect } from "react";
import InfoProd from "./InfoProd";

export default function Modal(props) {
    const {products, setModal} = props
    const [total, setTotal] = useState(0);

    setTimeout(() => {
        setModal(false);
      }, 8000);

    useEffect (() => {
        let valorTotal = 0;
        products.map((product) =>
        valorTotal = valorTotal + (product.price*product.quantity)
        )
        setTotal(valorTotal);
    })

    return (
        <Container>
            <ModalCont>
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
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
background-color: rgba(0, 0, 0, 0.8);
`

const ModalCont = styled.div`
background-color: #548E19;
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
h1 {
font-family: 'Londrina Solid', cursive;
font-size: 40px;
color: #FFFFFF;
text-shadow: -0.7px -0.7px 0 #000, 0 -0.7px 0 #000, 0.7px -0.7px 0 #000,
      0.7px 0 0 #000, 0.7px 0.7px 0 #000, 0 0.7px 0 #000, -0.7px 0.7px 0 #000,
      -0.7px 0 0 #000;
}
`

const Border = styled.div`
width: 340px;
height: 35px;
background-color: #F6D14B;
filter: drop-shadow(0px 0.3px 2.5px #000);
`