import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CategoriesDropDown({ setIsDropDown, categories }) {
  const [openUl, setOpenUl] = useState(false);

  useEffect(() => {
    setOpenUl(true);
  }, []);

  return (
    <CategoriesDropDownContainer onMouseLeave={() => setIsDropDown(false)} openUl={openUl}>
      <DropDownUl openUl={openUl}>
        {categories.map((category) => {
          return (
            <li>
              <Link
                to={`/categories/${category.toLowerCase()}`}
                key={category}
                onClick={() => setIsDropDown(false)}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </DropDownUl>
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
  justify-content: center;
  background-color: ${props => (props.openUl ? '#f6d14bcc' : '#ffffffcc')};
  padding-top: ${props => (props.openUl ? '10px' : '0')};
  padding-bottom: ${props => (props.openUl ? '10px' : '0')};
  transition: background-color 0.7s ease;
  border-radius: 5px;
`;

const DropDownUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  font-size: 18px;
  max-height: ${props => (props.openUl ? '500px' : '0')};
  transition: max-height 0.7s ease;
  * {
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: #000;
    padding: 5px 0;
    text-decoration: none;
    border-bottom: 2px solid #f6d14b99;
    opacity: ${props => (props.openUl ? '1' : '0')};
    transition: opacity 1s ease-in;
  }
  *:hover {
    color: red;
  }
  :nth-child(3) {
    border-top: 1px solid green;
  }
`;
