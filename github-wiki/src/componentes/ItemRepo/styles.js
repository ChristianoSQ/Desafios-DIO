import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  a.remove {
    color: #ff0000;
    margin-top: 20px;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }

  button {
  background-color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 20px;

  width: 70px;
  height: 32px;

  margin: 20px 0 0 0;
  &: hover {
    background-color: #fafafa40;
    cursor: pointer;
  }
  
`;
