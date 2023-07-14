import { useLoaderData } from "react-router-dom"
import { TeacherReviews as Reviews } from "../../utils/models"
import { Content, ElementList, ListItem, Title } from "../../components";

const TeacherReviews = () => {
  const reviews = useLoaderData() as Reviews[];

  return (
    <Content>
      <Title>{reviews[0]?.nome_professor || 'nome'}</Title>
      <ElementList hastitle>
        { reviews.map(review => 
          <ListItem>nota: {review.nota}; Descrição: {review.descricao}</ListItem>
        )
        }
      </ElementList>
    </Content>
  )
}

export default TeacherReviews;