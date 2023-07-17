import { Button, Content, ElementList, Link, ListItem, Title } from './index';
import { useLoaderData, useNavigate } from 'react-router-dom';

const GenericIndex = ({
  title,
  route,
  buttonText,
  usesCodigo = false
}: {
  title: string;
  route: string;
  buttonText: string;
  usesCodigo: boolean;
}) => {

  const objects = useLoaderData() as any[];

  const navigate = useNavigate();

  return (
    <Content>
      <Title>{title}</Title>
      <ElementList hastitle>
        {objects?.map((object) =>
          <Link key={object.id} to={`/${route}/${object.id}`}>
            <ListItem>{usesCodigo ? object.codigo : object.nome}</ListItem>
          </Link>)}
        <Button label={buttonText} onClick={() => navigate(`/${route}/create`)} width='30vw' style={{ marginBottom: 0 }} />
        <Button label='Voltar para a Página Principal' onClick={() => navigate(`/`)} width='30vw' />
      </ElementList>
    </Content >
  )
}

export default GenericIndex;