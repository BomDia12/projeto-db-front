import { useState } from "react";
import { Button, Content, ElementList, Input, Select, Title } from "../../components"
import { useLoaderData, useNavigate } from "react-router-dom";
import { Department, Teacher } from "../../utils/models";
import { createDepartment, createTeacher } from "../../utils/requests";
import { mapObjectToOptions } from "../../utils/functions";

const CreateTeacher = () => {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [departamento, setDepartamento] = useState<string>('');
  const navigate = useNavigate();
  const departments = useLoaderData() as Department[];
  const options = mapObjectToOptions(departments);

  const handleCreate = async () => {
    const professor: Teacher = {
      nome,
      email,
      id_departamento: departamento
    }

    await createTeacher(professor);
  }

  return (
    <Content>
      <Title>Criar um novo Professor</Title>
      <ElementList hastitle>
        <Input placeholder="Nome" setValue={setNome} value={nome} />
        <Input placeholder="Email" setValue={setEmail} value={email} />
        <Select placeholder="Departamento" options={options} onChange={(e) => setDepartamento(e?.value as string)} />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
        <Button label="Criar" width="10vw" onClick={handleCreate} style={{ marginBottom: 0 }} />
        <Button label="Voltar" onClick={() => navigate(-1)} width="10vw" />
      </ElementList>
    </Content>
  )
}

export default CreateTeacher;