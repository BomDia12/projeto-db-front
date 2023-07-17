import { useLoaderData, useNavigate } from "react-router-dom"
import { Button, Content, ElementList, ListItem, Title } from "../../components"
import { ReportReview } from "../../utils/models";
import { styled } from "styled-components";
import { acceptReport, refuseReport } from "../../utils/requests";

const Action = styled.span`
  text-decoration: solid;
  color: #383F51;
  cursor: pointer;
`;

const ReportList = () => {
  const reports = useLoaderData() as ReportReview[];
  const navigate = useNavigate();

  return (
    <Content>
      <Title>Denuncias</Title>
      <ElementList hastitle>
        {reports.map(report => 
        <ListItem>
          {report.descricao} <Action onClick={() => acceptReport(report.id_avaliacao as string)}>deletar</Action> <Action onClick={() => refuseReport(report.id as string)}>apagar</Action>
        </ListItem>)}
        <Button label="Voltar" width="20vw" onClick={() => navigate('/')} />
      </ElementList>
    </Content>
  )
}

export default ReportList;
