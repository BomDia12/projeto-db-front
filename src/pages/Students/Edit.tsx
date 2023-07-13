import { useState } from "react";
import { Button, Content, ElementList, Input, Title } from "../../components"
import { useLoaderData, useNavigate } from "react-router-dom";
import { Student } from "../../utils/models";
import { updateStudent } from "../../utils/requests";

const UpdateStudent = () => {
  const studentData = useLoaderData() as Student;
  const [nome, setNome] = useState<string>(studentData.nome as string);
  const [email, setEmail] = useState<string>(studentData.email);
  const [curso, setCurso] = useState<string>(studentData.curso as string);
  const navigate = useNavigate();

  const handleCreate = async () => {
    const student: Student = {
      nome,
      curso,
      email,
      id: studentData.id as string
    }

    await updateStudent(student);
  }

  return (
    <Content>
      <Title>Criar um novo Estudante</Title>
      <ElementList hastitle>
        <Input placeholder="Nome" setValue={setNome} value={nome} />
        <Input placeholder="Email" setValue={setEmail} value={email} />
        <Input placeholder="Curso" setValue={setCurso} value={curso} />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
        <Button label="Editar" width="10vw" onClick={handleCreate} style={{ marginBottom: 0 }} />
        <Button label="Voltar" onClick={() => navigate(-1)} width="10vw" />
      </ElementList>
    </Content>
  )
}

export default UpdateStudent;