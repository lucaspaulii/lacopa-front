import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CategoriesDropDown({ setIsDropDown, categories }) {
  

  return (
    <CategoriesDropDownContainer onMouseLeave={() => setIsDropDown(false)}>
      {categories.map((category) => {
        return <Link to={`/categories/${category.toLowerCase()}`} key={category} onClick={() => setIsDropDown(false)}>{category}</Link>;
      })}
    </CategoriesDropDownContainer>
  );
}

const CategoriesDropDownContainer = styled.div`
  width: 120px;
  left: 5px;
  top: 35px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F6D14BCC;
  padding: 15px 0;
  border-radius: 5px;
  * {
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: #000;
    padding: 5px 0;
    text-decoration: none;
    border-bottom: 2px solid #F6D14B99;
  }
  *:hover {
    color: red;
  }
  :nth-child(3) {
    border-top: 1px solid green;
  }
`;
