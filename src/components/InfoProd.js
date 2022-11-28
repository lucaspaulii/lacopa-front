import { useState } from "react"
import styled from "styled-components"

export default function InfoProd(props) {
    const {price, name, quantity} = props
    const totalPrice = parseInt(quantity) * parseInt(price)
    return (
        <Purchase>
            <>
                <p>{name}</p>
            </>
            <>
                <p>R${totalPrice},00</p>
            </>
        </Purchase>
    )
}



const Purchase = styled.div`
width: 95%;
font-family: 'Londrina Solid', cursive;
p {
    font-weight: 300;
    font-size: 24px;
}
display: flex;
justify-content: space-between;
`