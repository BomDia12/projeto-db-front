import { useState } from "react";
import { Button, Content, ElementList, Input, Select, Title } from "../../components"
import { useLoaderData, useNavigate } from "react-router-dom";
import { Teacher } from "../../utils/models";
import { updateTeacher } from "../../utils/requests";

const EditTeacher = () => {
  const teacherData = useLoaderData() as Teacher;
  const [nome, setNome] = useState<string>(teacherData.nome as string);
  const [email, setEmail] = useState<string>(teacherData.email as string);
  const navigate = useNavigate();

  const handleCreate = async () => {
    const professor: Teacher = {
      nome,
      email,
      id: teacherData.id
    }

    await updateTeacher(professor);
  }

  return (
    <Content>
      <Title>Criar um novo Professor</Title>
      <ElementList hastitle>
        <Input placeholder="Nome" setValue={setNome} value={nome} />
        <Input placeholder="Email" setValue={setEmail} value={email} />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
        <Button label="Editar" width="10vw" onClick={handleCreate} style={{ marginBottom: 0 }} />
        <Button label="Voltar" onClick={() => navigate(-1)} width="10vw" />
      </ElementList>
    </Content>
  )
}

export default EditTeacher;