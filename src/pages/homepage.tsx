import { Link, useNavigate } from "react-router-dom";
import { Button, Content, ElementList, Title } from "../components";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Content>
      <Title>Bem Vindo ao sistema de Avalição de Professores</Title>
      <ElementList hastitle >
        <Button label="Estudantes" onClick={() => navigate('/students')} width="20vw" />
        <Button label="Departamentos" onClick={() => navigate('/departments')} width="20vw" />
        <Button label="Professores" onClick={() => navigate('/teachers')} width="20vw" />
      </ElementList>
    </Content>
  )
}

export default Homepage;