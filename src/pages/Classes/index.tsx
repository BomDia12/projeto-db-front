import { Button, Content, ElementList, Link, ListItem, Title } from '../../components';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Class } from '../../utils/models';

const GenericIndex = () => {

  const objects = useLoaderData() as Class[];

  const navigate = useNavigate();

  return (
    <Content>
      <Title>Turmas</Title>
      <ElementList hastitle>
        {objects?.map((object) =>
          <Link key={object.id} to={`/classes/${object.id}`}>
            <ListItem>{object.codigo}{object.nota ? ` (nota: ${object.nota})` : ''}</ListItem>
          </Link>)}
        <Button label='Voltar para a Página Principal' onClick={() => navigate(`/`)} width='30vw' />
      </ElementList>
    </Content >
  )
}

export default GenericIndex;