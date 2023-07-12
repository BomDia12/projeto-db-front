import { Student } from "../../utils/models"
import { useLoaderData, useNavigate } from "react-router-dom"
import { Button, Content, ElementList, ListItem, Title } from "../../components"

const StudentView = () => {
  const studentData = useLoaderData() as Student;
  const navigate = useNavigate();

  return (
    <Content>
      <Title>{studentData?.nome}</Title>
      <ElementList hastitle>
        <ListItem>Email: {studentData?.email}</ListItem>
        <ListItem>Curso: {studentData?.curso}</ListItem>
        <Button width="20vw" label="Voltar" onClick={() => navigate(-1)} style={{ 'marginBottom': 0 }} />
        <Button width="20vw" label="Editar usuário" onClick={() => navigate(`/students/${studentData.id as string}/edit`)} />
      </ElementList>
    </Content>
  )
}

export default StudentView