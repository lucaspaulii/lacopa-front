import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductBox from "../components/ProductBox.js";
import Header from "../components/Header.js";
import { Destaques, ProductsDisplay } from "../style/styled.js";

export default function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = `https://lacopa-api.onrender.com/category/${category}`;
    const promise = axios.get(URL);
    promise.then((res) => {
      setProducts(res.data);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }, [category]);

  return (
    <CategoryContainer>
      <Header />
      <Destaques>{category}</Destaques>
      <ProductsDisplay>
        {products.map((product) => {
          return (
            <ProductBox
              key={product._id}
              id={product._id}
              amount={product.amount}
              category={product.category}
              description={product.description}
              image={product.image}
              name={product.name}
              value={product.value}
            />
          );
        })}
      </ProductsDisplay>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
    width: 100%;
    height: calc(100vh - 110px);
    margin-top: 110px;
    display: flex;
    flex-direction: column;
`
