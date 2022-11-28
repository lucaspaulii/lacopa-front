import axios from "axios";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import ProductBox from "../components/ProductBox.js";
import Header from "../components/Header.js";
import {
  CategoryContainer,
  Destaques,
  ProductsDisplay,
} from "../style/styled.js";

export default function SearchBar(params) {
  const { searchInput } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const URL = `https://lacopa-api.onrender.com/product/${searchInput}`;
    const promise = axios.get(URL);
    promise.then((res) => {
      setProducts(res.data);
      setIsLoading(false);
    });
    promise.catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
  }, [searchInput]);

  return (
    <CategoryContainer>
      <Header />
      <Destaques>{searchInput}</Destaques>
      <ProductsDisplay>
        {isLoading && (
          <RotatingLines
            strokeColor="gray"
            strokeWidth="5"
            animationDuration="0.75"
            width="80"
            visible={true}
          />
        )}
        {!isLoading &&
          ((products.length > 0)
            ? products[0].map((product) => {
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
              })
            : "Nenhum produto foi encontrado")}
      </ProductsDisplay>
    </CategoryContainer>
  );
}
