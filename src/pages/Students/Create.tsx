import { useState } from "react";
import { Button, Content, ElementList, Input, Title } from "../../components"
import { useNavigate } from "react-router-dom";
import { Student } from "../../utils/models";
import { createStudent } from "../../utils/requests";

const CreateStudent = () => {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [curso, setCurso] = useState<string>('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    const student: Student = {
      nome,
      email,
      senha,
      curso
    }

    await createStudent(student);
  }

  return (
    <Content>
      <Title>Criar um novo Estudante</Title>
      <ElementList hastitle>
        <Input placeholder="Nome" setValue={setNome} value={nome} />
        <Input placeholder="Email" setValue={setEmail} value={email} />
        <Input placeholder="Senha" type="password" setValue={setSenha} value={senha} />
        <Input placeholder="Curso" setValue={setCurso} value={curso} />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
        <Button label="Criar" width="10vw" onClick={handleCreate} style={{ marginBottom: 0 }} />
        <Button label="Voltar" onClick={() => navigate(-1)} width="10vw" />
      </ElementList>
    </Content>
  )
}

export default CreateStudent;