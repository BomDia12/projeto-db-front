import { useLoaderData, useNavigate } from "react-router-dom"
import { TeacherReviews as Reviews } from "../../utils/models"
import { Button, Content, ElementList, ListItem, Title } from "../../components";

const TeacherReviews = () => {
  const reviews = useLoaderData() as Reviews[];
  const navigate = useNavigate();
  console.log(reviews);

  return (
    <Content>
      <Title>{reviews[0]?.nome_professor || 'nome'}</Title>
      <ElementList hastitle>
        { reviews.map(review => 
          <ListItem>nota: {review.nota}; Descrição: {review.descricao}</ListItem>
        )
        }
        <Button label="Voltar" onClick={() => navigate(-1)} width="20vw" />
      </ElementList>
    </Content>
  )
}

export default TeacherReviews;