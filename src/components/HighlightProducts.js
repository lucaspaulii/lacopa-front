import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import ProductBox from "./ProductBox.js"


export default function HighlightProducts() {
    const [products, setProducts] = useState([])

    useEffect (() => {
        const highlightProducts = axios.get(`http://localhost:5000/main`);

        highlightProducts.then(res => {
            console.log(res);
            setProducts(res.data);
        });

        highlightProducts.catch(err => {
            console.log(err.response.data);
        })
    }, [])

    return (
        <ContainerProducts>
            {products.map((product) =>
            (
                <ProductBox 
                id={product.id}
                amount={product.amount}
                category={product.category}
                description={product.description}
                image={product.image}
                name={product.name}
                value={product.value}
                />
            ))}
        </ContainerProducts>
    )
}

const ContainerProducts = styled.div`
display: flex;
flex-wrap: wrap;
gap: 15px;
align-items: center;
justify-content: center;
margin-bottom: 15px;
`