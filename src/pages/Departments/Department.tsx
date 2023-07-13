import { Department } from "../../utils/models"
import { useLoaderData, useNavigate } from "react-router-dom"
import { Button, Content, ElementList, ListItem, Title } from "../../components"

const DepartmentView = () => {
  const departmentData = useLoaderData() as Department;
  const navigate = useNavigate();

  return (
    <Content>
      <Title>{departmentData?.nome}</Title>
      <ElementList hastitle>
        <ListItem>Nome: {departmentData?.nome}</ListItem>
        <Button width="20vw" label="Voltar" onClick={() => navigate(-1)} style={{ 'marginBottom': 0 }} />
        <Button width="20vw" label="Editar departamento" onClick={() => navigate(`/departments/${departmentData.id as string}/edit`)} />
      </ElementList>
    </Content>
  )
}

export default DepartmentView