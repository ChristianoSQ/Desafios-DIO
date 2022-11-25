import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";
import { IHeader } from "./types";
import { useNavigate } from "react-router-dom";

const Header = ({ autenticado }: IHeader) => {
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const navigate3 = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };
  const handleClickRegister = () => {
    navigate2("/register");
  };
  const handleClickIndex = () => {
    navigate3("/home");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/home">
            <img
              src={logo}
              alt="Logo da DIO"
              style={{ width: "111px", height: "111px" }}
            />
          </Link>

          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/79290215?s=400&u=efe94c99e0172651385159a8e3d1138b9563adb4&v=4" />
          ) : (
            <>
            
              <MenuRight onClick={handleClickIndex}>Home</MenuRight>
              <Button title="Entrar" onClick={handleClickLogin} />
              <Button title="Cadastrar" onClick={handleClickRegister} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
