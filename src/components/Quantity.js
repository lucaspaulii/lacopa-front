import styled from "styled-components";
import { useState } from "react";


export default function Quantity() {
const [amount, setAmount] = useState(1);

    function handleQty(e) {
        setAmount(e.target.value)
    }

    return (
        <QuantityContainer>
            <p>Quantidade:</p>
            <QtyContainer>
                <QtyButton onClick={() => setAmount(amount-1)}>-</QtyButton>
                <Qty type="number" name="qty" value={amount} onChange={handleQty}/>
                <QtyButton onClick={() => setAmount(amount+1)}>+</QtyButton>
            </QtyContainer>
        </QuantityContainer>
    )}