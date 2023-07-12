import { useState } from "react";
import { Button, Content, ElementList, Input, Title } from "../../components"
import { useNavigate } from "react-router-dom";
import { Department } from "../../utils/models";
import { createDepartment } from "../../utils/requests";

const CreateDepartment = () => {
  const [nome, setNome] = useState<string>('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    const department: Department = {
      nome
    }

    await createDepartment(department);
  }

  return (
    <Content>
      <Title>Criar um novo Estudante</Title>
      <ElementList hastitle>
        <Input placeholder="Nome" setValue={setNome} value={nome} />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
        <Button label="Criar" width="10vw" onClick={handleCreate} style={{ marginBottom: 0 }} />
        <Button label="Voltar" onClick={() => navigate(-1)} width="10vw" />
      </ElementList>
    </Content>
  )
}

export default CreateDepartment;