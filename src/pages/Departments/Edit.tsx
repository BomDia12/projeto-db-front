import { useState } from "react";
import { Button, Content, ElementList, Input, Title } from "../../components"
import { useLoaderData, useNavigate } from "react-router-dom";
import { Department } from "../../utils/models";
import { createDepartment, updateDepartment } from "../../utils/requests";

const EditDepartment = () => {
  const departmentData = useLoaderData() as Department
  const [nome, setNome] = useState<string>(departmentData.nome as string);
  const navigate = useNavigate();

  const handleCreate = async () => {
    const department: Department = {
      nome,
      id: departmentData.id
    }

    await updateDepartment(department);
  }

  return (
    <Content>
      <Title>Editar Departamento</Title>
      <ElementList hastitle>
        <Input placeholder="Nome" setValue={setNome} value={nome} />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
        <Button label="Edit" width="10vw" onClick={handleCreate} style={{ marginBottom: 0 }} />
        <Button label="Voltar" onClick={() => navigate(-1)} width="10vw" />
      </ElementList>
    </Content>
  )
}

export default EditDepartment;