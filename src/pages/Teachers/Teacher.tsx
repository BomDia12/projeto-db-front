import { Teacher } from "../../utils/models"
import { useLoaderData, useNavigate } from "react-router-dom"
import { Button, Content, ElementList, ListItem, Title } from "../../components"

const TeacherView = () => {
  const teacherData = useLoaderData() as Teacher;
  const navigate = useNavigate();

  return (
    <Content>
      <Title>{teacherData?.nome}</Title>
      <ElementList hastitle>
        <ListItem>Nome: {teacherData?.nome}</ListItem>
        <ListItem>Email: {teacherData?.email}</ListItem>
        <ListItem>Id departamento: {teacherData?.id_departamento}</ListItem>
        <ListItem>Nota média: {teacherData?.nota}</ListItem>
        <Button width="20vw" label="Voltar" onClick={() => navigate(-1)} style={{ 'marginBottom': 0 }} />
        <Button width="20vw" label="Editar Professor" onClick={() => navigate(`/teachers/${teacherData.id as string}/edit`)} />
      </ElementList>
    </Content>
  )
}

export default TeacherView