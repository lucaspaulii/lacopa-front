import { UserContainer } from "../style/styled";
import { UserInfoContext } from "../contexts/UserContext.js";
import { useContext } from "react";
import styled from "styled-components";

export default function UserInfoPage() {
  const { userInfo } = useContext(UserInfoContext);

  return (
    <UserContainer>
      <h1>LaCopa</h1>
      <h1>store</h1>
      <InfoContainer>
        <p>Nome:</p>
        <div>
          <p>{userInfo?.name}</p>
        </div>
        <p>E-mail:</p>
        <div>
          <p>{userInfo?.email}</p>
        </div>
        <p>CPF:</p>
        <div>
          <p>{userInfo?.cpf}</p>
        </div>
        <p>Endereço:</p>
        <div>
          <p>{userInfo?.address}</p>
        </div>
      </InfoContainer>
    </UserContainer>
  );
}

const InfoContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  p {
    text-align: left;
    margin-top: 15px;
    font-size: 20px;
  }
  div {
    background-color: #548e19;
    border-radius: 5px;
    width: 300px;
    p {
      padding: 10px;
    }
  }
`;
