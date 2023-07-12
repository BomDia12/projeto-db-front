/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Student } from '../../utils/models';
import { Button, Content, ElementList, Link, ListItem, Title } from '../../components';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';

const StudentsIndex = () => {

  const students = useLoaderData() as Student[];

  const navigate = useNavigate();

  return (
    <Content>
      <Title>Alunos Cadastrados</Title>
      <ElementList hastitle>
        {students?.map((student) =>
          <Link key={student.id} to={`/students/${student.id}`}>
            <ListItem>{student.nome}</ListItem>
          </Link>)}
        <Button label='Cadastar um Novo Usuário' onClick={() => navigate('/students/create')} width='30vw' />
      </ElementList>
    </Content >
  )
}

export default StudentsIndex