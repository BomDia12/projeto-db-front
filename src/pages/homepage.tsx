import { useNavigate } from "react-router-dom";
import { Button, Content, ElementList, Title } from "../components";
import { useUser } from "../context/user";

const Homepage = () => {
  const navigate = useNavigate();
  const { isAdmin } = useUser();

  return (
    <Content>
      <Title>Bem Vindo ao sistema de Avalição de Professores</Title>
      <ElementList hastitle >
        <Button label="Estudantes" onClick={() => navigate('/students')} width="20vw" />
        <Button label="Departamentos" onClick={() => navigate('/departments')} width="20vw" />
        <Button label="Professores" onClick={() => navigate('/teachers')} width="20vw" />
        <Button label="Turmas" onClick={() => navigate('/classes')} width="20vw" />
        { isAdmin && <Button label="Denuncias" onClick={() => navigate('/reports')} width="20vw" /> }
      </ElementList>
    </Content>
  )
}

export default Homepage;