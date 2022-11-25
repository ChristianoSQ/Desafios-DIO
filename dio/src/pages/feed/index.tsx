import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />

      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1}>
          <TitleHighlight># Ranking 10 Top da semana!</TitleHighlight>
          <UserInfo
            percentual={30}
            nome="Christiano"
            image="https://avatars.githubusercontent.com/u/79290215?s=400&u=efe94c99e0172651385159a8e3d1138b9563adb4&v=4"
          />
          <UserInfo
            percentual={40}
            nome="Christiano Quintela"
            image="https://avatars.githubusercontent.com/u/79290215?s=400&u=efe94c99e0172651385159a8e3d1138b9563adb4&v=4"
          />
          <UserInfo
            percentual={50}
            nome="Chris"
            image="https://avatars.githubusercontent.com/u/79290215?s=400&u=efe94c99e0172651385159a8e3d1138b9563adb4&v=4"
          />
          <UserInfo
            percentual={60}
            nome="Chris SQ"
            image="https://avatars.githubusercontent.com/u/79290215?s=400&u=efe94c99e0172651385159a8e3d1138b9563adb4&v=4"
          />
          <UserInfo
            percentual={70}
            nome="Christiano Souza Quintela"
            image="https://avatars.githubusercontent.com/u/79290215?s=400&u=efe94c99e0172651385159a8e3d1138b9563adb4&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
