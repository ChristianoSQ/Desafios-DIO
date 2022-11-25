import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import logo from "../../assets/banner2.png";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={logo} />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/79290215?s=400&u=efe94c99e0172651385159a8e3d1138b9563adb4&v=4" />
          <div>
            <h4>Christiano Quintela</h4>
            <p>Há algum tempo!</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto feito utilizando HTML+CSS+JS+REACT!</h4>
          <p>
            Projeto feito no Bootcamp da DIO Orange Tech+.{" "}
            <strong>Saiba mais em:</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JS #REACT</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
