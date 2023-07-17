import { useLoaderData, useNavigate } from "react-router-dom"
import { ClassReviews } from "../../utils/models"
import { Button, Content, ElementList, ListItem, Title } from "../../components";
import { styled } from "styled-components";
import { useUser } from "../../context/user";
import { reportReview } from "../../utils/requests";

const Action = styled.span`
  text-decoration: solid;
  color: #383F51;
  cursor: pointer;
`;

const ClassView = () => {
  const data = useLoaderData() as ClassReviews[];
  const { userId } = useUser();
  const navigate = useNavigate();

  return (
    <Content>
      <Title>{data[0].codigo}</Title>
      <ElementList hastitle>
        { data[0].id_avaliacao !== '' &&
          data.map(review => <ListItem>{review.nota}: {review.descricao} <Action onClick={() => reportReview(review.id_avaliacao as string, userId as string)}>Denunciar</Action></ListItem>)
        }
        <Button label="Voltar" width="20vw" onClick={() => navigate(-1)} />
      </ElementList>
    </Content>
  )
}

export default ClassView;