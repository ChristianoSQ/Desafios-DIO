import { useState } from "react";
import gitlogo from "../img/5.png";
import Input from "../componentes/Input";
import Button from "../componentes/Button";
import ItemRepo from "../componentes/ItemRepo";
import { api } from "../services/api";

import { Container } from "./styles";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado e ou já existe!");
    setCurrentRepo("");
  };

  const handleRemoveRepo = (id) => {
    const result = repos.filter((repo) => repo.id !== id);
    setRepos(result);
  };

  return (
    <Container>
      <img
        src={gitlogo}
        width={72}
        height={72}
        alt="Logo Github transparente."
      />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />

      {repos.map((repo) => (
        <ItemRepo
          handleRemoveRepo={handleRemoveRepo}
          repo={repo}
          language={repo.language}
        />
      ))}
    </Container>
  );
}

export default App;
