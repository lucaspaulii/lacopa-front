import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HighlightProducts(props) {
    const {id, amount, category, description, image, name, value} = props
    const navigate = useNavigate();

    return (
            <ProductContainer onClick={() => navigate(`/products/${id}`)}>
                <ProductImage src={image} />
                <p>{name}</p>
                <p>R${value},00</p>
            </ProductContainer>
    )
}

const ProductContainer = styled.div`
font-family: "Open Sans", sans-serif;
height: 130px;
width: 100px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
font-size: 12px;
font-weight: 100;
text-align: center;
color: black;
border-radius: 5px;
font-weight: 600;
padding: 5px 0;
overflow-y: hidden;
filter: drop-shadow(0px 1px 2px #000);
p:nth-child(2) {
    width: 80%;
    margin-top: 0;
    margin-bottom: 0;
}
p:nth-child(3) {
    font-size: 10px;
    font-weight: 400;
    padding-top: 5px;
}
`

const ProductImage = styled.img`
max-height: 60px;
max-width: 90%;
`